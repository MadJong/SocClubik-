import {createStore, combineReducers, applyMiddleware} from "redux"
import DialogsReduser from "./dialogs-reduser"
import UsersReducer from "./findusers-reducer"
import ProfileReduser from "./pfrofile-reduser"
import thunkMiddleware from "redux-thunk"
// @ts-ignore
import {reducer as formReducer} from 'redux-form';
import AuthReducer from "./auth-reducer"


let reducer = combineReducers({
    profilPage: ProfileReduser,
    dialogsPage: DialogsReduser,
    userPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
})
type RootReduser = typeof reducer
export type AppStateType = ReturnType<RootReduser>


let store = createStore(reducer, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store
export default store