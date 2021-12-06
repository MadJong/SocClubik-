import React from "react";
import classes from "./MessageItem.module.css"

const MessageItem = (props) => {
    return (
        <div className={classes.dialogsMessage}>{props.message}</div>
    )
}

export default MessageItem