import React, { useState, useEffect } from 'react';
import NavMenu from './NavMenu';
import AppBar from './AppBar';

export enum PageName {
  dashboard = 'Dashboard',
  wallet = 'Wallet',
  swap = 'Swap',
  earn = 'Earn',
  transaction = 'Transaction',
  configuration = 'configuration',
}

export interface IAppBarProps {
  pageName: PageName;
}

interface ILayoutProps extends React.PropsWithChildren, IAppBarProps {}

const Layout: React.FC<ILayoutProps> = ({ children, pageName }) => {
  const [openNav, setOpenNav] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 950) {
      setOpenNav(true);
    } else {
      setOpenNav(false);
    }
  }, [windowWidth]);

  return (
    <>
      <NavMenu openNav={openNav} setOpenNav={setOpenNav} />
      <div className={`${openNav && 'ml-72'} flex flex-col min-h-screen`}>
        <AppBar pageName={pageName} />
        {children}
      </div>
    </>
  );
};

export default Layout;
