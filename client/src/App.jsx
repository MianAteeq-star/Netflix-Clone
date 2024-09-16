import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Browse from './pages/Browse';
import ProtectedRoutes from './components/ProtectedRoutes';
import SignUp from './pages/SignUp';
import DialogVideo from './pages/DialogVideo';

const App = () => {
  return (
    <>
        <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/browse" element={
          <ProtectedRoutes>
            <Browse />
          </ProtectedRoutes>
        } />
        <Route path="/" element={<Home />} />
      </Routes>
      <DialogVideo/>
    </>
    
  );
};

export default App;