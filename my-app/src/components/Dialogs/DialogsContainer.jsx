import { messageSendCreator, messageTextChangeCreator } from "../../Redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux'
    let mapStateToProps = (state) => {
        return {
            messages: state.dialogsPage.messages,
            dialogss: state.dialogsPage.dialogss,
            newMessageBody: state.dialogsPage.newMessageBody,
            isAuth: state.auth.isAuth
        }
    }

    let mapDispatchToProps = (dispatch) => {
        return {
            messageTextChange: (text) => {
                dispatch(messageTextChangeCreator(text))
            } ,
            messageCreator: () => {
                dispatch(messageSendCreator())
            }
        }
    }
 const DialogsContainer = connect(mapStateToProps, {
    messageTextChangeCreator,
    messageSendCreator,
})(Dialogs)
export default DialogsContainer