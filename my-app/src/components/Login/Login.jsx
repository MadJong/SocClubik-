import React from "react";
import {connect} from 'react-redux'
import { antiLogin, login } from "../../Redux/auth-reducer";
import LoginRedusxForm from "./LoginForm";
import { NavLink, useNavigate } from 'react-router-dom';

const Login = (props) => {
    const log = useNavigate()
    let onSubmit = (formData) => {
        console.log(formData.email, formData.password, formData.rememberMe)
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {log("/profile/")}
    return (   
            <div><h1>Login</h1>
            <LoginRedusxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/></div>
            
    )
}

const mapStateToProps = (state) => {
  return  {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
    }
}
export default connect(mapStateToProps, {login, antiLogin})(Login)