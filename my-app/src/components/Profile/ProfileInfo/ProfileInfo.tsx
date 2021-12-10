import React, { ChangeEvent } from "react";
import { ProfilType } from "../../../Types/Types";
import Preloader from "../../Common/preloader";
import StatusHook from "../StatusHook";
import classes from "./ProfileInfo.module.css"

type PropsType = {
  profile: ProfilType
  myID: number
  status: string | ""
  updateUserStatus: (status:string) => void
  savePhoto: any
}
const ProfileInfo: React.FC<PropsType> = ({profile, myID, status, updateUserStatus, savePhoto})=> {
  console.log(profile)
  if (!profile) {
    return <Preloader />
  } 
  const changeAva = (e: any) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }
  return (
        <div>
            <div>
          <img style={{width: '100%', height: '400px'}} src="https://i.ytimg.com/vi/nwQxU4gFTHY/maxresdefault.jpg" />
        </div>
        <div className={classes.ava}>
          <img className={classes.img} src={profile.photos.large || "https://www.kino-teatr.ru/news/8434/85299.jpg" } alt="" />
          <div>{myID ? <input type={"file"} onChange={changeAva} />: null}</div>
          <div>
            
            <div><span className={classes.bold}>{profile.fullName}</span></div>
            <div> <span className={classes.bold}>В поиске работы: </span>{profile.lookingForAJob ? "Да" : "Нет" } </div>
            <StatusHook status={status} updateUserStatus={updateUserStatus}/>
          </div>
        </div>
        </div>
    )
}
export default ProfileInfo