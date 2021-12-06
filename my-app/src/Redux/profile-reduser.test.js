import React from "react";
import ProfileReduser, { addPostActionCreator } from "./pfrofile-reduser";
it ('firstTest', () => {
    let state = {
        posts: [{nickName: "Да я настоящий", ms: "y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid"},
        {nickName: "Да я настоящий", ms: "npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted"},
        {nickName: "Да я настоящий", ms: "Да, да и что? Ну я не такой как все, играю в компик и ловлю кайфы"},
        {nickName: "Да я настоящий", ms: "Новая инициализация!"}   
    ],
      }
    let action = addPostActionCreator("Go suck!")
    let newState = ProfileReduser(state,action)

    expect (newState.posts.length).toBe(5)
})

