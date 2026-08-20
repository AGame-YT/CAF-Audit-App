// CAF v4.0 (published 18 April 2024) — NCSC Cyber Assessment Framework
// Source: https://www.ncsc.gov.uk/collection/cyber-assessment-framework (OGL v3.0)
const CAF_OBJECTIVES = [
  { id: "A", title: "Managing security risk" },
  { id: "B", title: "Protecting against cyber attack" },
  { id: "C", title: "Detecting cyber security events" },
  { id: "D", title: "Minimising the impact of cyber security incidents" }
];

const CAF_DATA = [
  {
    "id": "A1",
    "title": "Governance",
    "objectiveId": "A",
    "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-a-managing-security-risk/principle-a1-governance",
    "intro": "The organisation has appropriate management policies, processes and procedures in place to govern its approach to the security of network and information systems. Effective security should be driven by organisational management, with clear governance structures and well-defined lines of responsibility and accountability. Senior management should clearly articulate unacceptable impacts to the business (risk appetite) so decision makers at all levels can make informed decisions without constantly referring decisions up the governance chain.",
    "outcomes": [
      {
        "id": "A1.a",
        "title": "Board Direction",
        "achieved": [
          "Your organisation's approach and policy relating to the security of network and information systems supporting the operation of essential function(s) are owned and managed at board-level.",
          "These are communicated, in a meaningful way, to risk management decision-makers across the organisation.",
          "Regular board-level discussions on the security of network and information systems supporting the operation of your essential function(s) take place, based on timely and accurate information and informed by expert guidance.",
          "There is a board-level individual who has overall accountability for the security of network and information systems and drives regular discussion at board-level.",
          "Direction set at board-level is translated into effective organisational practices that direct and control the security of the network and information systems supporting your essential function(s).",
          "The board has the information and understanding needed in order to effectively discuss how the security and resilience of network and information systems contributes to the delivery of essential function(s) and what the potential impact from compromise of those systems would be.",
          "Security is recognised as an important enabler for the resilience of your essential function(s) and considered in all relevant discussions."
        ],
        "notAchieved": [
          "The security of network and information systems related to the operation of essential function(s) is not discussed or reported on regularly at board-level.",
          "Board-level discussions on the security of network and information systems are based on partial or out-of-date information, without the benefit of expert guidance.",
          "The security of network and information systems supporting your essential function(s) are not driven effectively by the direction set at board-level.",
          "Senior management or other pockets of the organisation consider themselves exempt from some policies or expect special accommodations to be made."
        ]
      },
      {
        "id": "A1.b",
        "title": "Roles and Responsibilities",
        "achieved": [
          "Key roles and responsibilities for the security of network and information systems supporting your essential function(s) have been identified.",
          "These are reviewed regularly to ensure they remain fit for purpose.",
          "Appropriately capable and knowledgeable staff fill those roles and are given the time, authority, and resources to carry out their duties.",
          "There is clarity on who in your organisation has overall accountability for the security of the network and information systems supporting your essential function(s)."
        ],
        "notAchieved": [
          "Key roles are missing, left vacant, or fulfilled on an ad-hoc or informal basis.",
          "Staff are assigned security responsibilities but without adequate authority or resources to fulfil them.",
          "Staff are unsure what their responsibilities are for the security of the essential function(s)."
        ]
      },
      {
        "id": "A1.c",
        "title": "Decision-making",
        "achieved": [
          "Senior management have visibility of key risk decisions made throughout the organisation.",
          "Risk management decision-makers understand their responsibilities for making effective and timely decisions in the context of the risk appetite regarding the essential function(s), as set by senior management.",
          "Risk management decision-making is delegated and escalated where necessary, across the organisation, to people who have the skills, knowledge, tools and authority they need.",
          "Risk management decisions are regularly reviewed to ensure their continued relevance and validity."
        ],
        "notAchieved": [
          "What should be relatively straightforward risk decisions are constantly referred up the chain, or not made.",
          "Risks are resolved informally (or ignored) at a local level when the use of a more formal risk reporting mechanism would be more appropriate.",
          "Decision-makers are unsure of what senior management's risk appetite is, or only understand it in vague terms such as \"averse\" or \"cautious\".",
          "Decision-makers are unable to justify their risk management decisions.",
          "Organisational structure causes risk decisions to be made in isolation (e.g. engineering and IT don't talk to each other about risk).",
          "Risk priorities are too vague to make meaningful distinctions between them (e.g. almost all risks are rated 'medium' or 'amber')."
        ]
      }
    ]
  },
  {
    "id": "A2",
    "title": "Risk Management",
    "objectiveId": "A",
    "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-a-managing-security-risk/principle-a2-risk-management",
    "intro": "The organisation takes appropriate steps to identify, assess and understand security risks to network and information systems supporting the operation of essential functions, including an overall organisational approach to risk management. There is no single blueprint for cyber security, so organisations need to determine the security risks that could affect the operation of essential functions and take measures to appropriately manage those risks.",
    "outcomes": [
      {
        "id": "A2.a",
        "title": "Risk Management Process",
        "achieved": [
          "Your organisational process ensures that security risks to network and information systems relevant to essential function(s) are identified, analysed, prioritised, and managed.",
          "Your approach to risk is focused on the possibility of adverse impact to your essential function(s), leading to a detailed understanding of how such impact might arise as a consequence of possible attacker actions and the security properties of your network and information systems.",
          "Your risk assessments are based on a clearly understood set of threat assumptions, informed by an up-to-date understanding of security threats to your essential function(s) and your sector.",
          "Your risk assessments are informed by an understanding of the vulnerabilities in the network and information systems supporting your essential function(s).",
          "The output from your risk management process is a clear set of security requirements that will address the risks in line with your organisational approach to security.",
          "Significant conclusions reached in the course of your risk management process are communicated to key security decision-makers and accountable individuals.",
          "Your risk assessments are dynamic and updated in the light of relevant changes which may include technical changes to network and information systems, change of use and new threat information.",
          "The effectiveness of your risk management process is reviewed regularly, and improvements made as required.",
          "You anticipate technological developments that could be used to adversely impact network and information systems supporting your essential function(s)."
        ],
        "partiallyAchieved": [
          "Your organisational process ensures that security risks to network and information systems relevant to essential function(s) are identified, analysed, prioritised, and managed.",
          "Your risk assessments are informed by an understanding of the vulnerabilities in the network and information systems supporting your essential function(s).",
          "The output from your risk management process is a clear set of security requirements that will address the risks in line with your organisational approach to security.",
          "Significant conclusions reached in the course of your risk management process are communicated to key security decision-makers and accountable individuals.",
          "You conduct risk assessments when significant events potentially affect the essential function(s), such as replacing a system, introducing new or emergent technologies or a change in the cyber security threat."
        ],
        "notAchieved": [
          "Risk assessments are not based on a clearly defined set of threat assumptions.",
          "Risk assessment outputs are too complex or unwieldy to be consumed by decision-makers and are not effectively communicated in a clear and timely manner.",
          "Risk assessments for network and information systems that support your essential function(s) are a \"one-off\" activity or not done at all.",
          "The security elements of projects or programmes are solely dependent on the completion of a risk management assessment without any regard to the outcomes.",
          "There is no systematic process in place to ensure that identified security risks are managed effectively.",
          "Systems are assessed in isolation, without consideration of dependencies and interactions with other systems (e.g. interactions between IT and OT environments).",
          "Security requirements and mitigations are arbitrary or are applied from a control catalogue without consideration of how they contribute to the security of the essential function(s).",
          "Risks remain unresolved on a register for prolonged periods of time awaiting senior decision-making or resource allocation to resolve."
        ]
      },
      {
        "id": "A2.b",
        "title": "Understanding Threat",
        "achieved": [
          "You perform detailed threat analysis and understand how this applies to network and information systems supporting your essential function(s), in the context of your sector and wider national infrastructure.",
          "Your detailed understanding of threat includes the methods and techniques available to capable and well-resourced threat actors and how they could be used systematically against network and information systems supporting your essential function(s).",
          "You use appropriate techniques to develop an understanding of network and information systems supporting your essential function(s) from a threat actor's perspective.",
          "You anticipate probable attack methods and techniques, targets and objectives, and develop plausible scenarios.",
          "You understand the different steps a capable and well-resourced threat actor would need to take to reach the probable target(s).",
          "You identify and justify what measures can be used at each step to reduce the likelihood of the threat actor reaching the probable target(s) or achieving their objective(s).",
          "You maintain a detailed understanding of current threats (e.g. by threat intelligence and proactive research).",
          "You apply your detailed understanding of threat to inform your risk management decision-making.",
          "You have documented the steps required to undertake detailed threat analysis."
        ],
        "partiallyAchieved": [
          "You perform threat analysis and understand how common threats apply to network and information systems supporting your essential function(s).",
          "You understand common types of cyber attacks, including the methods and techniques, and how these might apply to network and information systems supporting your essential function(s). This understanding is kept up to date.",
          "You anticipate what threat actors might target in network and information systems to cause an adverse impact to your essential function(s).",
          "Your understanding of threat is informed by common incidents.",
          "You apply your understanding of threat to inform your risk management decision-making."
        ],
        "notAchieved": [
          "You are unable to perform threat analysis.",
          "You do not understand the threats to network and information systems supporting your essential function(s).",
          "You do not have a clearly defined set of threat assumptions.",
          "You do not use your understanding of threat to inform your risk management decisions."
        ]
      },
      {
        "id": "A2.c",
        "title": "Assurance",
        "achieved": [
          "You validate that the security measures in place to protect the network and information systems are effective and remain effective for the lifetime over which they are needed.",
          "You understand the assurance methods available to you and choose appropriate methods to gain confidence in the security of essential function(s).",
          "Your confidence in the security as it relates to your technology, people, and processes can be justified to, and verified by, a third party.",
          "Security deficiencies uncovered by assurance activities are assessed, prioritised and remedied when necessary in a timely and effective way.",
          "The methods used for assurance are reviewed to ensure they are working as intended and remain the most appropriate method to use."
        ],
        "notAchieved": [
          "A particular product or service is seen as a \"silver bullet\" and vendor claims are taken at face value.",
          "Assurance methods are applied without appreciation of their strengths and limitations, such as the risks of penetration testing in operational environments.",
          "Assurance is assumed because there have been no known problems to date."
        ]
      }
    ]
  },
  {
    "id": "A3",
    "title": "Asset Management",
    "objectiveId": "A",
    "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-a-managing-security-risk/principle-a3-asset-management",
    "intro": "Everything required to deliver, maintain or support networks and information systems necessary for the operation of essential functions is determined and understood. This includes data, people and systems, as well as any supporting infrastructure (such as power or cooling).",
    "outcomes": [
      {
        "id": "A3.a",
        "title": "Asset Management",
        "achieved": [
          "All assets relevant to the secure operation of essential function(s) are identified and inventoried (at a suitable level of detail).",
          "The inventory is kept up-to-date.",
          "Dependencies on supporting infrastructure (e.g. power, cooling etc) are recognised and recorded.",
          "You have prioritised your assets according to their importance to the operation of the essential function(s).",
          "You have assigned responsibility for managing all assets, including physical assets, relevant to the operation of the essential function(s).",
          "Assets relevant to the essential function(s) are managed with cyber security in mind throughout their lifecycle, from creation through to eventual decommissioning or disposal."
        ],
        "notAchieved": [
          "Inventories of assets relevant to the essential function(s) are incomplete, non-existent, or inadequately detailed.",
          "Only certain domains or types of asset are documented and understood.",
          "Dependencies between assets are not understood (such as the dependencies between IT and OT).",
          "Information assets, which could include personally identifiable information and / or important / critical data, are stored for long periods of time with no clear business need or retention policy.",
          "Knowledge critical to the management, operation, or recovery of the essential function(s) is held by one or two key individuals with no succession plan.",
          "Asset inventories are neglected and out of date."
        ]
      }
    ]
  },
  {
    "id": "A4",
    "title": "Supply Chain",
    "objectiveId": "A",
    "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-a-managing-security-risk/principle-a4-supply-chain",
    "intro": "The organisation understands and manages security risks to networks and information systems supporting the operation of essential functions that arise as a result of dependencies on suppliers, including ensuring that appropriate measures are employed where third party services are used. If an organisation relies on third parties it remains accountable for the protection of any essential function, so there should be confidence that all relevant security requirements are met regardless of whether the owning organisation or a third party operates the function.",
    "outcomes": [
      {
        "id": "A4.a",
        "title": "Supply Chain",
        "achieved": [
          "You have a deep understanding of your supply chain, including sub-contractors and the wider risks it faces.",
          "You consider factors such as your supplier's ownership, nationality, partnerships, competitors, other organisations with which they sub-contract and their approach to cyber security.",
          "These factors inform your risk assessment and are fully considered in your procurement lifecycle processes and purchasing decisions.",
          "Your approach to supply chain risk management considers the risks to network and information systems supporting your essential function(s) arising from supply chain subversion by capable and well-resourced threat actors.",
          "Critical suppliers to network and information systems supporting your essential function(s) can demonstrate appropriate and proportionate levels of cyber security within the context of capable and well-resourced threat actors.",
          "You have confidence that information held by suppliers that is essential to the operation of network and information systems supporting your essential function(s) is appropriately protected from capable and well-resourced threat actors.",
          "You understand which contracts are relevant and you include appropriate security obligations, in relevant contracts.",
          "You have a proactive approach to contract management which may include a contract management plan for relevant contracts.",
          "Customer / supplier ownership of responsibilities is defined in contracts.",
          "All network connections and data sharing with third parties are managed effectively and proportionately.",
          "When appropriate, your incident management process and that of your suppliers provide mutual support in the resolution of incidents."
        ],
        "partiallyAchieved": [
          "You understand the general risks suppliers may pose to your essential function(s).",
          "You know the extent of your supply chain that supports your essential function(s), including sub-contractors.",
          "Suppliers to network and information systems that support your essential function(s) can demonstrate appropriate and proportionate levels of cyber security within the context of common threats.",
          "You understand which contracts are relevant and you include appropriate security obligations in relevant contracts.",
          "You are aware of all third-party connections and have assurance that they meet your organisation's security requirements.",
          "Your approach to security incident management considers incidents that might arise in your supply chain.",
          "You have confidence that information shared with suppliers that is necessary for the operation of your essential function(s) is appropriately protected from common threats."
        ],
        "notAchieved": [
          "You do not know what data belonging to you is held by suppliers, or how it is managed.",
          "Elements of the supply chain for essential function(s) are subcontracted and you have little or no visibility of the sub-contractors.",
          "You have no understanding of which contracts are relevant and / or relevant contracts do not specify appropriate security obligations.",
          "Suppliers have access to systems that provide your essential function(s) that is unrestricted, not monitored or bypasses your own security controls."
        ]
      },
      {
        "id": "A4.b",
        "title": "Secure Software Development and Support",
        "achieved": [
          "Your software supplier(s) leverages an established secure software development framework (e.g. NIST Secure Software Development Framework (SSDF), Microsoft Secure Development Lifecycle (SDL)).",
          "Your software supplier can demonstrate a thorough understanding of the composition and provenance of software provided to you, including any third-party components used in the development of that software, and those components are being monitored for new vulnerabilities throughout the lifespan of the product.",
          "You consider the security of environments (e.g. development, test, and production), including source code and repositories, used in the production of software to be appropriate and proportionate within the context of capable and well-resourced threat actors.",
          "The software development lifecycle is informed by a detailed and up to date understanding of threat and applies appropriate techniques, such as threat modelling, to identify and assess potential vulnerabilities and attack vectors.",
          "You can attest to the authenticity and integrity of software, including updates and patches."
        ],
        "partiallyAchieved": [
          "Your software supplier leverages secure development principles and practices.",
          "Your software supplier(s) can demonstrate a limited understanding of the composition and provenance of software provided to you.",
          "You consider the security of environments (e.g. development, test and production), including source code and repositories, used in the production of software to be appropriate and proportionate within the context of common threats.",
          "The testing regime uses a range of different approaches (e.g. static and dynamic analysis, unit and integration testing and point in time assessments) that verify all aspects of the development lifecycle covering both functional and non-functional testing.",
          "You have arrangements in place with your software supplier to receive timely security updates, patches and notifications.",
          "Software, including updates and patches, is obtained from your supplier(s) via secure channels.",
          "Your software supplier(s) has processes in place to identify, report and mitigate security vulnerabilities.",
          "You have arrangements in place with your software supplier to be notified of any significant events that may adversely impact network and information systems supporting your essential function(s).",
          "If open-source software is used, you have taken appropriate and proportionate steps to establish and maintain sufficient confidence in its security for its use.",
          "You have appropriate support and maintenance arrangements in place."
        ],
        "notAchieved": [
          "Your software supplier(s) is unaware of the composition and provenance of software provided to you.",
          "Software, including updates and patches, undergoes little to no testing.",
          "Updates and patches often introduce new problems or fail to address existing issues.",
          "Vulnerabilities are discovered in software despite the negligible difficulty of implementing mitigations."
        ]
      }
    ]
  },
  {
    "id": "B1",
    "title": "Service protection policies, processes and procedures",
    "objectiveId": "B",
    "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b1-service-protection-policies-processes-and-procedures",
    "intro": "The organisation defines, implements, communicates and enforces appropriate policies, processes and procedures that direct its overall approach to securing systems and data that support the operation of essential functions. These must be more than a paper exercise: they need to be well described, communicated and effectively implemented, with mechanisms in place to validate their implementation and effectiveness and to enforce compliance when necessary. To be effective, they need to be realistic and based on a clear understanding of the way people act and make decisions in the workplace.",
    "outcomes": [
      {
        "id": "B1.a",
        "title": "Policy, Process and Procedure Development",
        "achieved": [
          "You fully document your overarching security governance and risk management approach, technical security practice and specific regulatory compliance.",
          "Cyber security is integrated and embedded throughout policies, processes and procedures and key performance indicators are reported to your executive management.",
          "Your organisation's policies, processes and procedures are developed to be practical, usable and appropriate to mitigate the risk of adverse impact to network and information systems supporting your essential function(s).",
          "Policies, processes and procedures that rely on user behaviour are practical, appropriate and achievable.",
          "You review and update policies, processes and procedures at suitably regular intervals to ensure they remain relevant. This is in addition to reviews following a major cyber security incident.",
          "Any changes to the essential function(s) or the threat it faces triggers a review of policies, processes and procedures.",
          "Your systems are designed so that they remain secure even when user security policies, processes and procedures are not always followed."
        ],
        "partiallyAchieved": [
          "Your policies, processes and procedures document your overarching security governance and risk management approach, technical security practice and specific regulatory compliance.",
          "You review and update policies, processes and procedures in response to major cyber security incidents."
        ],
        "notAchieved": [
          "Your policies, processes and procedures are absent or incomplete.",
          "Policies, processes and procedures are not applied universally or consistently.",
          "People often or routinely circumvent policies, processes and procedures to achieve business objectives.",
          "Your organisation's security governance and risk management approach has no bearing on your policies, processes and procedures.",
          "System security is totally reliant on users' careful and consistent application of manual security processes.",
          "Policies, processes and procedures have not been reviewed in response to major changes (e.g. technology or regulatory framework), or within a suitable period.",
          "Policies, processes and procedures are not readily available to staff, too detailed to remember, or too hard to understand."
        ]
      },
      {
        "id": "B1.b",
        "title": "Policy, Process and Procedure Implementation",
        "achieved": [
          "All your policies, processes and procedures are followed, their correct application and security effectiveness is evaluated.",
          "Your policies, processes and procedures are integrated with other organisational policies, processes and procedures, including HR assessments of individuals' trustworthiness.",
          "Your policies, processes and procedures are effectively and appropriately communicated across all levels of the organisation resulting in good staff awareness of their responsibilities.",
          "Appropriate action is taken to address all breaches of policies, processes and procedures with potential to adversely impact the essential function(s) including aggregated breaches."
        ],
        "partiallyAchieved": [
          "Most of your policies, processes and procedures are followed and their application is monitored.",
          "Your policies, processes and procedures are integrated with other organisational policies, processes and procedures, including HR assessments of individuals' trustworthiness.",
          "All staff are aware of their responsibilities under your policies, processes and procedures.",
          "All breaches of policies, processes and procedures with the potential to adversely impact the essential function(s) are fully investigated. Other breaches are tracked, assessed for trends and action is taken to understand and address."
        ],
        "notAchieved": [
          "Policies, processes and procedures are ignored or only partially followed.",
          "How your policies support the resilience of your essential function(s) is not well understood.",
          "Staff are unaware of their responsibilities under your policies, processes and procedures.",
          "You do not attempt to detect breaches of policies, processes and procedures.",
          "Policies, processes and procedures lack integration with other organisational policies, processes and procedures.",
          "Your policies, processes and procedures are not well communicated across your organisation."
        ]
      }
    ]
  },
  {
    "id": "B2",
    "title": "Identity and Access Control",
    "objectiveId": "B",
    "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b2-identity-and-access-control",
    "intro": "It is important that the organisation is clear about who (or what in the case of automated functions) has authorisation to interact with the network and information systems supporting an essential function in any way or access associated sensitive data. Access rights granted should be carefully controlled, especially where those rights provide an ability to materially affect the operation of the essential function. Access rights granted should be periodically reviewed and technically removed when no longer required such as when an individual changes role or leaves the organisation.",
    "outcomes": [
      {
        "id": "B2.a",
        "title": "Identity Verification, Authentication and Authorisation",
        "achieved": [
          "Your process of initial identity verification is robust enough to provide a high level of confidence of a user's identity profile before allowing an authorised user access to network and information systems that support your essential function(s).",
          "Only authorised and individually authenticated users can physically access and logically connect to your network or information systems on which your essential function(s) depends.",
          "The number of authorised users and systems that have access to all your network and information systems supporting the essential function(s) is limited to the minimum necessary.",
          "You use additional authentication mechanisms, such as multi-factor (MFA), for all user access, including remote access, to all network and information systems that operate or support your essential function(s).",
          "The list of users and systems with access to network and information systems supporting and delivering the essential function(s) is reviewed on a regular basis, at least every six months.",
          "Your approach to authenticating users, devices and systems follows up to date best practice."
        ],
        "partiallyAchieved": [
          "Your process of initial identity verification is robust enough to provide a reasonable level of confidence of a user's identity profile before allowing an authorised user access to network and information systems that support your essential function(s).",
          "All authorised users and systems with access to network or information systems on which your essential function(s) depends are individually identified and authenticated.",
          "The number of authorised users and systems that have access to essential function(s) network and information systems is limited to the minimum necessary.",
          "You use additional authentication mechanisms, such as multi-factor (MFA), for privileged access to all network and information systems that operate or support your essential function(s).",
          "You individually authenticate and authorise all remote access to all your network and information systems that support your essential function(s).",
          "The list of users and systems with access to network and information systems supporting and delivering the essential function(s) is reviewed on a regular basis, at least annually.",
          "Your approach to authenticating users, devices and systems follows up to date best practice."
        ],
        "notAchieved": [
          "Initial identity verification is not robust enough to provide an acceptable level of confidence of a user's identity profile.",
          "Authorised users and systems with access to networks or information systems on which your essential function(s) depends cannot be individually identified.",
          "Unauthorised individuals or devices can access your network or information systems on which your essential function(s) depends.",
          "The number of authorised users and systems that have access to your network and information systems are not limited to the minimum necessary.",
          "Your approach to authenticating users, devices and systems does not follow up to date best practice."
        ]
      },
      {
        "id": "B2.b",
        "title": "Device Management",
        "achieved": [
          "All privileged operations performed on your network and information systems supporting your essential function(s) are conducted from highly trusted devices, such as Privileged Access Workstations, dedicated solely to those operations.",
          "You either obtain independent and professional assurance of the security of third-party devices or networks before they connect to your network and information systems, or you only allow third-party devices or networks that are dedicated to supporting your network and information systems to connect.",
          "You perform certificate-based device identity management and only allow known devices to access systems necessary for the operation of your essential function(s).",
          "You perform regular scans to detect unknown devices and investigate any findings."
        ],
        "partiallyAchieved": [
          "Only corporately owned and managed devices can access your essential function(s)'s network and information systems.",
          "All privileged operations are performed from corporately owned and managed devices. These devices provide sufficient separation, using a risk-based approach, from the activities of standard users.",
          "You have sought to understand the security properties of third-party devices and networks before they can be connected to your systems. You have taken appropriate steps to mitigate any risks identified.",
          "The act of connecting to a network port or cable does not grant access to any systems.",
          "You are able to detect unknown devices being connected to your network and information systems and investigate such incidents."
        ],
        "notAchieved": [
          "Users can connect to your essential function(s)'s network and information systems using devices that are not corporately owned and managed.",
          "Privileged users can perform privileged operations from devices that are not corporately owned and managed.",
          "You have not gained assurance in the security of any third-party devices or networks connected to your systems.",
          "Physically connecting a device to your network and information systems gives that device access without device or user authentication."
        ]
      },
      {
        "id": "B2.c",
        "title": "Privileged User Management",
        "achieved": [
          "Privileged user access to your essential function(s) systems is carried out from dedicated separate accounts that are closely monitored and managed.",
          "The issuing of temporary, time-bound rights for privileged user access and / or external third-party support access is in place.",
          "Privileged user access rights are regularly reviewed and always updated as part of your joiners, movers and leavers process.",
          "All privileged user activity is routinely reviewed, validated and recorded for offline analysis and investigation."
        ],
        "partiallyAchieved": [
          "All privileged user access to your network and information systems requires strong authentication, such as multi-factor (MFA).",
          "The identities of the individuals with privileged access to your essential function(s) network and information systems (infrastructure, platforms, software, configuration, etc) are known and managed. This includes third parties.",
          "Activity by privileged users is routinely reviewed and validated. (e.g. at least annually).",
          "Privileged users are only granted specific privileged user access rights which are essential to their business role or function."
        ],
        "notAchieved": [
          "The identities of the individuals with privileged access to your essential function(s) network and information systems (infrastructure, platforms, software, configuration, etc) are not known or not managed.",
          "Privileged user access to your essential function(s) network and information systems is via weak authentication mechanisms (e.g. only simple passwords).",
          "The list of privileged users has not been reviewed recently (e.g. within the last 12 months).",
          "Privileged user access is granted on a system-wide basis rather than by role or function(s).",
          "Privileged user access to your essential function(s) is via generic, shared or default name accounts.",
          "Where there are “always on” terminals which can perform privileged actions (such as in a control room), there are no additional controls (e.g. physical controls) to ensure access is appropriately restricted.",
          "There is no logical separation between roles that an individual may have and hence the actions they perform. (e.g. access to corporate email and privilege user actions)."
        ]
      },
      {
        "id": "B2.d",
        "title": "Identity and Access Management (IdAM)",
        "achieved": [
          "You follow a robust procedure to verify each user and issue the minimum required access rights, and the application of the procedure is regularly audited.",
          "User access rights are reviewed both when people change roles via your joiners, leavers and movers process and at regular intervals - at least annually.",
          "All user, device and systems access to the systems supporting the essential function(s) is logged and monitored.",
          "You regularly review access logs and correlate this data with other access records and expected activity.",
          "Attempts by unauthorised users, devices or systems to connect to the systems supporting the essential function(s) are alerted, promptly assessed and investigated."
        ],
        "partiallyAchieved": [
          "You follow a robust procedure to verify each user and issue the minimum required access rights.",
          "You regularly review access rights and those no longer needed are revoked.",
          "User access rights are reviewed when users change roles via your joiners, leavers and movers process.",
          "All user, device and system access to the systems supporting the essential function(s) is logged and monitored, but it is not compared to other log data or access records."
        ],
        "notAchieved": [
          "Greater access rights are granted than necessary.",
          "Identity validation and requirement for access of a user, device or systems is not carried out.",
          "User access rights are not reviewed when users change roles.",
          "User access rights remain active when users leave your organisation.",
          "Access rights granted to devices or systems to access other devices and systems are not reviewed on a regular basis (at least annually)."
        ]
      }
    ]
  },
  {
    "id": "B3",
    "title": "Data security",
    "objectiveId": "B",
    "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b3-data-security",
    "intro": "The protection in place for data that supports the operation of essential functions must be matched to the risks associated with that data.",
    "outcomes": [
      {
        "id": "B3.a",
        "title": "Understanding Data",
        "achieved": [
          "You have identified and catalogued all the data important to the operation of network and information systems supporting your essential function(s), or that would assist a threat actor.",
          "You have identified and catalogued who has access to the data important to the operation of network and information systems supporting your essential function(s).",
          "You maintain a current understanding of the location, quantity and quality of data important to the operation of network and information systems supporting your essential function(s).",
          "You take steps to remove or minimise unnecessary copies or unneeded historic data.",
          "You have identified all mobile devices and media that may hold data important to the operation of network and information systems supporting your essential function(s).",
          "You maintain a current understanding of the data links used to transmit data that is important to network and information systems supporting your essential function(s).",
          "You understand the context, limitations and dependencies of your important data.",
          "You understand and document the impact on your essential function(s) of all relevant scenarios, including unauthorised data access, uncontrolled release, modification or deletion, or when authorised users are unable to appropriately access this data.",
          "You validate these documented impact statements regularly, at least annually."
        ],
        "partiallyAchieved": [
          "You have identified and catalogued all the data important to the operation of network and information systems supporting your essential function(s), or that would assist a threat actor.",
          "You have identified and catalogued who has access to the data important to the operation of network and information systems supporting your essential function(s).",
          "You regularly review location, transmission, quantity and quality of data important to the operation of network and information systems supporting your essential function(s).",
          "You have identified all mobile devices and media that hold data important to the operation of network and information systems supporting your essential function(s).",
          "You understand and document the impact on your essential function(s) of all relevant scenarios, including unauthorised data access, uncontrolled release, modification or deletion, or when authorised users are unable to appropriately access this data.",
          "You occasionally validate these documented impact statements."
        ],
        "notAchieved": [
          "You have incomplete knowledge of what data is used by and produced in the operation of network and information systems supporting your essential function(s).",
          "You have not identified the important data on which network and information systems supporting your essential function(s) relies.",
          "You have not identified who has access to data important to the operation of network and information systems supporting your essential function(s).",
          "You have not clearly articulated the impact of data compromise or lack of availability."
        ]
      },
      {
        "id": "B3.b",
        "title": "Data in Transit",
        "achieved": [
          "You have identified and protected (effectively and proportionately) all the data links that carry data important to the operation of your essential function(s).",
          "You apply appropriate physical and/or technical means to protect data that travels over non-trusted or openly accessible carriers, with justified confidence in the robustness of the protection applied.",
          "Suitable alternative transmission paths are available where there is a significant risk of impact on the operation of the essential function(s) due to resource limitation (e.g. transmission equipment or function failure, or important data being blocked or jammed)."
        ],
        "partiallyAchieved": [
          "You have identified and protected (effectively and proportionately) all the data links that carry data important to the operation of your essential function(s).",
          "You apply appropriate technical means (e.g. cryptography) to protect data that travels over non-trusted or openly accessible carriers, but you have limited or no confidence in the robustness of the protection applied."
        ],
        "notAchieved": [
          "You do not know what all your data links are, or which carry data important to the operation of the essential function(s).",
          "Data important to the operation of the essential function(s) travels without technical protection over non-trusted or openly accessible carriers.",
          "Critical data paths that could fail, be jammed, be overloaded, etc. have no alternative path."
        ]
      },
      {
        "id": "B3.c",
        "title": "Stored Data",
        "achieved": [
          "All copies of data important to the operation of your essential function(s) are necessary. Where this important data is transferred to less secure systems, the data is provided with limited detail and / or as a read-only copy.",
          "You have applied suitable physical and / or technical means to protect this important stored data from unauthorised access, modification or deletion.",
          "If cryptographic protections are used you apply suitable technical and procedural means, and you have justified confidence in the robustness of the protection applied.",
          "You have suitable, secured backups of data to allow the operation of the essential function(s) to continue should the original data not be available. This may include off-line or segregated backups, or appropriate alternative forms such as paper copies.",
          "Necessary historic or archive data is suitably secured in storage."
        ],
        "partiallyAchieved": [
          "All copies of data important to the operation of your essential function(s) are necessary. Where this important data is transferred to less secure systems, the data is provided with limited detail and / or as a read-only copy.",
          "You have applied suitable physical and / or technical means to protect this important stored data from unauthorised access, modification or deletion.",
          "If cryptographic protections are used, you apply suitable technical and procedural means, but you have limited or no confidence in the robustness of the protection applied.",
          "You have suitable, secured backups of data to allow the operation of the essential function(s) to continue should the original data not be available. This may include off-line or segregated backups, or appropriate alternative forms such as paper copies."
        ],
        "notAchieved": [
          "You have no, or limited, knowledge of where data important to the operation of the essential function(s) is stored.",
          "You have not protected vulnerable stored data important to the operation of the essential function(s) in a suitable way.",
          "Backups are incomplete, untested, not adequately secured or could be inaccessible in a disaster recovery or business continuity situation."
        ]
      },
      {
        "id": "B3.d",
        "title": "Mobile Data",
        "achieved": [
          "Mobile devices that hold data that is important to the operation of the essential function(s) are catalogued, are under your organisation's control and configured according to best practice for the platform, with appropriate technical and procedural policies in place.",
          "Your organisation can remotely wipe all mobile devices holding data important to the operation of the essential function(s).",
          "You have minimised this data on these mobile devices. Some data may be automatically deleted off mobile devices after a certain period."
        ],
        "partiallyAchieved": [
          "You know which mobile devices hold data important to the operation of the essential function(s).",
          "Data important to the operation of the essential function(s) is stored on mobile devices only when they have at least the security standard aligned to your overarching security policies.",
          "Data on mobile devices is technically secured."
        ],
        "notAchieved": [
          "You don't know which mobile devices may hold data important to the operation of the essential function(s).",
          "You allow data important to the operation of the essential function(s) to be stored on devices not managed by your organisation, or to at least equivalent standard.",
          "Data on mobile devices is not technically secured, or only some is secured."
        ]
      },
      {
        "id": "B3.e",
        "title": "Media/Equipment Sanitisation",
        "achieved": [
          "You catalogue and track all devices that contain data important to the operation of the essential function(s) (whether a specific storage device or one with integral storage).",
          "Data important to the operation of the essential function(s) is removed from all devices, equipment and removable media before reuse and / or disposal using an assured product or service."
        ],
        "partiallyAchieved": [
          "Data important to the operations of the essential function(s) is removed from all devices, equipment and removable media before reuse and / or disposal."
        ],
        "notAchieved": [
          "Some or all devices, equipment or removable media that hold data important to the operation of the essential function(s) are reused or disposed of without sanitisation of that data."
        ]
      }
    ]
  },
  {
    "id": "B4",
    "title": "System security",
    "objectiveId": "B",
    "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b4-system-security",
    "intro": "There are a range of protective security measures that an organisation can use to minimise the opportunities for an attacker to compromise the security of networks and information systems supporting essential functions. Not all such measures will necessarily be applicable in all circumstances – each organisation should determine and implement the protective security measures that are most effective in limiting those opportunities for attackers associated with the greatest risks to essential functions.",
    "outcomes": [
      {
        "id": "B4.a",
        "title": "Secure by Design",
        "achieved": [
          "You employ appropriate expertise to design network and information systems supporting your essential function(s).",
          "Network and information systems are segregated into appropriate security zones (e.g. systems supporting the essential function(s) are segregated in a highly trusted, more secure zone).",
          "The network and information systems supporting your essential function(s) are designed to have simple data flows between components to support effective security monitoring.",
          "The network and information systems supporting your essential function(s) are designed to be easy to recover.",
          "Content-based attacks are mitigated for all inputs to network and information systems that affect the essential function(s) (e.g. via transformation and inspection / sanitisation and validation).",
          "If automated decision-making technologies are in use, you design and apply appropriate restrictions to prevent actions that could have an adverse impact on network and information systems supporting your essential function(s)."
        ],
        "partiallyAchieved": [
          "You employ appropriate expertise to design network and information systems supporting your essential function(s).",
          "You design strong boundary defences where your network and information systems interface with other organisations or the world at large.",
          "You design simple data flows between your network and information systems and any external interface to enable effective monitoring.",
          "You design to make network and information system recovery simple.",
          "All inputs to network and information systems are checked and validated at the network boundary where possible, or additional monitoring is in place for content-based attacks."
        ],
        "notAchieved": [
          "Network and information systems supporting the operation of the essential function(s) are not appropriately segregated from other systems.",
          "Internet services, such as browsing and email are accessible from network and information systems supporting your essential function(s).",
          "Data flows between network and information systems supporting your essential function(s) and other systems are complex, making it hard to discriminate between legitimate and illegitimate / malicious traffic.",
          "Remote or third-party accesses circumvent some network controls to gain more direct access to network and information systems supporting the essential function(s)."
        ]
      },
      {
        "id": "B4.b",
        "title": "Secure Configuration",
        "achieved": [
          "You have identified, documented and actively manage (e.g. maintain security configurations, patching, updating according to good practice) the assets that need to be carefully configured to maintain the security of the essential function(s).",
          "All platforms conform to your secure, defined baseline build, or the latest known good configuration version for that environment.",
          "You closely and effectively manage changes in your environment, ensuring that network and system configurations are secure and documented.",
          "You regularly review and validate that your network and information systems have the expected, secure settings and configuration.",
          "Only permitted software can be installed.",
          "If automated decision-making technologies are in use, their operation is well understood, and decisions can be replicated.",
          "Generic, shared, default name and built-in accounts have been removed or disabled. Where this is not possible, credentials to these accounts have been changed. Service accounts are appropriately protected."
        ],
        "partiallyAchieved": [
          "You have identified and documented the assets that need to be carefully configured to maintain the security of the essential function(s).",
          "Secure platform and device builds are used across the estate.",
          "Consistent, secure and minimal system and device configurations are applied across the same types of environment.",
          "Changes and adjustments to security configuration at security boundaries with the network and information systems supporting your essential function(s) are approved and documented.",
          "You verify software before installation is permitted.",
          "Generic, shared, default name and built-in accounts have been removed or disabled. Where this is not possible, credentials to these accounts have been changed. Service accounts are appropriately protected.",
          "Standard users are not able to change settings that would adversely impact the security of network and information systems supporting your essential function(s)."
        ],
        "notAchieved": [
          "You haven't identified the assets that need to be carefully configured to maintain the security of the essential function(s).",
          "Policies relating to the security of operating system builds or configuration are not applied consistently across your network and information systems relating to your essential function(s).",
          "Configuration details are not recorded or lack enough information to be able to rebuild the system or device.",
          "The recording of security changes or adjustments that affect your essential function(s) is lacking or inconsistent.",
          "Generic, shared, default name and built-in accounts have not been removed or disabled.",
          "Standard users are able to change settings that would adversely impact the security of network and information systems supporting your essential function(s)."
        ]
      },
      {
        "id": "B4.c",
        "title": "Secure Management",
        "achieved": [
          "Your systems and devices supporting the operation of the essential function(s) are only administered or maintained by authorised privileged users from highly trusted devices, such as Privileged Access Workstations, dedicated solely to those operations.",
          "You regularly review and update technical knowledge about network and information systems, such as documentation and network diagrams, and ensure they are securely stored.",
          "You prevent, detect and remove malware or unauthorised software. You use technical, procedural and physical measures as necessary."
        ],
        "partiallyAchieved": [
          "Your systems and devices supporting the operation of the essential function(s) are only administered or maintained by authorised privileged users from devices sufficiently separated, using a risk-based approach, from the activities of standard users.",
          "Technical knowledge about network and information systems, such as documentation and network diagrams, is regularly reviewed and updated.",
          "You prevent, detect and remove malware or unauthorised software. You use technical, procedural and physical measures as necessary."
        ],
        "notAchieved": [
          "Your systems and devices supporting the operation of the essential function(s) are administered or maintained from devices that are not corporately owned and managed.",
          "You do not have good or current technical documentation of your network and information systems."
        ]
      },
      {
        "id": "B4.d",
        "title": "Vulnerability Management",
        "achieved": [
          "You maintain a current understanding of the exposure of your essential function(s) to publicly-known vulnerabilities.",
          "Announced vulnerabilities for all software packages, network and information systems used to support your essential function(s) are tracked, prioritised and mitigated (e.g. by patching) promptly.",
          "You regularly test to fully understand the vulnerabilities of the network and information systems that support the operation of your essential function(s) and verify this understanding with third-party testing.",
          "You actively maximise the use of supported software, firmware and hardware in your network and information systems supporting your essential function(s)."
        ],
        "partiallyAchieved": [
          "You maintain a current understanding of the exposure of your essential function(s) to publicly-known vulnerabilities.",
          "Announced vulnerabilities for all software packages, network and information systems used to support your essential function(s) are tracked, prioritised and externally exposed vulnerabilities are mitigated (e.g. by patching) promptly.",
          "Some vulnerabilities that are not externally exposed have temporary mitigations for an extended period.",
          "You have temporary mitigations for unsupported systems and software while pursuing migration to supported technology.",
          "You regularly test to fully understand the vulnerabilities of the network and information systems that support the operation of your essential function(s)."
        ],
        "notAchieved": [
          "You do not understand the exposure of your essential function(s) to publicly-known vulnerabilities.",
          "You do not mitigate externally exposed vulnerabilities promptly.",
          "You have not recently tested to verify your understanding of the vulnerabilities of the network and information systems that support your essential function(s).",
          "You have not suitably mitigated systems or software that is no longer supported.",
          "You are not pursuing replacement for unsupported systems or software."
        ]
      }
    ]
  },
  {
    "id": "B5",
    "title": "Resilient networks and systems",
    "objectiveId": "B",
    "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b5-resilient-networks-and-systems",
    "intro": "The essential functions performed by an organisation should be resilient to cyber attack. Building upon Principle B4 (the technical protection of systems), organisations should ensure that not only is technology well built and maintained, but consideration is also given to how operation of the essential function can continue in the event of technology failure or compromise. In addition to technical means, this might include additional contingency capability such as manual processes to ensure functions can continue.",
    "outcomes": [
      {
        "id": "B5.a",
        "title": "Resilience Preparation",
        "achieved": [
          "You have business continuity and disaster recovery plans that have been tested for practicality, effectiveness and completeness. Appropriate use is made of different test methods (e.g. manual fail-over, table-top exercises, or red-teaming).",
          "You use your security awareness and threat intelligence sources to identify new or heightened levels of risk, which result in immediate and potentially temporary security measures to enhance the security of your network and information systems (e.g. in response to a widespread outbreak of very damaging malware)."
        ],
        "partiallyAchieved": [
          "You know all network and information systems, and underlying technologies that are necessary to restore the operation of the essential function(s) and understand their interdependence.",
          "You know the order in which systems need to be recovered to efficiently and effectively restore the operation of the essential function(s)."
        ],
        "notAchieved": [
          "You have limited understanding of all the elements that are required to restore operation of the essential function(s).",
          "You have not completed business continuity and disaster recovery plans for network and information systems, including their dependencies, supporting the operation of the essential function(s).",
          "You have not fully assessed the practical implementation of your business continuity and disaster recovery plans."
        ]
      },
      {
        "id": "B5.b",
        "title": "Design for Resilience",
        "achieved": [
          "Network and information systems supporting the operation of your essential function(s) are segregated from other business and external systems by appropriate technical and physical means (e.g. separate network and system infrastructure with independent user administration).",
          "Internet services, such as browsing and email, are not accessible from network and information systems supporting the essential function(s).",
          "You have identified and mitigated all resource limitations (e.g. bandwidth limitations and single network paths).",
          "You have identified and mitigated any geographical constraints or weaknesses. (e.g. systems that your essential function(s) depends upon are replicated in another location, important network connectivity has alternative physical paths and service providers).",
          "You review and update assessments of dependencies, resource and geographical limitations and mitigations when necessary."
        ],
        "partiallyAchieved": [
          "Network and information systems supporting the operation of your essential function(s) are logically separated from your business systems (e.g. they reside on the same network as the rest of the organisation but within a DMZ).",
          "Internet services, such as browsing and email, are not accessible from network and information systems supporting the essential function(s).",
          "Resource limitations (e.g. network bandwidth, single network paths) have been identified but not fully mitigated."
        ],
        "notAchieved": [
          "Network and information systems supporting the operation of your essential function(s) are not appropriately segregated.",
          "Internet services, such as browsing and email, are accessible from network and information systems supporting the essential function(s).",
          "You do not understand or lack plans to mitigate all resource limitations that could adversely affect your essential function(s)."
        ]
      },
      {
        "id": "B5.c",
        "title": "Backups",
        "achieved": [
          "Your comprehensive, automatic and tested technical and procedural backups are secured at centrally accessible or secondary sites to recover from an extreme event.",
          "Backups of all important data and information needed to recover the essential function(s) are made, tested, documented and routinely reviewed"
        ],
        "partiallyAchieved": [
          "You have appropriately secured backups (including data, configuration information, software, equipment, processes and knowledge). These backups will be accessible to recover from an extreme event.",
          "You routinely test backups to ensure that the backup process function(s) correctly and the backups are usable."
        ],
        "notAchieved": [
          "Backup coverage is incomplete and does not include all relevant data and information needed to restore the operation of your essential function(s).",
          "Backups are not frequent enough for the operation of your essential function(s) to be restored effectively.",
          "Your restoration process does not restore your essential function(s) in a suitable time frame."
        ]
      }
    ]
  },
  {
    "id": "B6",
    "title": "Staff awareness and training",
    "objectiveId": "B",
    "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b6-staff-awareness-and-training",
    "intro": "Staff are central to any organisation's ability to operate securely. Therefore, organisations responsible for essential functions should ensure that their employees have the information, knowledge, and skills they need to support the security of networks and information systems.",
    "outcomes": [
      {
        "id": "B6.a",
        "title": "Cyber Security Culture",
        "achieved": [
          "Your executive management clearly and effectively communicates the organisation's cyber security priorities and objectives to all staff. Your organisation displays positive cyber security attitudes, behaviours, expectations.",
          "People in your organisation raising potential cyber security incidents and issues are treated positively.",
          "Individuals at all levels in your organisation routinely report concerns or issues about cyber security and are recognised for their contribution to keeping the organisation secure.",
          "Your management is seen to be committed to and actively involved in cyber security.",
          "Your organisation communicates openly about cyber security, with any concern being taken seriously.",
          "People across your organisation participate in cyber security activities and improvements, building joint ownership and bringing knowledge of their area of expertise."
        ],
        "partiallyAchieved": [
          "Your executive management understand and widely communicate the importance of a positive cyber security culture. Positive attitudes, behaviours and expectations are described for your organisation.",
          "All people in your organisation understand the contribution they make to the cyber security of network and information systems supporting your essential function(s).",
          "All individuals in your organisation know who to contact and where to access more information about cyber security. They know how to raise a cyber security issue.",
          "You identify and address issues that inhibit people from behaving in a manner that supports your intended cyber security outcomes."
        ],
        "notAchieved": [
          "People in your organisation do not understand what they contribute to the cyber security of network and information systems supporting your essential function(s).",
          "People in your organisation do not know how to raise a concern about cyber security.",
          "People believe that reporting issues may get them into trouble.",
          "Your organisation's approach to cyber security is perceived by staff as hindering the business of the organisation and may encourage poor security behaviours.",
          "Formal or informal incentives and rewards conflict with the promotion of positive security outcomes."
        ]
      },
      {
        "id": "B6.b",
        "title": "Cyber Security Training",
        "achieved": [
          "All people in your organisation, from the most senior to the most junior, follow appropriate cyber security training paths.",
          "Each individuals cyber security training is tracked and refreshed at suitable intervals.",
          "You routinely evaluate your cyber security training and awareness activities to ensure they reach the widest audience and are effective.",
          "You make cyber security information and good practice guidance easily accessible, widely available and you know it is referenced and used within your organisation."
        ],
        "partiallyAchieved": [
          "You have defined appropriate cyber security training and awareness activities for all roles in your organisation, from executives to the most junior roles.",
          "You use a range of teaching and communication techniques for cyber security training and awareness to reach the widest audience effectively.",
          "Cyber security information is easily available."
        ],
        "notAchieved": [
          "There are teams who operate and support your essential function(s) that lack any cyber security training.",
          "Cyber security training is restricted to specific roles in your organisation.",
          "Cyber security training records for your organisation are lacking or incomplete.",
          "Training is used as a “silver bullet” for all user security behaviours.",
          "The success of training is only measured by the number of people reached, rather than assessing whether it has a positive impact on security behaviours.",
          "Training materials contain out of date or contradictory information, or information that conflicts with other policies, processes or procedures."
        ]
      }
    ]
  },
  {
    "id": "C1",
    "title": "Security monitoring",
    "objectiveId": "C",
    "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-c-detecting-cyber-security-events/principle-c1-security-monitoring",
    "intro": "Capabilities exist to ensure security defences remain effective and to detect cyber security events and incidents adversely affecting, or with the potential to adversely affect, essential function(s). The organisation monitors the security status of network and information systems supporting the operation of essential function(s) in order to detect security events indicative of a security incident. Good monitoring is more than simply the collection of logs - it is also the use of appropriate tools and skilled analysis to identify indicators of compromise in a timely manner so that appropriate action can be taken.",
    "outcomes": [
      {
        "id": "C1.a",
        "title": "Sources and Tools for Logging and Monitoring",
        "achieved": [
          "Monitoring is based on a thorough understanding of network and information systems supporting your essential function(s), techniques used by threat actors, and awareness of what logging and monitoring is required to detect events and incidents that could affect the operation of your essential function(s).",
          "Your monitoring data provides enough detail to promptly and reliably detect security events, incidents and support investigations. This is reviewed regularly and after a significant security event.",
          "Extensive monitoring of user and system activity in relation to network and information systems that support your essential function(s) enables you to promptly detect policy violations, suspicious or undesirable user and system behaviour, deviations from normal / routine behaviour or abnormalities indicative of adverse activity.",
          "Your logging and monitoring capability includes host-based and network monitoring.",
          "All new network and information systems supporting your essential function(s) are considered as potential logging and monitoring data sources to maintain a comprehensive monitoring capability.",
          "Log datasets are synchronised including using an accurate common time source so that separate datasets can be correlated in appropriate ways.",
          "You enrich log data with other network and information systems data to provide a more comprehensive picture of actions and behaviours.",
          "Your monitoring tools make use of log data to pinpoint activity.",
          "You regularly review the data sources and tools included in your logging and monitoring strategy to ensure it remains effective."
        ],
        "partiallyAchieved": [
          "Data relating to the security and operation of some areas of network and information systems supporting your essential function(s) is collected but coverage is not comprehensive.",
          "Some user and system monitoring is done, but not covering a fully agreed list of suspicious or undesirable behaviour.",
          "You monitor traffic crossing your network boundary (including IP address connections as a minimum).",
          "Some but not all log datasets can be easily queried with search tools to aid in investigations.",
          "Your monitoring tools work with most log data, with some configuration.",
          "Your monitoring tools can make use of log data that would capture all common threats.",
          "You ensure log data is available for analysis when needed."
        ],
        "notAchieved": [
          "Data relating to the security and operation of network and information systems supporting your essential function(s) is not collected.",
          "You are not able to audit the activities of users and systems in relation to network and information systems supporting your essential function(s).",
          "You do not monitor traffic crossing your network boundary.",
          "Log data cannot be synchronised using an accurate common time source.",
          "Logs are stored in locations where they are not readily available to authorised users and systems.",
          "Your monitoring tools cannot be configured to make use of new log streams as they come online.",
          "Your monitoring tools are only able to make use of a fraction of the log data being collected.",
          "You do not understand where log data is stored or how long it should be stored for.",
          "You have no way of ensuring log data is being captured as expected and available when needed."
        ]
      },
      {
        "id": "C1.b",
        "title": "Securing Logs",
        "achieved": [
          "Appropriate access to log data is limited to those users and systems with a business need.",
          "The logging architecture has mechanisms, policies, processes and procedures to ensure that it can protect itself from threats comparable to those that it is trying to identify. This includes protecting the function itself and the data within it.",
          "Log data analysis and normalisation is only performed on copies of the log data keeping the master copy unaltered.",
          "All actions involving log data (e.g. copying, deleting, modification, or even viewing) can be traced back to a unique user or system.",
          "The integrity of log data is protected, verified and any modification, including deletion, is detected and attributed."
        ],
        "partiallyAchieved": [
          "Only authorised users and systems can access log data.",
          "There is some monitoring of access to log data (e.g. copying, deleting or modification, or even viewing).",
          "You have defined and implemented retention periods for log data.",
          "You have given legitimate reasons for accessing log data in your policies."
        ],
        "notAchieved": [
          "It is possible for log data to be easily edited or deleted by unauthorised users or malicious attackers.",
          "There is no controlled list of the users and systems that can view and query log data.",
          "There is no monitoring of the access to log data.",
          "There are no policies for accessing to log data."
        ]
      },
      {
        "id": "C1.c",
        "title": "Generating Alerts",
        "achieved": [
          "You easily detect the presence of Indicators of Compromise (IoCs) on network and information systems supporting your essential function(s), such as known malicious command and control signatures, as well as abnormalities or behaviours indicative of adverse activity.",
          "You apply all updates, new signatures and IoCs promptly.",
          "Security alerts relating to all network and information systems supporting your essential function(s) are prioritised and this information is used to support incident management.",
          "Alerts are routinely enriched within network and information systems supporting your essential function(s). The enrichment of these alerts is performed in almost real time and as part of the original alert.",
          "Alerts and the underlying detections are regularly reviewed and tested to ensure they are generated promptly and reliably, and it is possible to distinguish genuine security incidents from false alarms.",
          "Alerts and the underlying detection rules are customisable and tuned to reduce false positives as well as optimising responses.",
          "Detections and alerting may use off the shelf tooling and rules as well as custom tooling and / or rules.",
          "You continuously monitor for user and system abnormalities indicative of adverse activity generating alerts based on the results of such monitoring.",
          "Logs are monitored continuously in near real time."
        ],
        "partiallyAchieved": [
          "You easily detect the presence of Indicators of Compromise (IoCs) on network and information systems supporting your essential function(s), such as known malicious command and control signatures.",
          "You apply some updates, new signatures and IoCs in a timely way.",
          "Security alerts relating to network and information systems that support your essential function(s) are prioritised.",
          "The enrichment of alerts within network and information systems supporting your essential function(s) is performed but not as part of the original alert.",
          "Detections and alerting rely on off the shelf tooling without customisation or users reporting events and potential incidents.",
          "There is a documented and shared process for all users who support the operation of the essential function to report events and potential security incidents.",
          "Where appropriate, detections and alerting result in automated actions being taken. (e.g. malware identified by AV is quarantined).",
          "You monitor on an irregular basis for user or system abnormalities indicative of adverse activity.",
          "Logs are monitored at regular intervals."
        ],
        "notAchieved": [
          "You do not apply updates to your detection security technologies in a timely way, after receiving them (e.g. AV signature updates, other threat signatures or Indicators of Compromise (IoCs)).",
          "Security alerts relating to network and information systems supporting your essential function(s) are not prioritised.",
          "The enrichment of security alerts within network and information systems supporting your essential function(s) cannot be performed.",
          "You do not confidently detect the presence of IoCs on network and information systems supporting your essential function(s), such as known malicious command and control signatures (e.g. because applying the indicator is difficult or your log data is not sufficiently detailed).",
          "You do not monitor for user or system abnormalities indicative of adverse activity.",
          "Logs are monitored infrequently."
        ]
      },
      {
        "id": "C1.d",
        "title": "Triage of Security Alerts",
        "achieved": [
          "You investigate and triage alerts from all security tools and take action.",
          "You have created, made available and use when appropriate, Standard Operating Procedures (SOPs) / Playbooks / Runbooks covering all plausible use cases. These are regularly reviewed to ensure they remain effective.",
          "You categorise alerts and incidents by type and priority / severity level.",
          "You document all triage related activities performed by monitoring and detection personnel and these are used to drive improvements",
          "Triage provides enough information for subsequent activities to be prioritised (e.g. the containment of damaging malware).",
          "Your understanding of normal user and system behaviour, and threats, is sufficient for effective decision making within triage."
        ],
        "partiallyAchieved": [
          "You investigate and triage alerts from some security tools and take action.",
          "You have created, made available and use when appropriate, Standard Operating Procedures (SOPs) / Playbooks / Runbooks covering the most common use cases. These are regularly reviewed to ensure they remain effective.",
          "You perform some triage and actions taken by monitoring and detection personnel are recorded.",
          "You categorise alerts and incidents by type and priority / severity level.",
          "Your understanding of normal user or system behaviour informs your decision making within triage."
        ],
        "notAchieved": [
          "You do not triage alerts from your detection security technologies (e.g. AV, IDS).",
          "You do not categorise alerts and incidents by type and priority / severity level.",
          "You do not have Standard Operating Procedures (SOPs) / Playbooks / Runbooks available for use during triage.",
          "You do not keep records of triage performed.",
          "You do not have a sufficient understanding of normal user or system behaviour to make effective decisions within triage."
        ]
      },
      {
        "id": "C1.e",
        "title": "Personnel Skills for Monitoring Tools and Detection",
        "achieved": [
          "You have monitoring and detection personnel who are responsible for the proactive and reactive analysis, investigation and reporting of monitoring alerts including both security and performance.",
          "Monitoring and detection personnel have defined roles and skills that cover all parts of the monitoring and investigation process.",
          "Monitoring and detection personnel follow policies, processes and procedures that address all governance reporting requirements, internal and external.",
          "Monitoring and detection personnel are empowered to look beyond the fixed process to investigate and understand non-standard threats.",
          "Monitoring and detection personnel are aware of the network and information systems and your essential function(s), related assets and can identify and prioritise alerts and investigations that relate to them.",
          "Monitoring and detection personnel drive and shape new log data collection and can make effective use of it.",
          "Monitoring and detection personnel are capable of following all of the required workflow(s).",
          "Monitoring and detection personnel have a sufficient understanding of the operational context (e.g. people, processes, network and information systems that support your essential function) to enhance the security monitoring function.",
          "Monitoring and detection personnel deal with their workload and cases effectively as well as identifying areas for improvement."
        ],
        "partiallyAchieved": [
          "Monitoring and detection personnel have some investigative skills and a basic understanding of the data they need to work with.",
          "Monitoring and detection personnel can report to other parts of the organisation (e.g. security directors, resilience managers).",
          "Monitoring and detection personnel are capable of following most of the required workflow(s).",
          "Monitoring and detection personnel are aware of some of the network and information systems and your essential function(s), and can manage alerts relating to them.",
          "Monitoring and detection personnel have some understanding of the operational context (e.g. people, processes, network and information systems that support your essential function(s)) to enhance the security monitoring function.",
          "Monitoring and detection personnel deal with their workload and cases effectively."
        ],
        "notAchieved": [
          "There are no personnel who perform a monitoring and detection function.",
          "Monitoring and detection personnel do not have the correct specialist skills.",
          "Monitoring and detection personnel are not capable of reporting against governance requirements.",
          "Monitoring and detection personnel have a lack of awareness of the essential function(s) the organisation provides, what assets relate to those functions and hence the importance of the log data and security events.",
          "Monitoring and detection personnel have no awareness of other roles or tasks outside of security monitoring and detection that are relevant to the operation of your essential function(s).",
          "Monitoring and detection personnel are overwhelmed with the amount of data and alerts they have to work with. Alert / triage fatigue is present."
        ]
      },
      {
        "id": "C1.f",
        "title": "Understanding User's and System's Behaviour, and Threat Intelligence (within Security Monitoring)",
        "achieved": [
          "You track the effectiveness of your threat intelligence and actively share feedback on the usefulness of Indicators of Compromise (IoCs) and other intelligence with the threat community (e.g. sector partners, threat intelligence providers, government agencies).",
          "When using threat intelligence feeds, these have been selected using risk-based and threat-informed decisions based on your business needs and sector.",
          "You make relevant, reliable and actionable threat intelligence available to the necessary users and systems promptly.",
          "You contextualise threat intelligence and link it to the why and / or how attacks take place for security monitoring.",
          "You understand normal user and system abnormalities fully, to such an extent that searching for system abnormalities is an effective way of detecting adverse activity (e.g. you fully understand which systems should and should not communicate and when).",
          "The user and system abnormalities you monitor for are based on the nature of adverse activities likely to impact network and information systems supporting the operation of your essential function(s).",
          "The user and system abnormalities indicative of adverse activity you use are regularly updated to reflect changes in network and information systems supporting your essential function(s) and current threat intelligence.",
          "You possess the capability to share threat intelligence (e.g. ways to effectively detect adversaries) with the threat community / defender community (sector partners, threat intelligence providers, government agencies) when required."
        ],
        "partiallyAchieved": [
          "You know how effective your threat intelligence is (e.g. by tracking how threat intelligence helps you identify security incidents).",
          "Your organisation may use threat intelligence services, but you do not necessarily choose sources or providers specifically because of your business needs, or specific threats in your sector (e.g. sector-based infoshare, software vendors, anti-virus providers, specialist threat intel firms, special interest groups).",
          "The user and system abnormalities from past attacks and threat intelligence, on your and other network and information systems, are used to signify adverse activity.",
          "You receive regular updates for all of your detection security technologies (e.g. AV, IDS)."
        ],
        "notAchieved": [
          "Your organisation has no sources of threat intelligence.",
          "You do not evaluate the usefulness of your threat intelligence or share feedback with providers or other users.",
          "You have no awareness of the steps necessary to make best use of threat intelligence for security monitoring.",
          "Threat intelligence is unreliable and / or is not actioned by the appropriate users or systems in a timely manner.",
          "You have no established understanding of what abnormalities to look for that might signify adverse activities.",
          "You do not receive updates for all your detection security technologies (e.g. AV, IDS).",
          "You do not understand normal user and system behaviour sufficiently to be able to use abnormalities to detect adverse activity."
        ]
      }
    ]
  },
  {
    "id": "C2",
    "title": "Threat Hunting",
    "objectiveId": "C",
    "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-c-detecting-cyber-security-events/principle-c2-threat-hunting",
    "intro": "Capabilities exist to ensure security defences remain effective and to detect cyber security events and incidents adversely affecting, or with the potential to adversely affect, essential function(s). The organisation proactively seeks to detect, within networks and information systems, adverse activity affecting, or with the potential to affect, the operation of essential functions even when the activity evades standard security prevent/detect solutions (or when standard solutions are not deployable).",
    "outcomes": [
      {
        "id": "C2.a",
        "title": "Threat Hunting",
        "achieved": [
          "You understand the resources required to perform threat hunting and these are deployed as part of business as usual.",
          "You deploy threat hunting resources at a frequency that matches the risks posed to network and information systems supporting your essential function(s).",
          "Your threat hunts follow pre-determined and documented methods (e.g. hypothesis driven, data driven, entity driven) designed to identify adverse activity not detected by automated detections.",
          "You turn threat hunts into automated detections and alerting where appropriate.",
          "You routinely record details of previous threat hunts and post hunt activities. You use these to drive improvements in your threat hunting and security posture.",
          "You have justified confidence in the effectiveness of your threat hunts and the threat hunting process is reviewed and updated to match the risks posed to network and information systems supporting your essential function(s).",
          "You leverage automation to improve threat hunts where appropriate (e.g. some stages of the threat hunting process are automated).",
          "Your threat hunts focus on the tactics, techniques and procedures (TTPs) of threats over atomic IoCs (e.g. hashes, IP addresses, domain names etc)."
        ],
        "partiallyAchieved": [
          "You have identified the resources required to perform threat hunting and are able to deploy these, in a timely manner, on an occasional basis.",
          "You deploy an effective threat hunting capability but not frequent enough to match the risks posed to network and information systems supporting your essential function(s) (e.g. you perform threat hunts in response to a tip off from a reputable source).",
          "Your threat hunts follow pre-determined and documented methods (e.g. hypothesis driven, data driven, entity driven) designed to identify adverse activity not detected by automated detections.",
          "You document details of threat hunts and post hunt analysis."
        ],
        "notAchieved": [
          "You do not know the resources required for threat hunting.",
          "You do not have access to an effective threat hunting capability.",
          "Your threat hunts do not follow any structure and few if any records are created."
        ]
      }
    ]
  },
  {
    "id": "D1",
    "title": "Response and recovery planning",
    "objectiveId": "D",
    "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-d/principle-d1-response-and-recovery-planning",
    "intro": "Capabilities exist to minimise the adverse impact of a cyber security incident on the operation of essential functions, including the restoration of those function(s) where necessary. There are well-defined and tested incident management processes in place, that aim to ensure continuity of essential function(s) in the event of system or service failure. Mitigation activities designed to contain or limit the impact of compromise are also in place.",
    "outcomes": [
      {
        "id": "D1.a",
        "title": "Response Plan",
        "achieved": [
          "Your incident response plan is based on a clear understanding of the security risks to the network and information systems supporting your essential function(s).",
          "Your incident response plan is comprehensive (i.e. covers the complete lifecycle of an incident, roles and responsibilities, and reporting) and covers likely impacts of both known attack patterns and of possible attacks, previously unseen.",
          "Your incident response plan is documented and integrated with wider organisational business plans and supply chain response plans as well as dependencies on supporting infrastructure (e.g. power, cooling etc).",
          "Your incident response plan is communicated and understood by the business areas involved with the operation of your essential function(s)."
        ],
        "partiallyAchieved": [
          "Your incident response plan covers network and information systems supporting your essential function(s).",
          "Your incident response plan comprehensively covers scenarios that are focused on likely impacts of known and well understood attacks only.",
          "Your incident response plan is understood by all staff who are involved with your organisation's response function.",
          "Your incident response plan is documented and shared with all relevant stakeholders.",
          "Your incident response plan is readily accessible, even when your organisations IT systems have been adversely affected by an incident.",
          "Your incident response plan is regularly reviewed to ensure it remains effective."
        ],
        "notAchieved": [
          "Your incident response plan is not documented.",
          "Your incident response plan does not include your organisations identified essential function(s).",
          "Your incident response plan is not well understood by relevant staff."
        ]
      },
      {
        "id": "D1.b",
        "title": "Response and Recovery Capability",
        "achieved": [
          "You understand the resources that will likely be needed to carry out any required response activities, and arrangements are in place to make these resources available.",
          "You understand the types of information that will likely be needed to inform response decisions and arrangements are in place to make this information available.",
          "Your response team members have the skills and knowledge required to decide on the response actions necessary to limit harm, and the authority to carry them out.",
          "Key roles are duplicated, and operational delivery knowledge is shared with all individuals involved in the operations and recovery of the essential function(s).",
          "Back-up mechanisms are available that can be readily activated to allow continued operation of your essential function(s), although possibly at a reduced level, if primary network and information systems fail or are unavailable.",
          "Arrangements exist to augment your organisation's incident response capabilities with external support if necessary (e.g. specialist cyber incident responders)."
        ],
        "notAchieved": [
          "Inadequate arrangements have been made to make the right resources available to implement your response plan.",
          "Your response team members are not equipped to make good response decisions and put them into effect.",
          "Inadequate back-up mechanisms exist to allow the continued operation of your essential function(s) during an incident."
        ]
      },
      {
        "id": "D1.c",
        "title": "Testing and Exercising",
        "achieved": [
          "Exercise scenarios are based on incidents experienced by your and other organisations or are composed using experience or threat intelligence.",
          "Exercise scenarios are documented, regularly reviewed, and validated.",
          "Exercises are routinely run, with the findings documented and used to refine incident response plans and protective security, in line with the lessons learned.",
          "Exercises test all parts of your response cycle relating to your essential function(s) (e.g. restoration of normal function(s) levels)."
        ],
        "notAchieved": [
          "Exercises test only a discrete part of the process (e.g. that backups are working), but do not consider all areas.",
          "Incident response exercises are not routinely carried out or are carried out in an ad-hoc way.",
          "Outputs from exercises are not fed into the organisation's lessons learned process.",
          "Exercises do not test all parts of the response cycle."
        ]
      }
    ]
  },
  {
    "id": "D2",
    "title": "Lessons Learned",
    "objectiveId": "D",
    "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-d/principle-d2-lessons-learned",
    "intro": "Capabilities exist to minimise the adverse impact of a cyber security incident on the operation of essential functions, including the restoration of those function(s) where necessary. When an incident occurs, steps are taken to understand its causes and to ensure remediating action is taken to protect against future incidents.",
    "outcomes": [
      {
        "id": "D2.a",
        "title": "Post Incident Analysis",
        "achieved": [
          "Post incident analysis is conducted routinely as a key part of your lessons learned activities following an incident.",
          "Your post incident analysis is comprehensive, considering organisational factors (e.g. policies, processes and procedures), technical factors (e.g. system design, vulnerabilities), human factors (e.g. training, security culture) and any changes to threat.",
          "All relevant incident data is made available to the analysis team to perform post incident analysis.",
          "Your analysis considers what could have happened under plausible, alternative circumstances (e.g. 'what if' / 'if only' scenarios)."
        ],
        "notAchieved": [
          "You are not usually able to resolve incidents to a root cause or identify the contributing factors within a broader systems context.",
          "You do not have a formal process for investigating causes.",
          "Investigators form theories early in the process and only seek evidence that affirms their belief.",
          "Investigations are solely focused on identifying the person(s) who can be held responsible for the incident."
        ]
      },
      {
        "id": "D2.b",
        "title": "Using Incidents to Drive Improvements",
        "achieved": [
          "You have a documented incident review process / policy which ensures that lessons learned from each incident, including near misses, are identified, captured, and acted upon.",
          "Lessons learned cover issues with reporting, roles, governance, skills and organisational policies, processes and procedures as well as technical aspects of network and information systems.",
          "You use lessons learned to improve security measures, including updating and retesting response plans when necessary.",
          "Security improvements identified as a result of lessons learned are prioritised, with the highest priority improvements completed promptly.",
          "Analysis is fed to senior management and incorporated into risk management and continuous improvement.",
          "Your organisation maximises the lessons learned by using the analysis into 'what if' / 'if only' scenarios.",
          "Your organisation learns from reported incidents in your sector and the wider national infrastructure."
        ],
        "notAchieved": [
          "Improvements arising from lessons learned following an incident are not implemented or not given sufficient organisational priority.",
          "Changes are made as a 'knee jerk' reaction to an incident without proper analysis and testing to ensure the change is appropriate.",
          "You wait until a severe or high-profile incident has occurred before you take steps to improve."
        ]
      }
    ]
  }
];
