import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css"

const Navbar = () => {
    const rr = useRef()
    const colection = document.getElementsByClassName(`${classes.ss}`)
    const [aa, setAa] = useState(colection[0])
    const active = () => {
      console.log("отработал цикл!")
      for (let i = 0; i < rr.current.children.length; i++) {
        if (rr.current.children[i].children[0] === aa) {
          rr.current.children[i].children[0].classList.add(`${classes.ac}`)
        } else {rr.current.children[i].children[0].classList.remove(`${classes.ac}`)}
      }
    }
    useEffect(() => {
      active()
    }, [aa])
  return (
        <nav className={classes.nav} ref={rr}>
        <div className={classes.item}><Link to="/profile" className={classes.ss} onClick={(event) => {
          setAa(event.target)
        }}>Profile</Link></div>
        <div className={classes.item}><Link to="/messages" onClick={ async(event) => {
          setAa(event.target) 
        }} className={classes.ss}>Messages</Link></div>
        <div className={classes.item}><Link to="/news" onClick={ async(event) => {
          setAa(event.target) 
        }} className={classes.ss}>News</Link></div>
        <div className={classes.item}><Link to="Music" onClick={ async(event) => {
          setAa(event.target) 
        }} className={classes.ss}>Music</Link></div>
        <div className={classes.item}><Link to="settings" onClick={ async(event) => {
          setAa(event.target) 
        }} className={classes.ss} onClick={(event) => {
          setAa(event.target)
        }}>Settings</Link></div>
        <div className={classes.item}><Link to="/findusers" onClick={ async(event) => {
          setAa(event.target) 
        }} className={classes.ss}>Find users</Link></div>
      </nav>
    )
}


export default Navbar