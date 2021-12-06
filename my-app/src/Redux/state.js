import React from "react"
import DialogsReduser from "./dialogs-reduser"
import ProfileReduser from "./pfrofile-reduser"

let store = {
    state: {
        profilePage: {
          posts: [{nickName: "Да я настоящий", ms: "y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid"},
          {nickName: "Да я настоящий", ms: "npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted"},
          {nickName: "Да я настоящий", ms: "Да, да и что? Ну я не такой как все, играю в компик и ловлю кайфы"},],
          postsArea: "",
        },
        dialogsPage: {
          dialogss: [
            {name:"Саня",id:"1"},
            {name:"Алёна",id:"2"},
            {name:"Вика",id:"3"},],
          messages: [
            {message:"Привет, как ты?)" , id: 1},
            {message:"Классно, ты как?))" , id: 2},
            {message:"Я на севере)))" , id: 3},
            {message:"Проверка", id: 4}
          ],
            newMessageBody: "",
        }, 
    },
    renderThree() {

    },

    dispatch(action) {
        this.state.profilePage = ProfileReduser(this.state.profilePage, action)
        this.state.dialogsPage = DialogsReduser(this.state.dialogsPage, action)

        this.renderThree()
    },

  subscribe(observer) {
    this.renderThree = observer
},
}
  export default store
