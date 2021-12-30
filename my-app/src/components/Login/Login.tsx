import React from "react";
import {connect, useDispatch, useSelector} from 'react-redux'

import LoginRedusxForm from "./LoginForm";
import { NavLink, useNavigate } from 'react-router-dom';
import { antiLogin, login } from "../../Redux/auth-reducer";
import { AppStateType } from "../../Redux/redux-store";
import { getCaptchaUrlSelect, getIsAuthSelect } from "../../utils/reselect";
type PropsType = {

}
export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}
const Login: React.FC<PropsType> = () => {
    const log = useNavigate()
    const isAuthSel = useSelector(getIsAuthSelect)
    const captchaUrlSel = useSelector(getCaptchaUrlSelect)
    const dispatch = useDispatch()
    const loginSel = (email:string, password:string, rememberMe:boolean, captcha: any) => {
       dispatch(login(email, password, rememberMe, captcha))
    }
    let onSubmit = (formData: any) => {
        console.log(formData.email, formData.password, formData.rememberMe)
        loginSel(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuthSel) {log("/profile/")}
    return (   
            <div><h1>Login</h1>
            <LoginRedusxForm captchaUrl={captchaUrlSel} onSubmit={onSubmit}/></div>
            
    )
}

const mapStateToProps = (state: AppStateType) => {
  return  {
   // isAuth: state.auth.isAuth,
    //captchaUrl: state.auth.captchaUrl
    }
}
export default Login
//export default connect(mapStateToProps, {})(Login)