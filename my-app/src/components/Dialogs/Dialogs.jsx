import React, { useState } from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css"
import MessageItem from "./MessageItem/MessageItem";
import AddMessageForm from "./AddMessageForm";
import Login from "../Login/Login";
import { useSelector } from "react-redux";
import { getDialogsSelect, getIsAuthSelect, getMessagesSelect } from "../../utils/reselect";
const Dialogs = () => {
    const isAuthSel = useSelector(getIsAuthSelect)
    const messagesSel = useSelector(getMessagesSelect)
    const dialogsSel = useSelector(getDialogsSelect)

    if (!isAuthSel) {return <Login/>}
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
            {dialogsSel.map((user, index) => <DialogItem key={index + 1} name={user.name} id={user.id} />)}
            </div>
            <div>
            <div className={classes.dialogsMessages}>
            {messagesSel.map((m, index) => <MessageItem message={m.message} key={index + 1} />)}
            </div>
            <AddMessageForm />
            
            </div>
        </div>
    )
}



export default Dialogs

