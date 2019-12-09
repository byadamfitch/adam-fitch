import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentSection = styled.section`
	width: 100%;
	display: block;
	background-color: var(--color-level-background);
`;
const ContentContainer = styled.div`
	width: 100%;
	max-width: 880px;
	padding: 8rem 2.4rem;
	margin: 0 auto;
`;

const Section = ({ children, as }) => (
	<ContentSection as={as}>
		<ContentContainer>{children}</ContentContainer>
	</ContentSection>
);

Section.propTypes = {
	as: PropTypes.string,
	children: PropTypes.any.isRequired,
};

export default Section;
