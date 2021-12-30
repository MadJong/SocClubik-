import React from "react";
import {createSelector} from "reselect"
import { AppStateType } from "../Redux/redux-store";

export const getUserCommon = (state: AppStateType) => {
    return state.userPage.users
}


export const getUserReselect = createSelector(getUserCommon, (users) => {
return users.filter(u => true)
})

export const getTotalUsersCountSelect = (state: AppStateType) => {
    return state.userPage.totalUsersCount
}

export const getIsFetchingSelect = (state: AppStateType) => {
    return state.userPage.isFetching
}

export const getPageSizeSelect = (state: AppStateType) => {
    return state.userPage.pageSize
}

export const getCurrentPageSelect = (state: AppStateType) => {
    return state.userPage.currentPage
}

export const getIsFollowingProgressSelect = (state: AppStateType) => {
    return state.userPage.isFollowingProgress
}

export const getFilterSelect = (state: AppStateType) => {
    return state.userPage.filter
}
export const getIsAuthSelect = (state: AppStateType) => {
    return state.auth.isAuth
}
export const getCaptchaUrlSelect = (state: AppStateType) => {
    return state.auth.captchaUrl
}

export const getDialogsSelect = (state: AppStateType) => {
    return state.dialogsPage.dialogss
}

export const getMessagesSelect = (state: AppStateType) => {
    return state.dialogsPage.messages
}
export const getProfileSelect = (state: AppStateType) => {
    return state.profilPage.userProfile
}
export const getStatusSelect = (state: AppStateType) => {
    return state.profilPage.status
}
export const getMyIDSelect = (state: AppStateType) => {
    return state.profilPage.myID
}

export const getUserProfileSelect = (state: AppStateType) => {
    return state.profilPage.userProfile
}