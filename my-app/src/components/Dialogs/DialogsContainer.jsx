import React from "react";
import { messageSendCreator } from "../../Redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux'
import Login from "../Login/Login";
import { doAuthorization } from "../../Redux/findusers-reducer";
    

class DialogsClass extends React.Component {
    componentDidMount() { 
        //this.props.doAuthorization()
        //this.props.getStatus(this.props.id)
        
  }

  render() {
      if (!this.props.isAuth) return <Login/>
      return <Dialogs {...this.props}  /> 
  }
}





let mapStateToProps = (state) => {
        return {
            messages: state.dialogsPage.messages,
            dialogss: state.dialogsPage.dialogss,
            isAuth: state.auth.isAuth
        }
    }   

    //let mapDispatchToProps = (dispatch) => {
     //   return {
       //     messageTextChange: (text) => {
       //         dispatch(messageTextChangeCreator(text))
        //    } ,
        //    messageCreator: () => {
         //       dispatch(messageSendCreator())
         //   }
        //}
   // }
 const DialogsContainer = connect(mapStateToProps, {
    doAuthorization,
    messageSendCreator,
})(DialogsClass)
export default DialogsContainer