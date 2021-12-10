import React, { useEffect, useMemo, useState } from "react";
import classes from "./Profile.module.css"

type PropsType = {
    status: string | "" 
    updateUserStatus: (status: string) => void
}
const StatusHook: React.FC<PropsType> = ({status, updateUserStatus}) => {
    let [editMode, setEdidtMode] = useState(false)
    let [statusx, setStatus] = useState(status)
   useEffect(() => {
       setStatus(status)
   }, [status])
    const deactivideEditMode = () => {
        setEdidtMode(false)
        updateUserStatus(statusx)
    }
    return (
        <div>
            <div className={classes.bold}><span>Status: </span></div>
        {editMode ? 
        <div>
        <input onChange={e => {
            setStatus(e.target.value)
        }} value={statusx} autoFocus={true} onBlur={
            deactivideEditMode
        } ></input>
        </div>
        : 
        <div>
        <span onDoubleClick={() => {
            setEdidtMode(true)
        }}>{status}</span>
        </div> }
    </div>
    )
}

export default StatusHook