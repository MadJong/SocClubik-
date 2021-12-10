import React, { PureComponent } from "react";
import Profile from "./Profile";
import {connect} from "react-redux"
import { getStatus, savePhoto, setUserProfile, updateUserStatus } from "../../Redux/pfrofile-reduser";
import { doAuthorization, getUserPageThunk } from "../../Redux/findusers-reducer";
import Login from "../Login/Login";
import { ProfilType } from "../../Types/Types";
import { AppStateType } from "../../Redux/redux-store";

type StateProps = {
  profile: ProfilType
  isAuth: boolean
  status: string
  id: number
  myID: number
}
type DispatchProps = {
  setUserProfile: (status: string) => void
  getStatus: (userId: number) => void
  updateUserStatus: (status: string) => void
 getUserPageThunk: (id: number) => void
 doAuthorization: () => void
 savePhoto: (f: any) => void
}
type PropsType = StateProps & DispatchProps


class ProfileContainer extends React.PureComponent<PropsType> {
  componentDidMount() { 
        this.props.doAuthorization()
        //this.props.getStatus(this.props.id)
        
  }

    render() {
      if (!this.props.isAuth) { return <Login/>}
        return (
            <Profile isAuth={this.props.isAuth} myID={this.props.myID} savePhoto={this.props.savePhoto} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
        )
    }
}
let mapStateToProps = (state: AppStateType) => ({
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
  // @ts-ignore
})(ProfileContainer) 