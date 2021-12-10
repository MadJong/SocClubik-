import React from "react";
import {connect} from 'react-redux'

import LoginRedusxForm from "./LoginForm";
import { NavLink, useNavigate } from 'react-router-dom';
import { antiLogin, login } from "../../Redux/auth-reducer";
import { AppStateType } from "../../Redux/redux-store";
type PropsType = {
    isAuth: boolean
    captchaUrl: string | null
    login: (email:string, password:string, rememberMe:boolean, captcha: any) => void
}
const Login: React.FC<PropsType> = ({login, captchaUrl, isAuth }) => {
    const log = useNavigate()
    let onSubmit = (formData: any) => {
        console.log(formData.email, formData.password, formData.rememberMe)
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth) {log("/profile/")}
    return (   
            <div><h1>Login</h1>
            <LoginRedusxForm captchaUrl={captchaUrl} onSubmit={onSubmit}/></div>
            
    )
}

const mapStateToProps = (state: AppStateType) => {
  return  {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
    }
}
export default connect(mapStateToProps, {login, antiLogin})(Login)