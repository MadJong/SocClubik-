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

export const authme = (email, password,rememberMe) => {
    return instanceOfAxios.post(`/auth/login`, {email, password, rememberMe})
}

export const logOut = () => {
    return instanceOfAxios.delete(`auth/login`)
}