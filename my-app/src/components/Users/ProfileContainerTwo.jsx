import React from "react";
import Profile from "../Profile/Profile";
import {connect} from "react-redux"
import { getStatus, updateUserStatus } from "../../Redux/pfrofile-reduser";
import { getUserPage, getUserStatus } from "../../Api/api";
import { getUserPageThunk, getUserStatusThunk } from "../../Redux/findusers-reducer";

class ProfileContainerTwo extends React.Component {
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
            <Profile {...this.props} status={this.props.status} profile={this.props.profile} updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}
let mapStateToProps = (state) => ({
  profile: state.profilPage.userProfile,
  status: state.profilPage.status,
})



export default connect(mapStateToProps,{
  getUserPageThunk,
  getStatus,
  updateUserStatus
})(ProfileContainerTwo) 