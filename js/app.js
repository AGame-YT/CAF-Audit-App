(function () {
  "use strict";

  const STORAGE_KEY = "caf-audit-state-v1";
  const STATUSES = ["unreviewed", "not-achieved", "partially-achieved", "achieved"];
  const STATUS_LABEL = {
    "unreviewed": "To do",
    "not-achieved": "Not achieved",
    "partially-achieved": "Partial",
    "achieved": "Achieved"
  };
  const STATUS_LABEL_LONG = {
    "unreviewed": "Not reviewed",
    "not-achieved": "NOT ACHIEVED",
    "partially-achieved": "PARTIALLY ACHIEVED",
    "achieved": "ACHIEVED"
  };

  // ---------- State ----------
  let state = loadState();
  let expandedPrinciples = new Set();
  let expandedDetail = new Set();
  let statusFilter = "all";
  let searchQuery = "";
  let saveTimer = null;
  let storageWarned = false;

  function defaultState() {
    return { version: 1, orgName: "", outcomes: {}, updatedAt: null };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object" || !parsed.outcomes) return defaultState();
      return Object.assign(defaultState(), parsed);
    } catch (e) {
      return defaultState();
    }
  }

  function saveState(immediate) {
    const doSave = () => {
      try {
        state.updatedAt = new Date().toISOString();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (e) {
        if (!storageWarned) {
          storageWarned = true;
          showToast("Warning: couldn't save (storage unavailable/full)");
        }
      }
    };
    if (immediate) { clearTimeout(saveTimer); doSave(); return; }
    clearTimeout(saveTimer);
    saveTimer = setTimeout(doSave, 250);
  }

  function getOutcomeState(id) {
    return state.outcomes[id] || { status: "unreviewed", notes: "" };
  }

  function setStatus(id, status) {
    const cur = getOutcomeState(id);
    const next = cur.status === status ? "unreviewed" : status;
    state.outcomes[id] = Object.assign({}, cur, { status: next });
    saveState();
  }

  function setNotes(id, notes) {
    const cur = getOutcomeState(id);
    state.outcomes[id] = Object.assign({}, cur, { notes });
    saveState();
  }

  // ---------- Rollups ----------
  function allOutcomes() {
    const out = [];
    CAF_DATA.forEach(p => p.outcomes.forEach(o => out.push(Object.assign({ principleId: p.id }, o))));
    return out;
  }

  function rollup(outcomeIds) {
    const counts = { achieved: 0, "partially-achieved": 0, "not-achieved": 0, unreviewed: 0 };
    outcomeIds.forEach(id => { counts[getOutcomeState(id).status]++; });
    const total = outcomeIds.length;
    const reviewed = total - counts.unreviewed;
    let worst = "unreviewed";
    if (reviewed > 0) {
      worst = counts["not-achieved"] > 0 ? "not-achieved"
        : counts["partially-achieved"] > 0 ? "partially-achieved"
        : "achieved";
    }
    return { total, reviewed, worst, counts };
  }

  // ---------- Filtering ----------
  function outcomeMatches(principle, outcome) {
    if (statusFilter !== "all" && getOutcomeState(outcome.id).status !== statusFilter) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    const hay = [
      principle.id, principle.title, outcome.id, outcome.title,
      ...(outcome.achieved || []), ...(outcome.partiallyAchieved || []), ...(outcome.notAchieved || [])
    ].join(" \n ").toLowerCase();
    return hay.includes(q);
  }

  // ---------- Rendering ----------
  const contentEl = document.getElementById("content");
  const emptyStateEl = document.getElementById("emptyState");

  function render() {
    renderDashboard();
    contentEl.innerHTML = "";
    const filterActive = statusFilter !== "all" || !!searchQuery;
    let anyVisible = false;

    CAF_OBJECTIVES.forEach(obj => {
      const principles = CAF_DATA.filter(p => p.objectiveId === obj.id);
      const objWrap = document.createElement("section");
      objWrap.className = "objective";

      const visiblePrinciples = principles.filter(p => p.outcomes.some(o => outcomeMatches(p, o)));
      if (visiblePrinciples.length === 0) return;

      const h = document.createElement("h2");
      h.className = "objective-title";
      h.textContent = obj.id + " — " + obj.title;
      objWrap.appendChild(h);

      visiblePrinciples.forEach(p => {
        anyVisible = true;
        objWrap.appendChild(renderPrinciple(p, filterActive));
      });

      contentEl.appendChild(objWrap);
    });

    emptyStateEl.hidden = anyVisible;
  }

  function renderPrinciple(principle, filterActive) {
    const ids = principle.outcomes.map(o => o.id);
    const r = rollup(ids);
    const visibleOutcomes = principle.outcomes.filter(o => outcomeMatches(principle, o));
    const isOpen = filterActive ? visibleOutcomes.length > 0 : expandedPrinciples.has(principle.id);

    const wrap = document.createElement("article");
    wrap.className = "principle" + (isOpen ? " open" : "");
    wrap.dataset.principleId = principle.id;

    const head = document.createElement("button");
    head.type = "button";
    head.className = "principle-head";
    head.setAttribute("aria-expanded", String(isOpen));
    head.innerHTML =
      '<span class="badge-dot st-' + r.worst + '"></span>' +
      '<span class="principle-code">' + principle.id + '</span>' +
      '<span class="principle-titlewrap">' +
        '<span class="principle-title">' + escapeHtml(principle.title) + '</span>' +
        '<span class="principle-frac">' + r.reviewed + ' / ' + r.total + ' reviewed</span>' +
      '</span>' +
      '<svg class="chevron" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M7 10l5 5 5-5z"/></svg>';
    head.addEventListener("click", () => {
      if (expandedPrinciples.has(principle.id)) expandedPrinciples.delete(principle.id);
      else expandedPrinciples.add(principle.id);
      render();
    });
    wrap.appendChild(head);

    const body = document.createElement("div");
    body.className = "principle-body";

    if (principle.intro) {
      const intro = document.createElement("p");
      intro.className = "principle-intro";
      intro.textContent = principle.intro;
      body.appendChild(intro);
    }
    if (principle.url) {
      const link = document.createElement("a");
      link.className = "principle-link";
      link.href = principle.url;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = "Full NCSC guidance ↗";
      body.appendChild(link);
    }

    (filterActive ? visibleOutcomes : principle.outcomes).forEach(o => body.appendChild(renderOutcome(principle, o)));

    wrap.appendChild(body);
    return wrap;
  }

  function renderOutcome(principle, outcome) {
    const st = getOutcomeState(outcome.id);
    const wrap = document.createElement("div");
    wrap.className = "outcome";
    wrap.dataset.outcomeId = outcome.id;

    const head = document.createElement("div");
    head.className = "outcome-head";
    head.innerHTML =
      '<span class="outcome-id">' + outcome.id + '</span>' +
      '<span class="outcome-title">' + escapeHtml(outcome.title) + '</span>';
    wrap.appendChild(head);

    const statusRow = document.createElement("div");
    statusRow.className = "status-row";
    STATUSES.forEach(s => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "status-btn sel-" + s + (st.status === s ? " selected" : "");
      btn.textContent = STATUS_LABEL[s];
      btn.addEventListener("click", () => { setStatus(outcome.id, s); render(); });
      statusRow.appendChild(btn);
    });
    wrap.appendChild(statusRow);

    const hasDetail = (outcome.achieved && outcome.achieved.length) ||
      (outcome.partiallyAchieved && outcome.partiallyAchieved.length) ||
      (outcome.notAchieved && outcome.notAchieved.length);

    if (hasDetail) {
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "detail-toggle";
      const isOpen = expandedDetail.has(outcome.id);
      toggle.textContent = (isOpen ? "Hide" : "Show") + " indicators of good practice";
      toggle.addEventListener("click", () => {
        if (expandedDetail.has(outcome.id)) expandedDetail.delete(outcome.id);
        else expandedDetail.add(outcome.id);
        render();
      });
      wrap.appendChild(toggle);

      const detail = document.createElement("div");
      detail.className = "igp-detail" + (isOpen ? " open" : "");
      detail.appendChild(igpGroup("Achieved", "g-achieved", outcome.achieved));
      detail.appendChild(igpGroup("Partially achieved", "g-partially", outcome.partiallyAchieved));
      detail.appendChild(igpGroup("Not achieved", "g-not", outcome.notAchieved));
      wrap.appendChild(detail);
    }

    const notes = document.createElement("textarea");
    notes.className = "notes-field";
    notes.placeholder = "Evidence, gaps, notes…";
    notes.rows = 1;
    notes.value = st.notes || "";
    notes.addEventListener("input", () => setNotes(outcome.id, notes.value));
    wrap.appendChild(notes);

    return wrap;
  }

  function igpGroup(label, cls, items) {
    const g = document.createElement("div");
    g.className = "igp-group " + cls;
    if (!items || !items.length) { g.hidden = true; return g; }
    const h = document.createElement("h4");
    h.textContent = label;
    g.appendChild(h);
    const ul = document.createElement("ul");
    items.forEach(t => {
      const li = document.createElement("li");
      li.textContent = t;
      ul.appendChild(li);
    });
    g.appendChild(ul);
    return g;
  }

  function escapeHtml(s) {
    const d = document.createElement("div");
    d.textContent = s == null ? "" : s;
    return d.innerHTML;
  }

  // ---------- Dashboard ----------
  function renderDashboard() {
    const all = allOutcomes().map(o => o.id);
    const r = rollup(all);
    const pct = r.total ? Math.round((r.reviewed / r.total) * 100) : 0;

    document.getElementById("progressFill").style.width = pct + "%";
    document.getElementById("progressBar").setAttribute("aria-valuenow", String(pct));
    document.getElementById("progressFrac").textContent = r.reviewed + " / " + r.total + " reviewed";
    document.getElementById("countAchieved").textContent = r.counts.achieved;
    document.getElementById("countPartial").textContent = r.counts["partially-achieved"];
    document.getElementById("countNot").textContent = r.counts["not-achieved"];
    document.getElementById("countUnreviewed").textContent = r.counts.unreviewed;
  }

  // ---------- Jump to next unreviewed ----------
  function jumpToNext() {
    for (const p of CAF_DATA) {
      for (const o of p.outcomes) {
        if (getOutcomeState(o.id).status === "unreviewed") {
          statusFilter = "all"; searchQuery = ""; searchInput.value = "";
          document.querySelectorAll(".filter-chip").forEach(c => c.classList.toggle("active", c.dataset.filter === "all"));
          expandedPrinciples.add(p.id);
          render();
          requestAnimationFrame(() => {
            const el = contentEl.querySelector('[data-outcome-id="' + cssEscape(o.id) + '"]');
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "center" });
              el.style.transition = "box-shadow 0.3s ease";
              el.style.boxShadow = "0 0 0 2px var(--accent) inset";
              setTimeout(() => { el.style.boxShadow = ""; }, 1600);
            }
          });
          return;
        }
      }
    }
    showToast("All outcomes have been reviewed");
  }

  function cssEscape(s) { return s.replace(/[.:]/g, "\\$&"); }

  // ---------- Filter bar wiring ----------
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", () => { searchQuery = searchInput.value.trim(); render(); });

  document.getElementById("filterChips").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-chip");
    if (!btn) return;
    statusFilter = btn.dataset.filter;
    document.querySelectorAll(".filter-chip").forEach(c => c.classList.toggle("active", c === btn));
    render();
  });

  document.getElementById("jumpNextBtn").addEventListener("click", jumpToNext);

  // ---------- Menu sheet ----------
  const sheet = document.getElementById("sheet");
  const sheetBackdrop = document.getElementById("sheetBackdrop");
  const menuBtn = document.getElementById("menuBtn");
  const orgNameInput = document.getElementById("orgNameInput");

  function openSheet() {
    orgNameInput.value = state.orgName || "";
    sheet.hidden = false; sheetBackdrop.hidden = false;
    menuBtn.setAttribute("aria-expanded", "true");
  }
  function closeSheet() {
    sheet.hidden = true; sheetBackdrop.hidden = true;
    menuBtn.setAttribute("aria-expanded", "false");
  }
  menuBtn.addEventListener("click", openSheet);
  sheetBackdrop.addEventListener("click", closeSheet);
  document.getElementById("closeSheetBtn").addEventListener("click", closeSheet);
  orgNameInput.addEventListener("input", () => {
    state.orgName = orgNameInput.value;
    document.getElementById("orgLabel").textContent = state.orgName || "NCSC Cyber Assessment Framework v4.0";
    saveState();
  });

  // ---------- Toast ----------
  let toastTimer = null;
  function showToast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, 2400);
  }

  // ---------- Export / Import / Reset ----------
  function download(filename, text, mime) {
    const blob = new Blob([text], { type: mime || "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  }

  function todayStr() {
    return new Date().toISOString().slice(0, 10);
  }

  document.getElementById("exportJsonBtn").addEventListener("click", () => {
    saveState(true);
    download("caf-audit-backup-" + todayStr() + ".json", JSON.stringify(state, null, 2), "application/json");
    showToast("Backup exported");
  });

  document.getElementById("exportReportBtn").addEventListener("click", () => {
    const lines = [];
    const all = allOutcomes().map(o => o.id);
    const r = rollup(all);
    lines.push("CAF Audit Report");
    lines.push("Organisation/system: " + (state.orgName || "—"));
    lines.push("Generated: " + new Date().toLocaleString("en-GB"));
    lines.push("Framework: NCSC Cyber Assessment Framework v4.0");
    lines.push("");
    lines.push("Overall: " + r.reviewed + "/" + r.total + " reviewed — " +
      r.counts.achieved + " Achieved, " + r.counts["partially-achieved"] + " Partially achieved, " +
      r.counts["not-achieved"] + " Not achieved, " + r.counts.unreviewed + " Not yet reviewed");
    lines.push("");

    CAF_OBJECTIVES.forEach(obj => {
      const principles = CAF_DATA.filter(p => p.objectiveId === obj.id);
      lines.push("=".repeat(60));
      lines.push("OBJECTIVE " + obj.id + " — " + obj.title.toUpperCase());
      lines.push("=".repeat(60));
      principles.forEach(p => {
        const pr = rollup(p.outcomes.map(o => o.id));
        lines.push("");
        lines.push(p.id + " " + p.title + "  [" + pr.reviewed + "/" + pr.total + " reviewed]");
        p.outcomes.forEach(o => {
          const st = getOutcomeState(o.id);
          lines.push("  " + o.id + " " + o.title + " — " + STATUS_LABEL_LONG[st.status]);
          if (st.notes) lines.push("      Notes: " + st.notes.replace(/\n/g, "\n              "));
        });
      });
      lines.push("");
    });

    download("caf-audit-report-" + todayStr() + ".txt", lines.join("\n"), "text/plain");
    showToast("Report exported");
  });

  const importInput = document.getElementById("importFileInput");
  document.getElementById("importJsonBtn").addEventListener("click", () => importInput.click());
  importInput.addEventListener("change", () => {
    const file = importInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        if (!parsed || typeof parsed !== "object" || typeof parsed.outcomes !== "object") {
          throw new Error("bad shape");
        }
        const count = Object.keys(parsed.outcomes).length;
        if (!confirm("Import backup with " + count + " saved outcome(s)? This will overwrite everything currently on this device.")) return;
        state = Object.assign(defaultState(), parsed);
        saveState(true);
        closeSheet();
        render();
        showToast("Backup imported");
      } catch (e) {
        alert("That file doesn't look like a valid CAF Audit Tracker backup.");
      } finally {
        importInput.value = "";
      }
    };
    reader.readAsText(file);
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    if (!confirm("This will permanently erase every status and note on this device. This cannot be undone. Continue?")) return;
    state = defaultState();
    saveState(true);
    expandedPrinciples.clear();
    expandedDetail.clear();
    closeSheet();
    render();
    showToast("All data reset");
  });

  // ---------- Init ----------
  if (state.orgName) document.getElementById("orgLabel").textContent = state.orgName;
  render();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").catch(() => {});
    });
  }
})();
