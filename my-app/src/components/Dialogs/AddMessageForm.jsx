import React from "react"
import { ErrorMessage, Field, Form, Formik } from "formik";
import classes from "./Dialogs.module.css"
import { messageSendCreator } from "../../Redux/dialogs-reduser";
import { useDispatch } from "react-redux";
const usearsSearchForm = () => {
    const errors = {};
     return errors;
}
const AddMessage = () => {
    const dispatch = useDispatch()
    const submit = (values, { setSubmitting }) => {
        //alert(JSON.stringify(values, null, 2));
        //setSubmitting(false);
        dispatch(messageSendCreator(values.message))
        values.message = ""
        setSubmitting(false)
    
    }
        return (
            <div>
                <Formik
           initialValues={{ message: ''}}
           validate={usearsSearchForm}
           onSubmit={submit}
         >
           {({ isSubmitting }) => (
             <Form className={classes.createForm}>
               <Field className={classes.textArea} placeholder={"Enter your message..."}  component="textarea" name="message" />
               <div className={classes.button}><button className={classes.send} type="submit" disabled={isSubmitting}>
               Отправить
               </button>
               </div>
             </Form>
           )}
         </Formik>
            </div>
        )
    
}
export default AddMessage