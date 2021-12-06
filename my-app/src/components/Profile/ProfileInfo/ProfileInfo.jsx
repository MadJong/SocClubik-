import React from "react";
import Preloader from "../../Common/preloader";
import StatusHook from "../StatusHook";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = (props)=> {
  console.log(props.profile)
  console.log("Профиль!")
  if (!props.profile) {
    return <Preloader />
  } 
  const changeAva = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  return (
        <div>
            <div>
          <img style={{width: '100%', height: '400px'}} src="https://i.ytimg.com/vi/nwQxU4gFTHY/maxresdefault.jpg" />
        </div>
        <div className={classes.ava}>
          <img className={classes.img} src={props.profile.photos.large || "https://www.kino-teatr.ru/news/8434/85299.jpg" } alt="" />
          <div>{props.myID ? <input type={"file"} onChange={changeAva} />: null}</div>
          <div>
            
            <div><span className={classes.bold}>{props.profile.fullName}</span></div>
            <div> <span className={classes.bold}>В поиске работы: </span>{props.profile.lookingForAJob ? "Да" : "Нет" } </div>
            <StatusHook status={props.status} updateUserStatus={props.updateUserStatus}/>
          </div>
        </div>
        </div>
    )
}
export default ProfileInfo