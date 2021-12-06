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
  return (
        <div>
            <div>
          <img style={{width: '100%', height: '400px'}} src="https://i.ytimg.com/vi/nwQxU4gFTHY/maxresdefault.jpg" />
        </div>
        <div className={classes.ava}>
          <img src={props.profile.photos.large ? props.profile.photos.large : "" } alt="" />
          <div>
            
            <div>{props.profile.fullName}</div>
            <div>В поиске работы - {props.profile.lookingForAJob ? "Да" : "нет" } </div>
            <StatusHook status={props.status} updateUserStatus={props.updateUserStatus}/>
          </div>
        </div>
        </div>
    )
}
export default ProfileInfo