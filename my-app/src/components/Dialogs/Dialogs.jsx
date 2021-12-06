import React, { useState } from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css"
import MessageItem from "./MessageItem/MessageItem";
import AddMessageForm from "./AddMessageForm";
import Login from "../Login/Login";
const Dialogs = (props) => {
    let sendFunc = (dataForm) => {
        console.log(dataForm.textForArea);
        props.messageSendCreator(dataForm.textForArea)
    }
    if (!props.isAuth) {return <Login/>}
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
            {props.dialogss.map((user, index) => <DialogItem key={index + 1} name={user.name} id={user.id} />)}
            </div>
            <div>
            <div className={classes.dialogsMessages}>
            {props.messages.map((m, index) => <MessageItem message={m.message} key={index + 1} />)}
            </div>
            <AddMessageForm onSubmit={sendFunc} />
            
            </div>
        </div>
    )
}



export default Dialogs