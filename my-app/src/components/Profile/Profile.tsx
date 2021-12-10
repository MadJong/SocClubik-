import React from "react";
import { ProfilType } from "../../Types/Types";
import PostsContainer from "../MyPosts/PostsContainer";
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
type PropsType = {
  savePhoto?: (f: any) => void
  myID: number
  isAuth: boolean
  profile: ProfilType
  status: string
  updateUserStatus: (status: string) => void
}
const Profile: React.FC<PropsType> = ({savePhoto, myID, isAuth, profile, status, updateUserStatus}) => {
  console.log(status)
    return (
        <div className={classes.content}>
          <ProfileInfo savePhoto={savePhoto} myID={myID}
           // @ts-ignore
           isAuth={isAuth}
            profile={profile} status={status} updateUserStatus={updateUserStatus}/>
        <PostsContainer  />
      </div>
    )
}
export default Profile