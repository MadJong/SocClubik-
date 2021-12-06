import { getUserStatus, updateStatus } from "../Api/api"

const Add_Post = "ADD-POST"
const Area_Post_Change = "AREA-POSTS-CHANGE"
const SETUSERPROFILE = "SETUSERPROFILE"
const SETSTATUS = "SETSTATUS"

let ober = {
    posts: [{nickName: "Да я настоящий", ms: "y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid"},
    {nickName: "Да я настоящий", ms: "npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted"},
    {nickName: "Да я настоящий", ms: "Да, да и что? Ну я не такой как все, играю в компик и ловлю кайфы"},
    {nickName: "Да я настоящий", ms: "Новая инициализация!"}   
],
    postsArea: "",
    userProfile: null,
    status: ""
  }


const ProfileReduser = (state = ober, action) => {
    let stateCop = {...state}
    switch (action.type) {
        case Add_Post:
            stateCop = {
                ...state,
                posts: [...state.posts, {nickName: "Да я настоящий", ms: action.text}],
                postsArea: ""
            }
            return stateCop;
            case Area_Post_Change:
                stateCop = {...state,
                postsArea: action.text,
                }
                return stateCop;
                case SETUSERPROFILE:
                stateCop={...state, userProfile: action.userProfile}
                return stateCop;
                case SETSTATUS:
                   return stateCop={...state, status: action.status}
                default:
                    return state;
} }

export const addPostActionCreator = (text) => {
    return {
        type: Add_Post,
        text,
    }
}
export const updateTextareaActionCreator = (text) => {
    return {
        type: Area_Post_Change,
        text: text
    }
}
export const setUserProfile = (userProfile) => {
    return {
        type: SETUSERPROFILE,
        userProfile,
    }
}

export const setStatus = (status) => {
    return {
        type: SETSTATUS,
        status
    }
}

export const getStatus = (userId) => async(dispatch) => {
    let response = await getUserStatus(userId)
        dispatch(setStatus(response.data))
    
}

export const updateUserStatus = (status) => async(dispatch) => {
    let response = await updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        } 
    
}
export default ProfileReduser
