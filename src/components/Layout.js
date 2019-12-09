import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GlobalStyle from '../utility/GlobalStyles';
import { setThemeColor } from '../utility/theme';
import SocialLink from './SocialLink';
import Img from 'gatsby-image';

const PageContainer = styled.div`
	${props => props.theme}
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	height: 100%;
	align-items: stretch;
	justify-content: space-between;
	aside {
		${setThemeColor('dark')};
		background-color: var(--color-level-background);
	}
`;

const Header = styled.header`
	width: 100%;
	padding: 8rem 2.4rem 0 2.4rem;
	max-width: 880px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	.banner {
		display: block;
		width: 100%;
		margin: 0 auto;
		border-radius: 4rem;
		overflow: hidden;
		z-index: 5;
	}
	.listof-socialmedia {
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top: auto;
		z-index: 10;
		margin: 0 auto;
		transform: translateY(50%);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 0 1.6rem;
	}
	@media (max-width: 750px) {
		padding: 0;
		.banner {
			border-radius: 0;
		}
	}
`;

const Layout = ({ children, theme, data }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				banner: file(relativePath: { eq: "adam_fitch-esports_awards_winner.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 880) {
							...GatsbyImageSharpFluid
						}
					}
				}
				allSocialsJson {
					edges {
						node {
							name
							link
							image {
								childImageSharp {
									fixed(width: 24) {
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
			return (
				<PageContainer theme={theme}>
					<GlobalStyle />
					<Header>
						<Img
							className="banner"
							fluid={data.banner.childImageSharp.fluid}
							alt="Adam Fitch accepting esports award"
						/>

						<ul className="listof-socialmedia">
							{data.allSocialsJson.edges.map(({ node }) => (
								<SocialLink {...node} />
							))}
						</ul>
					</Header>
					{children}
				</PageContainer>
			);
		}}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
