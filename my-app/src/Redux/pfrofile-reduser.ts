import { type } from "os"
import { ThunkAction } from "redux-thunk"
import { getUserStatus, ResultCodes, setUserPhoto, updateStatus } from "../Api/api"
import { PhotosType, PostItem, ProfilType } from "../Types/Types"
import { AppStateType } from "./redux-store"

const Add_Post = "ADD-POST"
const Area_Post_Change = "AREA-POSTS-CHANGE"
const SETUSERPROFILE = "SETUSERPROFILE"
const SETSTATUS = "SETSTATUS"
const INI = "INI"
const UPDATEPHOTO = "UPDATEPHOTO"
const SETENPROFILE = "SETENPROFILE"
const SETENEMYSTATUS = "SETENEMYSTATUS"

let ober = {
    posts: [{nickName: "Да я настоящий", ms: "y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid"},
    {nickName: "Да я настоящий", ms: "npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted"},
    {nickName: "Да я настоящий", ms: "Да, да и что? Ну я не такой как все, играю в компик и ловлю кайфы"},
    {nickName: "Да я настоящий", ms: "Новая инициализация!"}   
] as Array<PostItem>,
    userProfile: null as ProfilType | null,
    status: "",
    myID: null as number | null,
    enUserProfile: null as ProfilType | null,
    enemyStatus: "",
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
                        case SETENPROFILE:
                        return stateCop={...state, enUserProfile: action.userPfro };
                        case SETENEMYSTATUS: 
                        return stateCop={...state, enemyStatus: action.status}
                default:
                    return state;
} }


export type setStatusEnemyType = {
    type: typeof SETENEMYSTATUS
    status: string
}

export const setStatusEnemy = (status: string) : setStatusEnemyType => {
    return {
        type: SETENEMYSTATUS,
        status
    }
}

type setEnUserType = {
    type: typeof SETENPROFILE,
    userPfro: ProfilType, 
}

export const setEnemyProfile = (userPfro: ProfilType): setEnUserType => {
    return {
        type: SETENPROFILE,
        userPfro,
    }
}

type ActionsTypesProfile = IniType | SetPhotoType | AddPostType | setUserProfileType | setStatusType | setEnUserType | setStatusEnemyType

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
    //@ts-ignore
        dispatch(setStatus(response))
    
}

export const getEnStatus = (userId:number):ThunksType => async(dispatch) => {
    let response = await getUserStatus(userId)
    //@ts-ignore
    dispatch(setStatusEnemy(response))
}
export const updateUserStatus = (status: string): ThunksType => async(dispatch) => {
    let response = await updateStatus(status)
        if (response.data.resultCode === ResultCodes.Success) {
            dispatch(setStatus(status))
        } 
    
}

export const savePhoto = (file: any): ThunksType => async(dispatch) => {
    let response = await setUserPhoto(file)
    if(response.resultCode === ResultCodes.Success) {
        dispatch(setPhoto(response.data.photos))  
    }
}
export default ProfileReduser
