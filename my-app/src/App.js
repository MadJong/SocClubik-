import {  Routes } from 'react-router';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UserPage from './components/Users/UserPage';
import UsersContainer from './components/Users/UsersContainer';
import store from './Redux/redux-store';
import {Navigate} from "react-router-dom";
import Login from "./components/Login/Login"
import React, { useEffect } from 'react';
import { doAuthorization } from './Redux/findusers-reducer';

function App() {
  console.log(store.getState().auth.isAuth)
  useEffect(() => {
    doAuthorization()
  }, [])
  return (
    <div className="app-wrapper">
      <HeaderContainer/>
      <Navbar/>
    <div className="app-wrapper-content"> 
    <Routes>
      <Route path="/messages/*" element={<React.Suspense fallback={<div>Loading</div>}> <DialogsContainer /> </React.Suspense>} />
      <Route path="/profile/" element={<ProfileContainer />} />
      <Route path="/findusers" element={<UsersContainer />}></Route>
      <Route path="/profile/:userId" element={<UserPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/*" element={<Navigate to="/login"/>} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
