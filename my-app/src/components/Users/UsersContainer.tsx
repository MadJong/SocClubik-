import React from "react";
import {connect} from "react-redux"
import { follow, setUsers, unfollow, selectPage, setUserTotalCount, setFilter, setIsFetching, setStateFollowing, getUsersThunkCreator, useUnFollow, useFollow, selectPageType, doAuthorization } from "../../Redux/findusers-reducer";
import UsersPure from "./UsersPure";
import Preloader from "../Common/preloader";
import { getTotalUsersCountSelect, getUserReselect} from "../../utils/reselect";
import { UserType } from "../../Types/Types";
import { AppStateType } from "../../Redux/redux-store";
import { type } from "os";

type PureProps = {
    pageTitle: string
}

type DispatchProps = {
    //useFollow: (id:number) => void
    //useUnFollow: (id:number) => void
    // getUsersThunkCreator: (cp: number, pageSize: number, term: string, filter: any) => void
    //selectPage: (num: number) => selectPageType
    // setFilter:(filter:any) => void
    // doAuthorization: () => void
}
type StateProps = {
    pageSize: number
    isFetching: boolean
    currentPage: number
    users: Array<UserType>
    totalUsersCount: number
    isFollowingProgress: Array<number>
    pageTitle: string
    filter: any
}
type PropsType = PureProps & DispatchProps & StateProps
class UsersClassAPI extends React.Component<PropsType> { 
    //componentDidMount() {
      //  this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize, "", this.props.filter.friend)  
    //}  

    //pageChenged = (pagenum: number) => {
    //    this.props.selectPage(pagenum);
    //    this.props.getUsersThunkCreator(pagenum, this.props.pageSize, this.props.filter.term, this.props.filter.friend)  
    //} 
   // onFilterChanged = (filter: any) => {
     //   this.props.getUsersThunkCreator(1, this.props.pageSize, filter.term, filter.friend)
       // this.props.selectPage(1);  
    //}
render() {
    return (
        <>
        <h1>{this.props.pageTitle}</h1>
    <UsersPure
    // Между h1 и UsersPure {this.props.isFetching ? <Preloader/> : null}
    //unfollow={this.props.unfollow}
    //follow={this.props.follow}
    //setStateFollowing={this.props.setStateFollowing}
    // pageChanged = {this.pageChanged}
    // uUnFollow = {this.props.useUnFollow}
    // uFollow = {this.props.useFollow}
    // title = {this.props.pageTitle}
    // onFilterChanged = {this.onFilterChanged}
    />
    </> )
}
}

let mapStateToProps = (state: AppStateType) => {
    return {
        // isFetching: state.userPage.isFetching,
        //users: getUserReselect(state),
        // pageSize: state.userPage.pageSize,
        //totalUsersCount: getTotalUsersCountSelect(state),
        //currentPage: state.userPage.currentPage,
        //isFollowingProgress : state.userPage.isFollowingProgress,
       // filter: state.userPage.filter
    }
}

//let mapDispatchToProps = (dispatch: any) => {
 //   return {
  //      follow: (userId) => {
  //          dispatch(follow(userId))
    //    },
   //     unfollow: (userId) => {
   //         dispatch(unfollow(userId))
   //     },
   //     setUsers: (users) => {
   //         dispatch(setUsers(users))
     //   },
     //   selectPage: (num) => {
     //       dispatch(selectPage(num))
     //   },
     //   setUsersTotalCount: (totalcount) => {
     //       dispatch(setUserTotalCount(totalcount))
     //   },
     //   setIsFetching: (isFetching) => {
     //       dispatch(setIsFetching(isFetching))
     //   }
   // }
//}

const UsersContainer = connect(mapStateToProps, {
    //follow,
    //unfollow,
    //setUsers,
    // selectPage,
    // setUserTotalCount,
    // setIsFetching,
    // setStateFollowing,
    // getUsersThunkCreator,
    // useUnFollow,
    // useFollow,
    // setFilter,
    // doAuthorization,
})(UsersClassAPI)

export default UsersContainer