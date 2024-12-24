import React, { useState } from 'react';
import Layout, { PageName } from '../../components/Layout'
import Dashboard from '../../components/Dashboard';

const DashboardPage: React.FC = () => {	
	return (
		<Layout pageName={PageName.dashboard}>
			<Dashboard />
		</Layout>
	)
};

export default DashboardPage;