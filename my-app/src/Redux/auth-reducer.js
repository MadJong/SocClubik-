import { stopSubmit } from "redux-form"
import { authme, authMe, logOut } from "../Api/api"
import { doAuthorization } from "./findusers-reducer"

const SETUSERDATA = "SETUSERDATA"


const ober = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const AuthReducer = (state = ober, action) => {
        let stateCop = {}
        switch (action.type) {
            case SETUSERDATA:
               return stateCop = {...state,
                ...action.data,
                }
                
           
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

export const login = (email, password, rememberMe) => async(dispatch) => {
   let response = await authme(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(doAuthorization())
        } else {
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

export default AuthReducer
