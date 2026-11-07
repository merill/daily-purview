// Daily Purview News against the engine's shared product checks, plus what is
// particular to Purview: one flat folder, so products come from file names.
const path = require('node:path');
const { defineProductConformance } = require('@merill/dailynews-engine/product-conformance');

defineProductConformance({
  root: path.join(__dirname, '..'),
  // Names this product must not carry, from files copied out of its siblings.
  // The about page names the weekly edition's editor, which is not a product.
  foreignNames: /\b(intune|entra|defender|memdocs|autopilot|windows server)\b/i,
  foreignAllowed: /Admin\.News network/,
  mirrorState: 'purview-docs/.learn-mirror/state.json',
  // Pages Learn publishes under a slug other than their file name. Learn
  // redirects the file-name URL, so these links still land.
  mirrorExceptions: {
    'Purview/dlp-policy-design.md': 'purview/dlp-migrate-exo-policy-to-unified-dlp'
  },
  trackedSamples: ['Purview/dlp-learn-about-dlp.md', 'Purview/legacy/concept-best-practices-scanning.md'],
  routeCases: {
    'Purview/dlp-learn-about-dlp.md': 'purview/dlp-learn-about-dlp',
    'Purview/legacy/register-scan-azure-sql-database.md': 'purview/legacy/register-scan-azure-sql-database'
  },
  productCases: {
    'purview/endpoint-dlp-learn-about.md': 'data-loss-prevention',
    'purview/dlp-create-deploy-policy.md': 'data-loss-prevention',
    'purview/insider-risk-management-policies.md': 'insider-risk-management',
    'purview/communication-compliance-policies.md': 'communication-compliance',
    'purview/edisc-search-create.md': 'ediscovery',
    'purview/audit-log-search.md': 'audit',
    'purview/retention-policies-sharepoint.md': 'data-lifecycle-management',
    'purview/compliance-manager-setup.md': 'compliance-manager',
    'purview/data-security-investigations-get-started.md': 'data-security-investigations',
    'purview/dspm-for-ai.md': 'dspm',
    'purview/unified-catalog-data-products.md': 'data-governance',
    'purview/sensitivity-labels.md': 'information-protection',
    'purview/purview-billing-models.md': 'purview'
  }
});
