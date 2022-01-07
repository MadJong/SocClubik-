import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/auth-reducer";
import { getUserPageThunk } from "../../Redux/findusers-reducer";
import { getStatus, savePhoto, updateUserStatus } from "../../Redux/pfrofile-reduser";
import { getEnemyStatusSelect, getEnemyUserProfile, getIsAuthSelect, getMyIDSelect, getProfileSelect, getStatusSelect, getUserProfileSelect } from "../../utils/reselect";
import Login from "../Login/Login";
import PostsContainer from "../MyPosts/PostsContainer";
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
type PropsType = {}
const ProfileForUser: React.FC = () => {
  const myIDSel = useSelector(getMyIDSelect)
  const isAuthSel = useSelector(getIsAuthSelect)
  const profileSel = useSelector(getEnemyUserProfile)
  const statusSel = useSelector(getEnemyStatusSelect)
  const userProfileSel = useSelector(getUserProfileSelect)
  const dispatch = useDispatch()
  const savePhotoL = (file: any) => {
    dispatch(savePhoto(file))
  }
  const updateUserStatusL = (status: string) => {
    dispatch(updateUserStatus(status))
  }
  if (!isAuthSel && userProfileSel === null) {return <Login/>}
    return (
        <div className={classes.content}>
          <ProfileInfo savePhoto={savePhotoL}
         
          myID={myIDSel}
           //@ts-ignore
           isAuth={isAuthSel}
            profile={profileSel} status={statusSel} updateUserStatus={updateUserStatusL}/>
        <PostsContainer  />
      </div>
    )
}
export default ProfileForUser