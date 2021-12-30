import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { getUserPageThunk } from "../../Redux/findusers-reducer";
import { getStatus } from "../../Redux/pfrofile-reduser";
import Profile from "../Profile/Profile";
import ProfileForUser from "../Profile/ProfileForUser";
import ProfileContainerTwo from "./ProfileContainerTwo";

//const UserPage = () => {
 //   useLocation()
 //   console.log(useLocation().state)
 //   let a = +window.location.href.split("/")[4]
  //  return (
  //      <ProfileContainerTwo xx={a} ss={useLocation().state}/>
  //  )
//}

//export default UserPage

const UserPagePure = () => {
    useLocation()
    let IDUser = useLocation().state
    let a = +window.location.href.split("/")[4]
    const dispatch = useDispatch()
    useEffect(() => {
        if (IDUser === null) {
            dispatch(getUserPageThunk(a))
        dispatch(getStatus(a))
        } else {
        dispatch(getUserPageThunk(IDUser))
        dispatch(getStatus(IDUser))
        }
    }, [])
    return (
        <ProfileForUser />
    )
}

export default UserPagePure