import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PublicationLinkButton = styled.li`
	line-height: 0;
	display: inline-block;
	padding: 0.8rem;
	a {
		border-radius: 2.4rem;
		overflow: hidden;
	}
`;

const PublicationLink = ({ name, link, image }) => (
	<PublicationLinkButton>
		<a href={link} target="_blank">
			<Img className="icon" fixed={image.childImageSharp.fixed} alt={name} />
		</a>
	</PublicationLinkButton>
);

export default PublicationLink;
