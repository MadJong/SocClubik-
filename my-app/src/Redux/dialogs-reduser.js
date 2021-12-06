const Message_Text = "MESSAGE-TEXT-CHANGE"
const Send_Message = "MESSAGE-TEXT-SEND"
let ober = {
    dialogss: [
      {name:"Саня",id:"1"},
      {name:"Алёна",id:"2"},
      {name:"Вика",id:"3"},],
    messages: [
      {message:"Привет, как ты?)" , id: 1},
      {message:"Классно, ты как?))" , id: 2},
      {message:"Я на севере)))" , id: 3},],
      newMessageBody: "",
  }
const DialogsReduser = (state = ober, action) => {
    let stateCop = {...state}
    switch(action.type) {
        case Message_Text:
            stateCop = {...state,
            newMessageBody: action.text,
            }
            return stateCop;
            case Send_Message:
                 stateCop = {...state,
                    messages: [...state.messages, {message: action.text, id:4}],
                    newMessageBody: ""
                }
                 return stateCop;
                 default: 
                 return state     
    }
    
}

export const messageSendCreator = (text) => {
    return {
        type: Send_Message,
        text,
    }
}

export const messageTextChangeCreator = (text) => {
    return {
        type: Message_Text,
        text: text,
    }
}


export default DialogsReduser
