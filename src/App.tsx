import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import LoginPage from './pages/Login';
import SignupPage from './pages/SignUp';
import DashboardPage from './pages/Dashboard';
import Loading from './components/Loading';

const RootPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login');
  }, [navigate]);

  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={RootPage}/>
        <Route path='/login' Component={LoginPage}/>
        <Route path='/signup' Component={SignupPage}/>
        <Route path='/dashboard' Component={DashboardPage}/>
      </Routes>
      <Loading />
    </BrowserRouter>
  );
}

export default App;
