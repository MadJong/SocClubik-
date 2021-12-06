import React from "react";
import { Link } from "react-router-dom";
import classes from "./DialogItem.module.css"

const DialogItem = (props) => {

    return (
                <div>
                    <Link className={classes.dialogsItem + ' ' + classes.active} to={`/messages/${props.id}`}>{props.name}</Link>
                </div>
    )
}


export default DialogItem