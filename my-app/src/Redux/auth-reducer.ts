//import { stopSubmit } from "redux-form"
import { ThunkAction } from "redux-thunk"
import { authme, getCaptchaUrl, logOut } from "../Api/api"
import { doAuthorization } from "./findusers-reducer"
import { AppStateType } from "./redux-store"

const SETUSERDATA = "SETUSERDATA"
const SETCAPTCHA = "SETCAPTCHA"

type Ititialober = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl?: string | null
}

const ober: Ititialober = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

const AuthReducer = (state = ober, action: ActionsTypeAuth): Ititialober => {
        
        switch (action.type) {
            case SETUSERDATA:
               return state = {...state,
                ...action.data,
                }
                case SETCAPTCHA:
                    return state ={...state, captchaUrl: action.captchaUrl}
            default: return state
        }
}
type ActionsTypeAuth = setUserDataType | setCaptchaUrlType
type dataForSetUserDataType = {
    userId: number | null
    email: string  | null
    login: string  | null
    isAuth: boolean 
}
export type setUserDataType = {
    type: typeof SETUSERDATA
    data: dataForSetUserDataType
}

export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setUserDataType => {
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
type ThunkTypeAuth = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypeAuth>
export const login = (email:string, password:string, rememberMe:boolean, captcha: any): ThunkTypeAuth => async(dispatch) => {
   let response = await authme(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(doAuthorization())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptcha())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            //dispatch(stopSubmit("ReactJs", {_error: message}))
        }
}

export const antiLogin = (): ThunkTypeAuth => async(dispatch) => {
   let response = await logOut()
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null,null,null,false))
        }
    
}
type setCaptchaUrlType = {
    type: typeof SETCAPTCHA
    captchaUrl: string
}
export const getCaptcha = (): ThunkTypeAuth => async(dispatch) => {
    let response = await getCaptchaUrl()
    const captcha = response.data.url;
    dispatch(setCaptcha(captcha))
}

export const setCaptcha = (captchaUrl:string):setCaptchaUrlType => {
    return {
        type: SETCAPTCHA,
        captchaUrl,
    }
}
export default AuthReducer
