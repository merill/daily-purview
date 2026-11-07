// Product configuration for Daily.Purview.Admin.News.
//
// CommonJS rather than JSON because the classification rules are RegExps.
// Everything the engine needs that is specific to Purview lives here; the code
// in @merill/dailynews-engine is product-neutral and reads from this file.
//
// The source is merill/purview-docs-mirror. Purview's documentation publishes
// from MicrosoftDocs/Purview-pr, which is not public; learn-mirror rebuilds it
// from Microsoft Learn four times a day, one commit per crawl that found a
// change, at the path of the source file Learn built each page from.
//
// Every Purview article sits flat in one folder, so a file's directory says
// nothing about which part of Purview it documents. Products are classified
// from the file name instead, which Purview names by feature (dlp-*,
// insider-risk-*, edisc-*, unified-catalog-*, ...).

const ICONS = 'https://github.com/DanielBradley1/msicons';

module.exports = {
  site: {
    name: 'Daily Purview News',
    host: 'daily.purview.admin.news',
    url: 'https://daily.purview.admin.news',
    description: 'A readable record of what changed across Microsoft Purview documentation.',
    productName: 'Microsoft Purview',
    audience: 'Microsoft Purview administrators'
  },

  // v1 is the site alone: no subscriber email, no Kit workflow.
  email: { enabled: false },

  brand: {
    wordmark: 'Daily Purview News',
    ogAlt: 'Daily Purview News: Microsoft Purview change intelligence',
    themeStorageKey: 'purview-news-theme',
    tokenStorageKey: 'purview-news-github-token',
    emailEyebrow: 'Daily Purview News',
    // The same mark as the weekly Purview News: the two editions share it.
    logo: 'purview-news-logo.png',
    aboutIcon: '/assets/products/purview.svg',
    uiAssets: ['purview-news-logo.png'],
    extraCss: ''
  },

  // Written into persisted state and published records. Never change these
  // once the site is live: see the engine README.
  identity: {
    docEventPrefix: 'purview-docs',
    batchEventPrefix: 'purview-news',
    kitMarkerPrefix: 'daily-purview-news'
  },

  build: { docsCloneDir: 'purview-docs', detailDays: 30 },

  discord: { botName: 'Purview Scout' },

  ai: {
    schemaPrefix: 'purview',
    subject: 'Purview',
    forbiddenOpeners: ['Microsoft Purview documentation', 'Purview documentation', 'The Purview docs'],
    impactBoost: /sensitivity label|dlp|data loss|retention|ediscovery|insider risk|audit|encryption|copilot|dspm|unified catalog/
  },

  docs: {
    source: { owner: 'merill', repo: 'purview-docs-mirror', branch: 'main' },
    // Learn's rendered titles end in this; it is not part of the page's name.
    titleSuffix: / \| Microsoft Learn$/,
    learnRootUrl: 'https://learn.microsoft.com/en-us/purview/',

    // Any article under Purview/, except the fragment directories, which are
    // included into other pages and have no URL of their own.
    trackedPaths: /^(Purview)\/(?!(?:.*\/)?(?:includes?|media|breadcrumb)\/).+\.md$/,

    // Every page publishes under purview/ at its own name. Learn lowercases
    // the path but ignores case, so the mirror's mixed-case names resolve.
    learnRoutes: [
      { match: /^Purview\/(.*)\.md$/, path: 'purview/$1' }
    ],

    areas: {
      stripPrefix: /^Purview\//,
      rules: [
        { match: /^legacy\//, name: 'Classic Microsoft Purview' },
        { match: /^deploymentmodels\//, name: 'Deployment models' }
      ],
      fallback: 'Microsoft Purview'
    }
  },

  analytics: { piqoSite: '' },

  messageCenter: { servicePattern: /\bPurview\b/i },

  links: {
    related: [],
    footer: [],
    stayCurrent: [
      { url: 'https://learn.microsoft.com/en-us/purview/whats-new', label: "What's new in Microsoft Purview" },
      { url: 'https://purview.admin.news', label: 'Purview News, the weekly edition' }
    ],
    followProject: [
      { url: 'https://merill.net', label: 'merill.net' },
      { url: 'https://github.com/merill', label: 'GitHub' }
    ]
  },

  taxonomy: {
    products: [
      { slug: 'purview', name: 'Microsoft Purview', short: 'Purview', learn: 'https://learn.microsoft.com/en-us/purview/', icon: { sourceName: 'Purview', sourcePath: 'fabric/purview_color.svg', match: 'exact' } },
      { slug: 'information-protection', name: 'Microsoft Purview Information Protection', short: 'Information Protection', learn: 'https://learn.microsoft.com/en-us/purview/information-protection', icon: { sourceName: 'Azure Information Protection', sourcePath: 'identity/10229-icon-service-Azure-Information-Protection.svg', match: 'closest' } },
      { slug: 'data-loss-prevention', name: 'Microsoft Purview Data Loss Prevention', short: 'Data Loss Prevention', learn: 'https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp', icon: { sourceName: 'Document Lock', sourcePath: 'Microsoft/dark-blue-Document Lock.svg', match: 'closest' } },
      { slug: 'insider-risk-management', name: 'Microsoft Purview Insider Risk Management', short: 'Insider Risk', learn: 'https://learn.microsoft.com/en-us/purview/insider-risk-management', icon: { sourceName: 'User Privacy', sourcePath: 'management-governance/10303-icon-service-User-Privacy.svg', match: 'closest' } },
      { slug: 'communication-compliance', name: 'Microsoft Purview Communication Compliance', short: 'Communication Compliance', learn: 'https://learn.microsoft.com/en-us/purview/communication-compliance', icon: { sourceName: 'Chat Multiple', sourcePath: 'Microsoft/dark-blue-Chat Multiple.svg', match: 'closest' } },
      { slug: 'ediscovery', name: 'Microsoft Purview eDiscovery', short: 'eDiscovery', learn: 'https://learn.microsoft.com/en-us/purview/edisc', icon: { sourceName: 'Search', sourcePath: 'general/10834-icon-service-Search.svg', match: 'closest' } },
      { slug: 'audit', name: 'Microsoft Purview Audit', short: 'Audit', learn: 'https://learn.microsoft.com/en-us/purview/audit-solutions-overview', icon: { sourceName: 'Activity Log', sourcePath: 'management-governance/00007-icon-service-Activity-Log.svg', match: 'closest' } },
      { slug: 'data-lifecycle-management', name: 'Data Lifecycle and Records Management', short: 'Data Lifecycle', learn: 'https://learn.microsoft.com/en-us/purview/data-lifecycle-management', icon: { sourceName: 'Recovery Services Vaults', sourcePath: 'management-governance/00017-icon-service-Recovery-Services-Vaults.svg', match: 'closest' } },
      { slug: 'compliance-manager', name: 'Microsoft Purview Compliance Manager', short: 'Compliance Manager', learn: 'https://learn.microsoft.com/en-us/purview/compliance-manager', icon: { sourceName: 'Compliance', sourcePath: 'management-governance/00011-icon-service-Compliance.svg', match: 'closest' } },
      { slug: 'dspm', name: 'Data Security Posture Management', short: 'DSPM', learn: 'https://learn.microsoft.com/en-us/purview/data-security-posture-management', icon: { sourceName: 'Identity Secure Score', sourcePath: 'security/03340-icon-service-Identity-Secure-Score.svg', match: 'closest' } },
      { slug: 'data-security-investigations', name: 'Microsoft Purview Data Security Investigations', short: 'Security Investigations', learn: 'https://learn.microsoft.com/en-us/purview/data-security-investigations', icon: { sourceName: 'Search Grid', sourcePath: 'general/10856-icon-service-Search-Grid.svg', match: 'closest' } },
      { slug: 'data-governance', name: 'Unified Catalog and Data Map', short: 'Data Governance', learn: 'https://learn.microsoft.com/en-us/purview/unified-catalog', icon: { sourceName: 'Book Database', sourcePath: 'fabric/book_database_filled.svg', match: 'closest' } }
    ],
    defaultProduct: 'purview',

    topics: [
      { slug: 'policies', name: 'Policies and rules', icon: { sourceName: 'Policy', sourcePath: 'management-governance/10316-icon-service-Policy.svg', match: 'closest' } },
      { slug: 'classification', name: 'Labels and classification', icon: { sourceName: 'Tags', sourcePath: 'general/10842-icon-service-Tags.svg', match: 'closest' } },
      { slug: 'ai', name: 'AI and Copilot', icon: { sourceName: 'Azure OpenAI', sourcePath: 'ai-machine-learning/03438-icon-service-Azure-OpenAI.svg', match: 'closest' } },
      { slug: 'reporting', name: 'Alerts, reports and investigation', icon: { sourceName: 'Dashboard', sourcePath: 'general/10015-icon-service-Dashboard.svg', match: 'closest' } },
      { slug: 'architecture', name: 'Planning and deployment', icon: { sourceName: 'Blueprints', sourcePath: 'management-governance/00006-icon-service-Blueprints.svg', match: 'closest' } },
      { slug: 'licensing', name: 'Licensing and billing', icon: { sourceName: 'Cost Management and Billing', sourcePath: 'general/00004-icon-service-Cost-Management-and-Billing.svg', match: 'closest' } },
      { slug: 'troubleshooting', name: 'Troubleshooting', icon: { sourceName: 'Troubleshoot', sourcePath: 'general/10341-icon-service-Troubleshoot.svg', match: 'exact' } },
      { slug: 'developer', name: 'Developer and PowerShell', icon: { sourceName: 'Code', sourcePath: 'general/10787-icon-service-Code.svg', match: 'closest' } },
      { slug: 'fundamentals', name: 'Fundamentals', icon: { sourceName: 'Guide', sourcePath: 'general/10810-icon-service-Guide.svg', match: 'closest' } },
      { slug: 'general', name: 'General', icon: { sourceName: 'Information', sourcePath: 'general/10005-icon-service-Information.svg', match: 'closest' } }
    ],
    defaultTopic: 'general',

    iconSource: { repository: ICONS, revision: '3d57443ed4445be9465ee2fee6a6ce6fd02cf90c' },

    stopwords: 'microsoft purview documentation docs update updated updates change changes new for with from into about that this your their has have will are and the how use using overview configure configuration guide learn support service services preview compliance data',

    searchAliases: {
      dlp: 'data loss prevention',
      irm: 'insider risk management',
      mip: 'information protection',
      sit: 'sensitive information type',
      edm: 'exact data match',
      dspm: 'data security posture management',
      dsi: 'data security investigations',
      ome: 'message encryption',
      dlm: 'data lifecycle management'
    }
  },

  // First match wins, over "<path> <title> <body>" lowercased, so a pattern
  // anchored with `^purview\/` reads the file name. Narrower names come first:
  // endpoint-dlp before dlp, data-security-investigations before data-security.
  classify: {
    products: [
      { slug: 'data-security-investigations', match: /^purview\/data-security-investigations/ },
      { slug: 'dspm', match: /^purview\/(dspm|data-security-posture|data-security-|ai-|collection-polic|manage-anthropic)|^purview\/deploymentmodels\/depmod-(dspm|data-leak-shadow-ai)/ },
      { slug: 'data-loss-prevention', match: /^purview\/(endpoint-dlp|endpoints-|dlp|device-onboarding|onboard-macos)|^purview\/deploymentmodels\/depmod-reduce-false-positives|^purview\/\S*-dlp\b/ },
      { slug: 'insider-risk-management', match: /^purview\/(insider-risk|irm-|adaptive-protection|privileged-access|forensic-evidence|copilot-in-purview-triage-irm)/ },
      { slug: 'communication-compliance', match: /^purview\/(communication-compliance|information-barriers)/ },
      { slug: 'ediscovery', match: /^purview\/(edisc|ediscovery|content-search|use-content-search)/ },
      { slug: 'audit', match: /^purview\/(audit|search-the-audit-log)/ },
      { slug: 'data-lifecycle-management', match: /^purview\/\S*(retention|records?\b|records-|data-lifecycle|disposition|file-plan|inactive-mailbox|archiv|pst-|priority-cleanup|data-connector|import-|archive)/ },
      { slug: 'compliance-manager', match: /^purview\/\S*compliance-manager|^purview\/compliance-score/ },
      { slug: 'information-protection', match: /^purview\/\S*(information-protection|sensitivity-label|rights-management|\birm\b|-irm-|double-key|customer-key|\bome\b|-ome-|encrypt|auto-label|scanner|trainable-classifier|data-classification|document-fingerprinting|named-entit|exact-data|\baip|\bmip-|\bocr-|on-demand-classification|tls-|tls-1|labels?\b|label-)|^purview\/sit-/ },
      { slug: 'data-governance', match: /^purview\/(unified-catalog|data-map|data-gov|register-scan|catalog|concept-|how-to-|tutorial-|legacy\/|scan|lineage|data-quality|glossary|microsoft-purview-connector|available-metadata|data-share|sources-and-scans|supported-|manage-data-governance|troubleshoot-kubernetes|troubleshoot-connections)/ }
    ],
    topics: [
      { slug: 'troubleshooting', scope: 'title', match: /\b(troubleshoot|known issue|error|faq|frequently asked)\b/ },
      { slug: 'ai', scope: 'title', match: /\b(copilot|ai|agent|agents|generative|chatgpt|llm)\b/ },
      { slug: 'developer', scope: 'title', match: /\b(api|powershell|graph|sdk|cmdlet|rest)\b/ },
      { slug: 'licensing', scope: 'title', match: /\b(licens|billing|pay-as-you-go|trial|pricing)\w*/ },
      { slug: 'architecture', scope: 'title', match: /\b(deploy|onboard|plan|migrat|get started|set up|prerequisit|architecture)\w*/ },
      { slug: 'reporting', scope: 'title', match: /\b(alert|report|activity explorer|dashboard|investigat|analytics)\w*/ },
      { slug: 'classification', scope: 'title', match: /\b(label|classif|sensitive information type|trainable|exact data match|fingerprint)\w*/ },
      { slug: 'policies', scope: 'title', match: /\b(polic|rule)\w*/ },
      { slug: 'fundamentals', scope: 'title', match: /\b(overview|what is|learn about|introduction|concepts?)\b/ }
    ]
  },

  copy: {
    rssFeedLabel: 'Subscribe to the Daily Purview News RSS feed',
    messageCenterHeading: 'Purview in Message Center',
    landing: {
      heading: 'Today in Microsoft Purview',
      blurb: 'Every tracked change across Microsoft Purview documentation, in plain English.'
    },
    directory: {
      productsLede: 'Every Microsoft Purview solution tracked here, with what changed in each.',
      topicsLede: 'Cross-solution themes, from labels and policies to AI and deployment.'
    },
    search: {
      inputLabel: 'Search Purview changes',
      placeholder: 'Search Microsoft Purview documentation changes'
    },
    compare: {
      pageTitle: 'Compare Purview documentation revisions',
      lede: 'Paste a Microsoft Learn URL to see exactly what changed between two revisions.',
      placeholderUrl: 'https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp',
      mapping: 'Purview pages map to merill/purview-docs-mirror, rebuilt from Microsoft Learn.'
    },
    dailyEmail: {
      eyebrow: 'Daily Purview News',
      intro: 'A short daily summary of what changed across Microsoft Purview documentation.'
    },
    detail: {
      adminHeading: 'What Purview admins need to know',
      adminImpactLabel: 'For Purview administrators',
      summaryLabel: 'Change summary',
      summaryDisclosure: 'Summaries are generated from the documentation change itself.'
    },
    footer: {
      featureBlurb: 'Maester Cloud continuously tests your Microsoft 365 security and compliance configuration.',
      tagline: 'Daily.Purview.Admin.News: an independent record of Microsoft Purview documentation changes.'
    },
    about: {
      heading: 'About Daily.Purview.Admin.News',
      lede: 'A readable daily record of what Microsoft changed across the Purview documentation set.',
      whyItExists: [
        'Microsoft Purview spans data security, governance and compliance, and its documentation changes constantly. Most changes are never announced anywhere.',
        'Purview\'s documentation source is not public, so there is no commit history to read. This site rebuilds one from Microsoft Learn and writes down what changed.'
      ],
      howItWorks: [
        'Four times a day merill/purview-docs-mirror fetches every Purview page on Microsoft Learn and commits the ones that changed.',
        'Every six hours this site reads that history. Each change is summarised, classified by solution and theme, and published with a link to the exact revision that produced it.',
        'Nothing here is official. It is a reading of the public documentation.'
      ],
      emailEyebrow: 'Daily Purview News',
      emailBody: 'A short daily summary of what changed across Microsoft Purview documentation.',
      extraSections: [],
      community: [
        'Built by Merill Fernando as part of the Admin.News network, alongside the weekly Purview News edited by Ewelina Paczkowska.'
      ],
      quote: 'The documentation changes every day. Somebody should be reading it.',
      bio: 'Merill Fernando builds tools for Microsoft identity, security and compliance administrators.'
    }
  }
};
