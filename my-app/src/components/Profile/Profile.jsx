import React from "react";
import PostsContainer from "../MyPosts/PostsContainer";
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  console.log(props.status)
    return (
        <div className={classes.content}>
          <ProfileInfo savePhoto={props.savePhoto} myID={props.myID} isAuth={props.isAuth} profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
        <PostsContainer  />
      </div>
    )
}
export default Profile