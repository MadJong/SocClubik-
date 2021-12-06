import React from "react"
import { Field, reduxForm } from "redux-form";
import { maxlengthCreator, requiredField } from "../../utils/validators/Validators";
import { TextareaMS } from "../Common/FormsControls";
import classes from "./Dialogs.module.css"
let max = maxlengthCreator(100)
const AddMessage = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.createForm} >
            <Field className={classes.textArea} validate={[requiredField, max,]} placeholder={"Enter your message..."} name={"textForArea"} component={TextareaMS} />
            </div>
            <div className={classes.button}><button className={classes.send}>Send</button></div>
        </form>
    )
}

const AddMessageForm = reduxForm({
    form: "sendMessageForm",
    fields: []
})(AddMessage)

export default AddMessageForm