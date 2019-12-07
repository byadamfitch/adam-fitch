import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Demo from '../components/Demo';

const IndexPage = () => {
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

			<Demo />
		</Layout>
	);
};

export default IndexPage;
