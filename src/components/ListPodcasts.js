import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { setThemeColor } from '../utility/theme';
import Podcast from './CardPodcast';

const StyledList = styled.ul`
	${setThemeColor('light')};
	padding: 4rem 0;
`;

const ListPodcasts = () => (
	<StaticQuery
		query={graphql`
			query listPodcastsQuery {
				anchorPodcast {
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
				}
			}
		`}
		render={data => {
			const episodes = data.anchorPodcast.items;

			return (
				<StyledList>
					{episodes.map(({ item }, index) => (
						<Podcast key={item.guid} {...item} number={index + 1} />
					))}
				</StyledList>
			);
		}}
	/>
);

ListPodcasts.propTypes = {};

export default ListPodcasts;
