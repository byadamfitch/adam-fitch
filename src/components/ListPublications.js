import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Publication from './CardPublication';

const StyledList = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: stretch;
	flex-wrap: wrap;
	li {
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	a {
		transition: transform 0.24s cubic-bezier(0.5, -1.25, 0.75, 1.25);
		&:hover {
			transform: scale(1.15);
		}
	}
	@media (max-width: 750px) {
	}
`;

const ListPublications = () => (
	<StaticQuery
		query={graphql`
			query listPublicationQuery {
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
		`}
		render={data => {
			const publications = data.allPublicationsJson.edges;

			return (
				<StyledList>
					{publications.map(({ node }, index) => (
						<Publication key={node.name + index} {...node} />
					))}
				</StyledList>
			);
		}}
	/>
);

ListPublications.propTypes = {};

export default ListPublications;
