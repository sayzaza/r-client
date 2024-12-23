import React, {useState} from 'react';

import AppBar from './AppBar';

export enum PageName {
	dashboard = 'Dashboard',
	wallet = 'wallet',
	swap = 'Swap',
	earn = 'Earn',
	transaction = 'Transactions',
	configuration = 'Configuration'
}

export interface IAppBarProps {
	pageName: PageName;
}

interface ILayoutsProps extends React.PropsWithChildren, IAppBarProps {}

const Layout: React.FC<ILayoutsProps> = ({ children, pageName }) => {
	const [openNav, setOpenNav] = useState<boolean>(true)
	return (
		<>
			<div className={`${openNav && 'ml-72'} flex flex-col min-h-screen`}>
				<AppBar pageName={pageName} />
				{children}
			</div>
		</>
	)
}

export default Layout