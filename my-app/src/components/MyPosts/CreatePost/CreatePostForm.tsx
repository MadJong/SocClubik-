import React from "react";
import { useDispatch } from "react-redux";
// @ts-ignore
//import { Field, reduxForm } from "redux-form";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { maxlengthCreator, requiredField } from "../../../utils/validators/Validators";
import { Textarea } from "../../Common/FormsControls.js"; 
import classes from "./CreatePost.module.css"
import { addPostActionCreator } from "../../../Redux/pfrofile-reduser";
const  max = maxlengthCreator(10)
type PropsType = {
    handleSubmit: (dataForm: object) => void
}

const usearsSearchForm = () => {
    const errors = {};
     return errors;
}
const PostFormik = () => {
    const dispatch = useDispatch()
    const submit = (values : any, { setSubmitting } :any) => {
        //alert(JSON.stringify(values, null, 2));
        //setSubmitting(false);
        dispatch(addPostActionCreator(values.postText))
        values.postText = ""
        setSubmitting(false)
    
    }
    
    return (
        <div>
        <Formik
   initialValues={{ postText: ''}}
   validate={usearsSearchForm}
   onSubmit={submit}
 >
   {({ isSubmitting }) => (
     <Form>
       <Field className={classes.input} placeholder={"Enter your text..."}  component="textarea" name="postText" />
       <div><button className={classes.send} type="submit" disabled={isSubmitting}>Отправить</button></div>
     </Form>
   )}
 </Formik>
    </div>
    )
}

export default PostFormik
//const  max = maxlengthCreator(10)
//type PropsType = {
 //   handleSubmit: (dataForm: object) => void
//}
//const PostForm: React.FC<PropsType> = ({handleSubmit}) => {
 //   return (
  //      <form onSubmit={handleSubmit}>
   //         <div><Field validate={[requiredField, max ]} placeholder={"Create post..."} className={classes.input} name={"textForArea"} component={Textarea}/></div>
     //       <div><button className={classes.send}>Send</button></div>
       // </form>
//    )
//}

//const CreatePostForm= reduxForm({
  //  form: "createPostForm",
   // fields: []
//})(PostForm)

//export default CreatePostForm

