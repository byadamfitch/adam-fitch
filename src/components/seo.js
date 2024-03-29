/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, keywords, title, banner }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | Esports Journalist`}
			//titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					name: `author`,
					content: 'Adam Fitch',
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					property: `og:image`,
					content: banner || "https://byadamfitch.com/static/d411d66b33f644e5a9c73030dc8aaed9/c077c/adam_fitch-esports_awards_winner.jpg",
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: 'byadamfitch',
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			]
				.concat(
					keywords.length > 0
						? {
								name: `keywords`,
								content: keywords.join(`, `),
						  }
						: []
				)
				.concat(meta)}
		/>
	);
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	keywords: [],
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.array,
	keywords: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string.isRequired,
};

export default SEO;
