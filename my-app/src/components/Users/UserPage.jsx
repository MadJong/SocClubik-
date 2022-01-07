import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { useParams } from "react-router-dom";
import { getUserEnemyPageThunk} from "../../Redux/findusers-reducer";
import { getEnStatus, getStatus } from "../../Redux/pfrofile-reduser";
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
    let {userId} = useParams()
    console.log(userId + " - из useParams")
    const dispatch = useDispatch()
    useEffect(() => {
        if (IDUser === null) {
            dispatch(getUserEnemyPageThunk((+userId)))
        dispatch(getEnStatus((+userId)))
        
        } else {
        dispatch(getUserEnemyPageThunk(IDUser))
        dispatch(getEnStatus(IDUser))
        }
    }, [])
    return (
        <ProfileForUser />
    )
}

export default UserPagePure