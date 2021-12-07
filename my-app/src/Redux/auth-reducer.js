import { stopSubmit } from "redux-form"
import { authme, authMe, getCaptchaUrl, logOut } from "../Api/api"
import { doAuthorization } from "./findusers-reducer"

const SETUSERDATA = "SETUSERDATA"
const SETCAPTCHA = "SETCAPTCHA"

const ober = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

const AuthReducer = (state = ober, action) => {
        let stateCop = {}
        switch (action.type) {
            case SETUSERDATA:
               return stateCop = {...state,
                ...action.data,
                }
                case SETCAPTCHA:
                    return stateCop ={...state, captchaUrl: action.captchaUrl}
            default: return state
        }
}

export const setUserData = (userId, email, login, isAuth) => {
    return {
        type: SETUSERDATA,
        data: {
            userId,
            email,
            login,
            isAuth,
        }
    }
}

export const login = (email, password, rememberMe, captcha) => async(dispatch) => {
   let response = await authme(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(doAuthorization())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptcha())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit("ReactJs", {_error: message}))
        }
}

export const antiLogin = () => async(dispatch) => {
   let response = await logOut()
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null,null,null,false))
        }
    
}

export const getCaptcha = () => async(dispatch) => {
    let response = await getCaptchaUrl()
    const captcha = response.data.url;
    dispatch(setCaptcha(captcha))
}

export const setCaptcha = (captchaUrl) => {
    return {
        type: SETCAPTCHA,
        captchaUrl,
    }
}
export default AuthReducer
