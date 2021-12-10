import { type } from "os"

const Message_Text = "MESSAGE-TEXT-CHANGE"
const Send_Message = "MESSAGE-TEXT-SEND"

type MessageSender = {
    name: string
    id: number
}

type MessageItem = {
    message: string
    id: number
}
type Ititi2 = typeof ober
let ober = {
    dialogss: [
      {name:"Саня",id:1},
      {name:"Алёна",id:2},
      {name:"Вика",id:3},] as Array<MessageSender>,
    messages: [
      {message:"Привет, как ты?)" , id: 1},
      {message:"Классно, ты как?))" , id: 2},
      {message:"Я на севере)))" , id: 3},] as Array<MessageItem>,
  }
const DialogsReduser = (state = ober, action: SendMessage) : Ititi2 => {
    let stateCop = {...state}
    switch(action.type) {
       // case Message_Text:
           // stateCop = {...state,
            //newMessageBody: action.text,
           // }
           // return stateCop;
            case Send_Message:
                 stateCop = {...state,
                    messages: [...state.messages, {message: action.text, id:4}],
                }
                 return stateCop;
                 default: 
                 return state     
    }
    
}

type SendMessage = {
    type: typeof Send_Message
    text: string
}
export const messageSendCreator = (text: string):SendMessage => {
    return {
        type: Send_Message,
        text,
    }
}

//export const messageTextChangeCreator = (text) => {
 //   return {
  //      type: Message_Text,
  //      text: text,
  //  }
//}


export default DialogsReduser
