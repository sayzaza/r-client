import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ConfigurationPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/configuration/myprofile');
  }, [navigate]);

  return null;
};

export default ConfigurationPage;
