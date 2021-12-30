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
import Void from './components/Void/Void';
import { useDispatch } from 'react-redux';
import UsersPure from './components/Users/UsersPure';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';

function App() {
  console.log(store.getState().auth.isAuth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(doAuthorization())
    console.log(11)
  }, [])
  return (
    <div className="app-wrapper">
      <HeaderContainer/>
      <Navbar/>
    <div className="app-wrapper-content"> 
    <Routes>
      <Route path="/messages/*" element={<React.Suspense fallback={<div>Loading</div>}> <Dialogs/> </React.Suspense>} />
      <Route path="/profile/" element={<Profile />} />
      <Route path="/findusers" element={<UsersPure pageTitle={"Классные ребята"} />}></Route>
      <Route path="/profile/:userId" element={<UserPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/music" element={<Void/>}/>
      <Route path="/news" element={<Void/>}/>
      <Route path="/settings" element={<Void/>}/>
      <Route path="/*" element={<Navigate to="/login"/>} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
