
import { Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { doFollow, doUnfollow, getAuth, getUserPage, getUsers, getUserStatus } from "../Api/api"
import { UserType } from "../Types/Types"
import { setUserData, setUserDataType } from "./auth-reducer"

import { getStatus, inicial,  IniType,  setStatus, setStatusType, setUserProfile, setUserProfileType } from "./pfrofile-reduser"
import { AppStateType } from "./redux-store"
const SETUSERS = "SETUSERS"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SELECTPAGE = "SELECTPAGE"
const SETUSERTOTALCOUNT = "SETUSERTOTALCOUNT"
const SETISFETCHING = "SETISFETCHING"
const SETISFOLLOWINGPROGRESS = "SETISFOLLOWINGPROGRESS"

const ober = {
    users: [
    ] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: [] as Array<number>,
}
 type UserOber = typeof ober
const UsersReducer = (state = ober, action: ActionsTypes) : UserOber => {
        let stateCop = {}
        switch (action.type) {
            case FOLLOW:
               return stateCop = {...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed:true}
                    }
                    return u 
                })
                }
                
            case UNFOLLOW:
                return stateCop = {...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed:false}
                        }
                        return u 
                    })
                    }
                    case SETUSERS:
                        return stateCop = {...state, users: [...action.users] }
                        case SELECTPAGE:
                        return stateCop = {...state, currentPage: action.numberPage}
                        case SETUSERTOTALCOUNT:
                            return stateCop = {...state, totalUsersCount: action.totalcount}
                            case SETISFETCHING:
                                return stateCop = {...state, isFetching: action.isFetching}
                                case SETISFOLLOWINGPROGRESS:
                                    return stateCop = {...state, isFollowingProgress: action.state ? [...state.isFollowingProgress, action.id] : state.isFollowingProgress.filter(id => id != action.id)
                                    }
            default: return state
        }
}

type ActionsTypes = selectPageType |  SetUsers | followType | unfollowType  | setUsersTotalCountType | setIsFetchingType | setStateFollowingType | setUserProfileType | IniType | setStatusType | setUserDataType
type setStateFollowingType = {
    type: typeof SETISFOLLOWINGPROGRESS
    state: boolean
    id: number
}
export const setStateFollowing = (state: boolean, id:number): setStateFollowingType => {
    return {
        type: SETISFOLLOWINGPROGRESS,
        state,
        id,

    }
}
type SetUsers = {
    type: typeof SETUSERS
    users: Array<UserType>

}
export const setUsers = (users: Array<UserType>): SetUsers => {
    return {
        type: SETUSERS,
        users: users
    }
}
type followType = {
    type: typeof FOLLOW
    userId: number
}
export const follow = (userId:number): followType => {
    return {
        type: FOLLOW,
        userId: userId,
    }
}
type unfollowType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollow = (userId: number): unfollowType => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}
export type selectPageType = {
    type: typeof SELECTPAGE
    numberPage: number
}
export const selectPage = (num: number): selectPageType => {
    return {
        type: SELECTPAGE,
        numberPage: num,
    }
}
type setUsersTotalCountType = {
    type: typeof SETUSERTOTALCOUNT
    totalcount: number
}
export const setUserTotalCount = (totalcount: number): setUsersTotalCountType => {
    return {
        type: SETUSERTOTALCOUNT,
        totalcount: totalcount,
    }
}
type setIsFetchingType = {
    type: typeof SETISFETCHING
    isFetching: boolean
}
export const setIsFetching = (isFetching: boolean): setIsFetchingType => {
    return {
        type: SETISFETCHING,
        isFetching: isFetching,
    }
}
type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
export const getUsersThunkCreator = (cp: number ,pageSize: number) => async (dispatch: DispatchType, getState: GetStateType) => {
    dispatch(setIsFetching(true))
    let response = await getUsers(cp, pageSize);
        dispatch(setUsers(response.items))
        dispatch(setUserTotalCount(response.totalCount))
        dispatch(setIsFetching(false))
        //this.props.setUsersTotalCount(response.data.totalCount)
    
      
}
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
export const useUnFollow =  (id:number):ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => async(dispatch) => {
    dispatch(setStateFollowing(true, id));
    let response = await doUnfollow(id)
        if (response.data.resultCode == 0) {
            dispatch(unfollow(id))
        }
        dispatch(setStateFollowing(false, id))
    
}

export const useFollow =  (id: number): ThunkType => async(dispatch) => {
    dispatch(setStateFollowing(true, id));
   let response = await doFollow(id)
        if (response.data.resultCode == 0) {
            dispatch(follow(id))
        }
        dispatch(setStateFollowing(false, id))
}

export const getUserPageThunk = (id: number): ThunkType => async(dispatch) => {
   let response = await getUserPage(id)
        dispatch(setUserProfile(response))
    
}

export const doAuthorization = (): ThunkType => async(dispatch) => {
   let response = await getAuth()
        if (response.resultCode === 0) {
            let {id, login, email} = response.data
            dispatch(setUserData(id, email, login, true))
            dispatch(inicial(id)) 
            let responseT = await getUserPage(id)
            dispatch(setUserProfile(responseT))
            let responseThree = await getUserStatus(id)
            dispatch(setStatus(responseThree.data))
        }
    
}

export const getUserStatusThunk = (id: number): ThunkType => async(dispatch) => {
   let response = await getUserStatus(id)
        return response
    
}
export default UsersReducer
