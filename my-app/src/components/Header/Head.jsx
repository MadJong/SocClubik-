import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Head.module.css'
const Head = (props) => {
    return (
        <header className={classes.header}>
        <img className={classes.img} style={{width: '50px', height: '50px', borderRadius: '50%'}} src="https://yt3.ggpht.com/a/AATXAJxupi2VXiMj8LU9rQzfpFvhuaTbedKJr5ywMj0b=s900-c-k-c0xffffffff-no-rj-mo" />
        <div className={classes.loginBlock}>
          {props.isAuth ? <div><span>{props.login} - <button onClick={props.antiLogin}>LogOut</button></span></div> : <NavLink to={"/login"}>Login</NavLink>  }
        </div>
      </header>
    )
}

export default Head