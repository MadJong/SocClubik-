import {createStore, combineReducers, applyMiddleware} from "redux"
import AuthReducer from "./auth-reducer"
import DialogsReduser from "./dialogs-reduser"
import UsersReducer from "./findusers-reducer"
import ProfileReduser from "./pfrofile-reduser"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form';


let reducer = combineReducers({
    profilPage: ProfileReduser,
    dialogsPage: DialogsReduser,
    userPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
})

let store = createStore(reducer, applyMiddleware(thunkMiddleware))
window.store = store
export default store