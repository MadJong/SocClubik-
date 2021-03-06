import React, { PureComponent } from "react";
import Profile from "./Profile";
import {connect} from "react-redux"
import { getStatus, savePhoto, setUserProfile, updateUserStatus } from "../../Redux/pfrofile-reduser";
import { doAuthorization, getUserPageThunk } from "../../Redux/findusers-reducer";
import Login from "../Login/Login";


class ProfileContainer extends React.PureComponent {
  componentDidMount() { 
        this.props.doAuthorization()
        //this.props.getStatus(this.props.id)
        
  }

    render() {
      if (!this.props.isAuth) { return <Login/>}
        return (
            <Profile {...this.props} savePhoto={this.props.savePhoto} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
        )
    }
}
let mapStateToProps = (state) => ({
  profile: state.profilPage.userProfile, 
  isAuth: state.auth.isAuth,
  status: state.profilPage.status,
  id: state.auth.userId,
  myID: state.profilPage.myID,
})



export default connect(mapStateToProps,{
  setUserProfile,
  getStatus,
  updateUserStatus,
 getUserPageThunk,
 doAuthorization,
 savePhoto,
})(ProfileContainer) 