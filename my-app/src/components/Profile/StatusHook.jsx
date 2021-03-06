import React, { useEffect, useMemo, useState } from "react";
import classes from "./Profile.module.css"

const StatusHook = (props) => {
    let [editMode, setEdidtMode] = useState(false)
    let [status, setStatus] = useState(props.status)
   useEffect(() => {
       setStatus(props.status)
   }, [props.status])
    const deactivideEditMode = () => {
        setEdidtMode(false)
        props.updateUserStatus(status)
    }
    return (
        <div>
            <div className={classes.bold}><span>Status: </span></div>
        {editMode ? 
        <div>
        <input onChange={e => {
            setStatus(e.target.value)
        }} value={status} autoFocus={true} onBlur={
            deactivideEditMode
        } ></input>
        </div>
        : 
        <div>
        <span onDoubleClick={() => {
            setEdidtMode(true)
        }}>{props.status}</span>
        </div> }
    </div>
    )
}

export default StatusHook