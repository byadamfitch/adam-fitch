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

	<meta property="og:type" content="profile">
<meta property="og:title" content="Adam Fitch">
<meta property="og:url" content="https://byadamfitch.com">
<meta property="og:image" content="https://byadamfitch.com/static/d411d66b33f644e5a9c73030dc8aaed9/e6eb0/adam_fitch-esports_awards_winner.jpg">
<meta property="profile:first_name" content="Adam">
<meta property="profile:last_name" content="Fitch">
	
	// JSONLD / Manifest
	favicon: 'src/media/images/favicon.png', // Used for manifest favicon generation
	shortName: 'AdamFitch', // shortname for manifest. MUST be shorter than 12 characters
	author: 'Adam Fitch', // Author for schemaORGJSONLD
	themeColor: '#FFEA00',
	backgroundColor: '#000000',

	twitter: '@byadamfitch', // Twitter Username
	facebook: 'byadamfitch', // Facebook Site Name
	googleAnalyticsID: 'UA-80695103-1',

	skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
};
