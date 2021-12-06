import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxlengthCreator, requiredField } from "../../../utils/validators/Validators";
import { Textarea } from "../../Common/FormsControls.js";

 
import classes from "./CreatePost.module.css"
const  max = maxlengthCreator(10)
const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field validate={[requiredField, max ]} placeholder={"Create post..."} className={classes.input} name={"textForArea"} component={Textarea}/></div>
            <div><button className={classes.send}>Send</button></div>
        </form>
    )
}

const CreatePostForm= reduxForm({
    form: "createPostForm",
    fields: []
})(PostForm)

export default CreatePostForm