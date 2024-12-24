import React from 'react';
import Layout, { PageName }  from '../../components/Layout';
import ConfigLayout, { ConfigPageName } from '../../components/Configuration/ConfigLayout';
import Notification from '../../components/Configuration/Notification'

const NotificationPage: React.FC = () => {
	return (
		<Layout pageName={PageName.configuration}>
			<ConfigLayout configPageName={ConfigPageName.notification}>
				<Notification />
			</ConfigLayout>
		</Layout>
	)
}

export default NotificationPage;