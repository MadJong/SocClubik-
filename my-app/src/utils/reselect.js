import React from "react";
import {createSelector} from "reselect"

export const getUserCommon = (state) => {
    return state.userPage.users
}


export const getUserReselect = createSelector(getUserCommon, (users) => {
return users.filter(u => true)
})