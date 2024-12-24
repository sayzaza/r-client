import React from 'react';
import Layout, { PageName }  from '../../components/Layout';
import ConfigLayout, { ConfigPageName } from '../../components/Configuration/ConfigLayout';
import Security from '../../components/Configuration/Security'

const SecurityPage: React.FC = () => {
	return (
		<Layout pageName={PageName.configuration}>
			<ConfigLayout configPageName={ConfigPageName.security}>
				<Security />
			</ConfigLayout>
		</Layout>
	)
}

export default SecurityPage;