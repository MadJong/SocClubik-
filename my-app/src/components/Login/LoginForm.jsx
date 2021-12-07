import React from "react";
import { Field, reduxForm } from "redux-form";
import {requiredField } from "../../utils/validators/Validators";
import { InputForm } from "../Common/FormsControls";
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div><Field validate={[requiredField]} name={"email"} placeholder={"Введите логин..."} component={InputForm}/></div>
                <div><Field validate={[requiredField]} name={"password"} placeholder={"Введите пароль..."} component={InputForm}/></div>
                <div><Field name={"rememberMe"} component={InputForm} type={"checkbox"}/> Запомнить меня</div>
                {props.captchaUrl && <img src={props.captchaUrl}/>}
                {props.captchaUrl && <Field name={"captcha"} validate={[requiredField]} placeholder={"Symbdols from image"} component={InputForm}/>}
                <div><button>Войти</button></div>
                {props.error ? <div style={{border: "1px solid red", color: "red", padding: "5px"}}>{props.error}</div> : null}
            </form>
    )
}

const LoginRedusxForm = reduxForm({
    form: "ReactJs",
    fields: []
})(LoginForm)

export default LoginRedusxForm