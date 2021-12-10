import { type } from "os"
import { ThunkAction } from "redux-thunk"
import { getUserStatus, setUserPhoto, updateStatus } from "../Api/api"
import { PhotosType, PostItem, ProfilType } from "../Types/Types"
import { AppStateType } from "./redux-store"

const Add_Post = "ADD-POST"
const Area_Post_Change = "AREA-POSTS-CHANGE"
const SETUSERPROFILE = "SETUSERPROFILE"
const SETSTATUS = "SETSTATUS"
const INI = "INI"
const UPDATEPHOTO = "UPDATEPHOTO"


let ober = {
    posts: [{nickName: "Да я настоящий", ms: "y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid"},
    {nickName: "Да я настоящий", ms: "npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted"},
    {nickName: "Да я настоящий", ms: "Да, да и что? Ну я не такой как все, играю в компик и ловлю кайфы"},
    {nickName: "Да я настоящий", ms: "Новая инициализация!"}   
] as Array<PostItem>,
    userProfile: null as ProfilType | null,
    status: "",
    myID: null as number | null,
  }

  type InitialOberProfile = typeof ober
const ProfileReduser = (state = ober, action: ActionsTypesProfile):InitialOberProfile => {
    let stateCop = {...state}
    switch (action.type) {
        case Add_Post:
            stateCop = {
                ...state,
                posts: [...state.posts, {nickName: "Да я настоящий", ms: action.text}],
            }
            return stateCop;
            //case Area_Post_Change:
              //  stateCop = {...state,
               // postsArea: action.text,
               // }
               // return stateCop;
                case SETUSERPROFILE:
                stateCop={...state, userProfile: action.userProfile}
                return stateCop;
                case SETSTATUS:
                   return stateCop={...state, status: action.status};
                   case INI:
                       return stateCop= {...state, myID: action.id};
                    case UPDATEPHOTO:
                        return stateCop={...state, userProfile: {...state.userProfile, photos: action.photos} as ProfilType}
                default:
                    return state;
} }

type ActionsTypesProfile = IniType | SetPhotoType | AddPostType | setUserProfileType | setStatusType 

export type IniType = {
    type: typeof INI
    id: number
}
export const inicial = (id:number): IniType => {
    return {
        type: INI,
        id,
    }
}
type SetPhotoType = {
    type: typeof UPDATEPHOTO
    photos: PhotosType
}
export const setPhoto = (photos: PhotosType):SetPhotoType => {
    return {
        type: UPDATEPHOTO,
        photos,
    }
}

export type AddPostType = {
    type: typeof Add_Post
    text: string
}
export const addPostActionCreator = (text: string): AddPostType => {
    return {
        type: Add_Post,
        text,
    }
}

//export const updateTextareaActionCreator = (text) => {
//    return {
  //      type: Area_Post_Change,
 //      text: text
  //  }
//}
export type setUserProfileType = {
    type: typeof SETUSERPROFILE
    userProfile: ProfilType 
}
export const setUserProfile = (userProfile: ProfilType): setUserProfileType => {
    return {
        type: SETUSERPROFILE,
        userProfile,
    }
}
export type setStatusType = {
    type: typeof SETSTATUS
    status: string
}
export const setStatus = (status: string) : setStatusType => {
    return {
        type: SETSTATUS,
        status
    }
}
type ThunksType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypesProfile>

export const getStatus = (userId :number): ThunksType => async(dispatch) => {
    let response = await getUserStatus(userId)
        dispatch(setStatus(response.data))
    
}

export const updateUserStatus = (status: string): ThunksType => async(dispatch) => {
    let response = await updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        } 
    
}

export const savePhoto = (file: any): ThunksType => async(dispatch) => {
    let response = await setUserPhoto(file)
    if(response.data.resultCode === 0) {
        dispatch(setPhoto(response.data.data.photos))  
    }
}
export default ProfileReduser