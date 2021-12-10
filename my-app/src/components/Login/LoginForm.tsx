import React from "react";
// @ts-ignore
import { Field, reduxForm } from "redux-form";
import {requiredField } from "../../utils/validators/Validators";
import { InputForm } from "../Common/FormsControls";
type PropsType = {
    error: any 
    handleSubmit: any 
    captchaUrl: null | string
}
const LoginForm: React.FC<PropsType> = ({error, captchaUrl, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
                <div><Field validate={[requiredField]} name={"email"} placeholder={"Введите логин..."} component={InputForm}/></div>
                <div><Field validate={[requiredField]} name={"password"} placeholder={"Введите пароль..."} component={InputForm}/></div>
                <div><Field name={"rememberMe"} component={InputForm} type={"checkbox"}/> Запомнить меня</div>
                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && <Field name={"captcha"} validate={[requiredField]} placeholder={"Symbdols from image"} component={InputForm}/>}
                <div><button>Войти</button></div>
                {error ? <div style={{border: "1px solid red", color: "red", padding: "5px"}}>{error}</div> : null}
            </form>
    )
}

const LoginRedusxForm = reduxForm({
    form: "ReactJs",
    fields: []
})(LoginForm)

export default LoginRedusxForm