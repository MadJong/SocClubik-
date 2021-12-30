import axios from "axios"
import { type } from "os"
import { EmitAndSemanticDiagnosticsBuilderProgram } from "typescript"
import { PhotosType, ProfilType, UserType } from "../Types/Types"
const instanceOfAxios = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY": "81033786-844b-42d3-8525-8ce226acd056"
    },

})

 const usersAPI = {
    getUserPage (location:number)  {
        return instanceOfAxios.get(`/profile/${location}`, ).then(response => response.data)
      },
      getUsers(pagenum: number,count: number)  {
        return instanceOfAxios.get(`users?page=${pagenum}&count=${count}`).then(response => response.data)
     },
     getAuth() {
        return instanceOfAxios.get(`auth/me`).then(respoone => respoone.data)
     },
    doUnfollow(id:number) {
        return instanceOfAxios.delete(`follow/${id}`)
    },
    doFollow(id:number) {
        return instanceOfAxios.post(`follow/${id}`)
    },
}
export enum ResultCodes  {
    Success = 0,
    Error = 1,
}

export enum ResultCodesCaptcha {
    CaptchaIsTequaried = 10
}

type MeResponseType = {
    data: {
        id:number
        email: string
        login: string   
    }
    resultCode: ResultCodes
    messages: Array<string>
}

export const getUserPage = (location:number) => {
  return instanceOfAxios.get<ProfilType>(`/profile/${location}`, ).then(response => response.data)
}

type getUsersType = {
        items: Array<UserType>
        totalCount: number
        error: string
}
export const getUsers = (pagenum:number,count:number, term: string = "", friend: any) => {
   return instanceOfAxios.get<getUsersType>(`users?page=${pagenum}&count=${count}&term=${term}` + (friend === null ? '' : `&friend=${friend}`)).then(response => response.data)
}
export const getAuth = () => {
   return instanceOfAxios.get<MeResponseType>(`auth/me`).then(respoone => respoone.data)
}
 type doFollowType = {
    resultCode: ResultCodes
    messages: [] | Array<string>
    data: object
 }
export const doUnfollow = (id:number) => {
    return instanceOfAxios.delete<doFollowType>(`follow/${id}`)
}

export const doFollow = (id:number) => {
    return instanceOfAxios.post<doFollowType>(`follow/${id}`)
}
type getUserStatusType = {
    data: string | ""
}
export const getUserStatus = (id:number) => {
    return instanceOfAxios.get<getUserStatusType>(`profile/status/${id}`).then(response => response.data)
} 
type UpdateStatusType = {
    resultCode: ResultCodes
    messages: [] | Array<string>
    data: object
}
export const updateStatus = (status: string) => {
    return instanceOfAxios.put<UpdateStatusType>(`profile/status`, {
        status,
    })
}

type AuthLoginType = {
    resultCode: ResultCodes | ResultCodesCaptcha
    messages: Array<string>
    data: {
        userId:number
    }
}
export const authme = (email:string, password:string,rememberMe:boolean =false, captcha: string | null = null) => {
    return instanceOfAxios.post<AuthLoginType>(`/auth/login`, {email, password, rememberMe, captcha}).then(response => response.data)
}
type LogOutType = {
    resultCode: ResultCodes
    messages: [] | Array<string>
    data: object
}
export const logOut = () => {
    return instanceOfAxios.delete<LogOutType>(`auth/login`).then(response => response.data)
}
type setUserPthotoType = {
    data: {
        photos:PhotosType
    }
    resultCode: ResultCodes
    messages: [] | Array<string>
}
export const setUserPhoto = (photoFile:any) => {
    const formData = new FormData();
    formData.append("image",photoFile)
    return instanceOfAxios.put<setUserPthotoType>(`profile/photo`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    } ).then(response => response.data)
}
type GetCaptchaType = {
    url: string
}
export const getCaptchaUrl = () => {
    return instanceOfAxios.get<GetCaptchaType>(`/security/get-captcha-url`).then(response => response.data)
}