import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const SocialLinkButton = styled.li`
	a {
		padding: 1.6rem;
		background-color: var(--color-primary-medium);
		border: 1px solid var(--color-level-6);
		line-height: 0;

		.icon {
			transform: scale(0.9);
			transition: transform 0.24s cubic-bezier(0.5, -1.25, 0.75, 1.25);
		}
		&:hover {
			background-color: var(--color-level-1);
			.icon {
				transform: scale(1.1);
			}
		}
	}
	&:first-of-type a {
		border-top-left-radius: 0.4rem;
		border-bottom-left-radius: 0.4rem;
	}
	&:last-of-type a {
		border-top-right-radius: 0.4rem;
		border-bottom-right-radius: 0.4rem;
	}
`;

const SocialLink = ({ name, link, image }) => (
	<SocialLinkButton>
		<a href={link} target="_blank">
			<Img className="icon" fixed={image.childImageSharp.fixed} alt={name} />
		</a>
	</SocialLinkButton>
);

export default SocialLink;
