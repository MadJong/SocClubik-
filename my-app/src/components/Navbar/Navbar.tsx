import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Navbar.module.css"
const Navbar = () => {
  return (
        <nav className={classes.nav}>
        <div className={classes.item}><NavLink to="/profile"  className = { navData => navData.isActive ? classes.active : classes.ss }>Profile</NavLink></div>
        <div className={classes.item}><NavLink to="/messages"  className = { navData => navData.isActive ? classes.active : classes.ss }>Messages</NavLink></div>
        <div className={classes.item}><NavLink to="/news"  className = { navData => navData.isActive ? classes.active : classes.ss }>News</NavLink></div>
        <div className={classes.item}><NavLink to="/music"  className = { navData => navData.isActive ? classes.active : classes.ss }>Music</NavLink></div>
        <div className={classes.item}><NavLink to="/settings"  className = { navData => navData.isActive ? classes.active : classes.ss } >Settings</NavLink></div>
        <div className={classes.item}><NavLink to="/findusers"  className = { navData => navData.isActive ? classes.active : classes.ss }>Find users</NavLink></div>
      </nav>
    )
}


export default Navbar 