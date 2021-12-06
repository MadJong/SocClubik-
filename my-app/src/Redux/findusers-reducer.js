import { initialize } from "redux-form"
import { doFollow, doUnfollow, getAuth, getUserPage, getUsers, getUserStatus } from "../Api/api"
import { setUserData } from "./auth-reducer"
import { getStatus, inicial, setStatus, setUserProfile } from "./pfrofile-reduser"
const SETUSERS = "SETUSERS"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SELECTPAGE = "SELECTPAGE"
const SETUSERTOTALCOUNT = "SETUSERTOTALCOUNT"
const SETISFETCHING = "SETISFETCHING"
const SETISFOLLOWINGPROGRESS = "SETISFOLLOWINGPROGRESS"
const ober = {
    users: [
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: [],
}
 
const UsersReducer = (state = ober, action) => {
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
export const setStateFollowing = (state, id) => {
    return {
        type: SETISFOLLOWINGPROGRESS,
        state,
        id,

    }
}

export const setUsers = (users) => {
    return {
        type: SETUSERS,
        users: users
    }
}
export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}
export const selectPage = (num) => {
    return {
        type: SELECTPAGE,
        numberPage: num,
    }
}
export const setUserTotalCount = (totalcount) => {
    return {
        type: SETUSERTOTALCOUNT,
        totalcount: totalcount,
    }
}

export const setIsFetching = (isFetching, id) => {
    return {
        type: SETISFETCHING,
        isFetching: isFetching,
    }
}

export const getUsersThunkCreator = (cp ,pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let response = await getUsers(cp, pageSize);
        dispatch(setUsers(response.items))
        dispatch(setUserTotalCount(response.totalCount))
        dispatch(setIsFetching(false))
        //this.props.setUsersTotalCount(response.data.totalCount)
    
      
}

export const useUnFollow =  (id) => async(dispatch) => {
    dispatch(setStateFollowing(true, id));
    let response = await doUnfollow(id)
        if (response.data.resultCode == 0) {
            dispatch(unfollow(id))
        }
        dispatch(setStateFollowing(false, id))
    
}

export const useFollow =  (id) => async(dispatch) => {
    dispatch(setStateFollowing(true, id));
   let response = await doFollow(id)
        if (response.data.resultCode == 0) {
            dispatch(follow(id))
        }
        dispatch(setStateFollowing(false, id))
   
}

export const getUserPageThunk = (id) => async(dispatch) => {
   let response = await getUserPage(id)
        dispatch(setUserProfile(response))
    
}

export const doAuthorization = () => async(dispatch) => {
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

export const getUserStatusThunk = (id) => async(dispatch) => {
   let response = await getUserStatus(id)
        return response
    
}
export default UsersReducer
