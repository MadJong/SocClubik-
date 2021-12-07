import *as axios from "axios"
const instanceOfAxios = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY": "81033786-844b-42d3-8525-8ce226acd056"
    },

})

 const usersAPI = {
    getUserPage (location)  {
        return instanceOfAxios.get(`/profile/${location}`, ).then(response => response.data)
      },
      getUsers(pagenum,count)  {
        return instanceOfAxios.get(`users?page=${pagenum}&count=${count}`).then(response => response.data)
     },
     getAuth() {
        return instanceOfAxios.get(`auth/me`).then(respoone => respoone.data)
     },
    doUnfollow(id) {
        return instanceOfAxios.delete(`follow/${id}`)
    },
    doFollow(id) {
        return instanceOfAxios.post(`follow/${id}`)
    },
}

export const getUserPage = (location) => {
  return instanceOfAxios.get(`/profile/${location}`, ).then(response => response.data)
}

export const getUsers = (pagenum,count) => {
   return instanceOfAxios.get(`users?page=${pagenum}&count=${count}`).then(response => response.data)
}

export const getAuth = () => {
   return instanceOfAxios.get(`auth/me`).then(respoone => respoone.data)
}

export const doUnfollow = (id) => {
    return instanceOfAxios.delete(`follow/${id}`)
}

export const doFollow = (id) => {
    return instanceOfAxios.post(`follow/${id}`)
}

export const getUserStatus = (id) => {
    return instanceOfAxios.get(`profile/status/${id}`)
} 
export const updateStatus = (status) => {
    return instanceOfAxios.put(`profile/status`, {
        status,
    })
}

export const authme = (email, password,rememberMe, captcha = null) => {
    return instanceOfAxios.post(`/auth/login`, {email, password, rememberMe, captcha})
}

export const logOut = () => {
    return instanceOfAxios.delete(`auth/login`)
}

export const setUserPhoto = (photoFile) => {
    const formData = new FormData();
    formData.append("image",photoFile)
    return instanceOfAxios.put(`profile/photo`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    } )
}

export const getCaptchaUrl = () => {
    return instanceOfAxios.get(`/security/get-captcha-url`)
}