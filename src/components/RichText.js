import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentArea = styled.section`
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
`;

const RichText = ({ children }) => <ContentArea>{children}</ContentArea>;

RichText.propTypes = {
	children: PropTypes.any.isRequired,
};

export default RichText;
