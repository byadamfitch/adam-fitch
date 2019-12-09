import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import { setThemeColor } from '../utility/theme';
import RichText from '../components/RichText';
import Section from '../components/Section';
import ListPublications from '../components/ListPublications';
import ListPodcasts from '../components/ListPodcasts';

const IndexPage = ({ data }) => {
	const {
		author,
		creator,
		title: podcastTitle,
		description: podcastDescription,
		image,
		link,
		feedUrl,
		lastBuildDate,
		items: podcastEpisodes,
		id,
	} = data.anchorPodcast;

	return (
		<Layout theme={null}>
			<SEO
				title="OllieJT"
				keywords={[
					`portfolio`,
					`ollie`,
					`taylor`,
					`olliejt`,
					`theolliejt`,
					`designer`,
					`product designer`,
					`esports`,
					`gaming`,
				]}
			/>

			<Section as="main">
				<RichText>
					<h1>Adam Fitch</h1>
					<h3>
						<em>Editor</em> at esports insider, freelance esports <em>journalist</em>
					</h3>
					<p>
						Adam Fitch is an English esports journalist, reporter, and editor. Writing for publications such
						as Red Bull, Dot Esports, Dexerto, Esports Insider, and GINX Esports TV, he was named
						‘Reporter of the Year’ at the UK Esports Awards in 2019 after being a finalist in 2018. Adam
						is known for providing extensive coverage of the industry at large.
					</p>
					<p>
						He also serves as the PUBG Adviser for the British Esports Association, a not-for-profit
						national body established in 2016 to promote esports in the UK.
					</p>
				</RichText>
				<ListPublications />
			</Section>

			<Section as="aside">
				<RichText as="header">
					<h6 className="highlight">Podcast</h6>
					<h2>{podcastTitle}</h2>
					<p>{podcastDescription}</p>
				</RichText>
				<ListPodcasts />
			</Section>
		</Layout>
	);
};

export const query = graphql`
	query homePageQuery {
		anchorPodcast {
			author
			creator
			title
			description
			image {
				link
				url
				title
			}
			link
			feedUrl
			lastBuildDate
			id
		}
	}
`;

export default IndexPage;
