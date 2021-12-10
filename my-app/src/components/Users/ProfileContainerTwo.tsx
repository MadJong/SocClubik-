import React from "react";
import Profile from "../Profile/Profile";
import {connect} from "react-redux"
import { getStatus, updateUserStatus } from "../../Redux/pfrofile-reduser";
import { getUserPage, getUserStatus } from "../../Api/api";
import { getUserPageThunk, getUserStatusThunk } from "../../Redux/findusers-reducer";
import { AppStateType } from "../../Redux/redux-store";
import { ProfilType, UserType } from "../../Types/Types";

type DispatchProps = {
  getUserPageThunk: (id: number) => void
  getStatus: (userId:number) => void
  updateUserStatus: (status: string) => void
}
type StateProps = {
  profile: ProfilType
  status: string
  isAuth: boolean
  myID: number
}
type PureProps = {
  xx: number
  ss: number
}
type PropsType = DispatchProps & StateProps & PureProps

class ProfileContainerTwo extends React.Component<PropsType> {
  componentDidMount() {
    if (this.props.ss === null) {
      this.props.getUserPageThunk(this.props.xx)
      this.props.getStatus(this.props.xx)
    } else { 
    this.props.getUserPageThunk(this.props.ss)
    this.props.getStatus(this.props.ss)
     }
  }

    render() {
        return (
            <Profile myID={this.props.myID} isAuth={this.props.isAuth} status={this.props.status} profile={this.props.profile} updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}
let mapStateToProps = (state: AppStateType) => ({
  profile: state.profilPage.userProfile,
  status: state.profilPage.status,
  isAuth: state.auth.isAuth,
  myID: state.profilPage.myID,
})



export default connect(mapStateToProps,{
  getUserPageThunk,
  getStatus,
  updateUserStatus
  // @ts-ignore
})(ProfileContainerTwo) 