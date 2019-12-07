import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import Publication from '../components/PublicationLink';
import Podcast from '../components/PodcastCard';
import { setThemeColor } from '../utility/theme';

const ContentArea = styled.section`
	width: 100%;
	max-width: 880px;
	padding: 8rem 2.4rem;
	margin: 0 auto;
	&.richtext,
	.richtext {
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		p {
			margin-top: 0.5em;
			margin-bottom: 0.5em;
		}
		em {
			background-color: var(--color-primary-medium);
			padding: 0.2rem 0.4rem;
			border-radius: 0.8rem;
		}
	}
	.listof-podcast_episodes {
		${setThemeColor('light')};
		padding: 4rem 0;
	}
`;

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

			<main>
				<ContentArea className="richtext">
					<h1>Adam Fitch</h1>
					<h3>
						<em>Editor</em> at esports insider, freelance esports <em>journalist</em>
					</h3>
					<p>
						Adam Fitch is an English esports journalist, reporter, and editor. Writing for publications such
						as Red Bull, Dot Esports, Dexerto, Esports Insider, and GINX Esports TV, he was named ‘Reporter
						of the Year’ at the UK Esports Awards in 2019 after being a finalist in 2018. Adam is known for
						providing extensive coverage of the industry at large.
					</p>
					<p>
						He also serves as the PUBG Adviser for the British Esports Association, a not-for-profit
						national body established in 2016 to promote esports in the UK.
					</p>
					<ul className="listof-publications">
						{data.allPublicationsJson.edges.map(({ node }) => (
							<Publication {...node} />
						))}
					</ul>
				</ContentArea>
			</main>

			<aside>
				<ContentArea>
					<header className="richtext">
						<h6 className="highlight">Podcast</h6>
						<h2>{podcastTitle}</h2>
						<p>{podcastDescription}</p>
					</header>
					<ul className="listof-podcast_episodes">
						{podcastEpisodes.map(({ item }, index) => (
							<Podcast {...item} number={index + 1} />
						))}
					</ul>
				</ContentArea>
			</aside>
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

			items {
				item {
					creator
					contentSnippet
					content
					title
					date: isoDate(formatString: "MMM Do")
					dateRel: isoDate(fromNow: true)
					link
					itunes {
						season
						image
						explicit
						episode
						duration
					}
					enclosure {
						length
						type
						url
					}
					guid
				}
			}
			id
		}
		allPublicationsJson {
			edges {
				node {
					name
					link
					image {
						childImageSharp {
							fixed(width: 88) {
								...GatsbyImageSharpFixed
							}
						}
					}
				}
			}
		}
	}
`;

export default IndexPage;
