import React from 'react';
import Layout, { PageName }  from '../../components/Layout';
import ConfigLayout, { ConfigPageName } from '../../components/Configuration/ConfigLayout';
import MyProfile from '../../components/Configuration/MyProfile'

const MyProfilePage: React.FC = () => {
	return (
		<Layout pageName={PageName.configuration}>
			<ConfigLayout configPageName={ConfigPageName.myprofile}>
				<MyProfile />
			</ConfigLayout>
		</Layout>
	)
}

export default MyProfilePage;