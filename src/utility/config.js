module.exports = {
	pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
	title: 'Adam Fitch', // Navigation and Site Title
	titleAlt: 'Adam Fitch: Esports journalist.', // Title for JSONLD
	description:
		"Adam Fitch is an English esports journalist, reporter, and editor. 'Reporter of the Year' at the UK Esports Awards in 2019",
	headline: 'Adam Fitch: Esports journalist.', // Headline for schema.org JSONLD
	url: 'https://byadamfitch.com', // Domain of your site. No trailing slash!
	siteLanguage: 'en', // Language Tag on <html> element
	logo: 'src/media/images/manifest-icon.png', // Used for SEO
	ogLanguage: 'en_US', // Facebook Language

	// JSONLD / Manifest
	favicon: 'src/media/images/favicon.png', // Used for manifest favicon generation
	shortName: 'AdamFitch', // shortname for manifest. MUST be shorter than 12 characters
	author: 'Adam Fitch', // Author for schemaORGJSONLD
	themeColor: '#FFEA00',
	backgroundColor: '#000000',

	twitter: '@byadamfitch', // Twitter Username
	facebook: '', // Facebook Site Name
	googleAnalyticsID: 'UA-00000000-0',

	skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
};
