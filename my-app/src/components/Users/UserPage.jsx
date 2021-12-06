import React from "react";
import { useLocation } from "react-router";
import ProfileContainerTwo from "./ProfileContainerTwo";

const UserPage = () => {
    useLocation()
    console.log(useLocation().state)
    let a = +window.location.href.split("/")[4]
    return (
        <ProfileContainerTwo xx={a} ss={useLocation().state}/>
    )
}

export default UserPage