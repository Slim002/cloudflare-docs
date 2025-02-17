const productIconKey = "security-center";

module.exports = {
  product: "Security Center",
  pathPrefix: "/security-center",
  productIconKey,
  logoSVGContent: '<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="m5.96 3.92-1.61 1.65v7.04h-1.14v7.74h1.14v7.74h-1.14v7.74h1.14v6.65l1.61 1.71h37l1.61-1.61v-37l-1.61-1.65h-37zm1.61 3.2h33.8v33.9h-33.8v-33.9zm17.2 4.28c-1.58 0.0391-3.14 0.367-4.61 0.977-2.35 0.975-4.37 2.63-5.78 4.75-1.42 2.12-2.17 4.61-2.17 7.16 0.0041 3.42 1.36 6.69 3.78 9.11 2.42 2.42 5.69 3.77 9.11 3.78 2.55 0 5.04-0.754 7.16-2.17 2.12-1.42 3.77-3.43 4.75-5.78 0.975-2.35 1.23-4.95 0.734-7.45-0.497-2.5-1.73-4.8-3.53-6.6-1.8-1.8-4.1-3.03-6.6-3.53-0.937-0.186-1.89-0.268-2.83-0.244zm-1.24 3.22v3.53c-0.567 0.143-1.11 0.365-1.62 0.658l-2.5-2.5c1.22-0.872 2.63-1.45 4.12-1.69zm3.1 0c1.52 0.252 2.96 0.867 4.2 1.79l-2.5 2.45c-0.529-0.322-1.1-0.563-1.7-0.713v-3.53zm-9.41 3.86 2.48 2.48c-0.304 0.481-0.539 1-0.697 1.55h-3.54c0.268-1.46 0.867-2.84 1.75-4.03zm15.8 0.0762c0.917 1.27 1.52 2.75 1.74 4.3l-3.51 0.0293c-0.143-0.646-0.39-1.27-0.729-1.83l2.5-2.49zm-7.93 2.48c0.64 0 1.26 0.189 1.8 0.545 0.532 0.355 0.947 0.862 1.19 1.45s0.308 1.24 0.184 1.87c-0.125 0.628-0.432 1.2-0.885 1.66s-1.03 0.76-1.66 0.885c-0.628 0.125-1.28 0.0613-1.87-0.184-0.591-0.245-1.1-0.659-1.45-1.19s-0.545-1.16-0.545-1.8c0.0041-0.856 0.347-1.68 0.953-2.28 0.606-0.605 1.43-0.945 2.28-0.947v-0.00781zm-6.16 4.57c0.107 0.569 0.298 1.12 0.566 1.63l-2.52 2.52c-0.826-1.24-1.36-2.66-1.55-4.14l3.51-0.0156zm12.2 0.371h3.54c-0.269 1.55-0.912 3.02-1.87 4.27l-2.44-2.47c0.35-0.554 0.611-1.16 0.773-1.8zm-9.59 3.58c0.507 0.336 1.06 0.596 1.64 0.773v3.57c-1.5-0.296-2.91-0.941-4.11-1.88l2.47-2.46zm6.54 0.311 2.51 2.51c-1.28 0.886-2.76 1.45-4.31 1.63v-3.5c0.63-0.122 1.24-0.338 1.8-0.643z"/></svg>',
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/security-center",
  externalLinks: [
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com",
    },
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { facetFilters: '["project:security-center"]' },
  },
  siteMetadata: {
    title: "Cloudflare Security Center docs",
    description:
      "Cloudflare Security Center allows you to manage your IT assets in a single dashboard, warning you about possible security risks and vulnerabilities, and providing a one-click solution for Cloudflare configuration issues.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/security-center",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};
