import React from 'react';
import { Link } from 'react-router-dom';

export enum ConfigPageName {
  myprofile,
  security,
  notification,
}

interface IConfigLayoutProps extends React.PropsWithChildren {
  configPageName: ConfigPageName;
}

const ConfigLayout: React.FC<IConfigLayoutProps> = ({ children, configPageName }) => {
  return (
    <div className="grow flex">
      <div>
        <div className="pt-14 pl-8 border-r border-[#EDEFF2] w-44 h-full">
          <ul className="text-sm font-semibold">
            <li className={`${configPageName === ConfigPageName.myprofile ? 'text-[#773EE2]' : 'text-[#6D717D]'} mb-7`}>
              <Link to="/configuration/myprofile">My Profile</Link>
            </li>
            <li className={`${configPageName === ConfigPageName.security ? 'text-[#773EE2]' : 'text-[#6D717D]'} mb-7`}>
              <Link to="/configuration/security">Security</Link>
            </li>
            <li
              className={`${configPageName === ConfigPageName.notification ? 'text-[#773EE2]' : 'text-[#6D717D]'} mb-7`}
            >
              <Link to="/configuration/notification">Notification</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="grow py-14 px-12">{children}</div>
    </div>
  );
};

export default ConfigLayout;
