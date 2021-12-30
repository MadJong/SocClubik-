import React from "react"
import { ErrorMessage, Field, Form, Formik } from "formik";
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

const submit = (values, { setSubmitting }) => {
    //alert(JSON.stringify(values, null, 2));
    //setSubmitting(false);
    

    //У нас тут порнография с values, так как там не настоящие null false и true, а строчные, то есть 'null', 'false', 'true'
    // Можно самому ковертировать их в правильные типы выше, но пока работает так.
    onFilterChanged(values);
    alert(values.message)
    setSubmitting(false)

}

const AddMessageFormik = () => {
    return (
        <div>
            <Formik
       initialValues={{ message: ''}}
       validate={usearsSearchForm}
       onSubmit={submit}
     >
       {({ isSubmitting }) => (
         <Form className={classes.createForm}>
           <Field className={classes.textArea} placeholder={"Enter your message..."}  type="text-area" name="message" />
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

export default AddMessageForm

// return (
 //   <form onSubmit={props.handleSubmit}>
   // <div className={classes.createForm} >
    //<Field className={classes.textArea} validate={[requiredField, max,]} placeholder={"Enter your message..."} name={"textForArea"} component={TextareaMS} />
    //</div>
   // <div className={classes.button}><button className={classes.send}>Send</button></div>
//</form>
//)

//let max = maxlengthCreator(100)
//const AddMessage = (props) => {
    
    //return (
        //<form onSubmit={props.handleSubmit}>
            //<div className={classes.createForm} >
          //  <Field className={classes.textArea} validate={[requiredField, max,]} placeholder={"Enter your message..."} name={"textForArea"} component={TextareaMS} />
        //    </div>
      //      <div className={classes.button}><button className={classes.send}>Send</button></div>
    //    </form>
  //  )
//}

//const AddMessageForm = reduxForm({
    //form: "sendMessageForm",
  //  fields: []
//})(AddMessage)
//
//export default AddMessageForm

//let sendFunc = (dataForm) => {
 // console.log(dataForm.textForArea);
 // props.messageSendCreator(dataForm.textForArea)
//}