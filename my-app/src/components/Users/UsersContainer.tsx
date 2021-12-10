import React from "react";
import {connect} from "react-redux"
import { follow, setUsers, unfollow, selectPage, setUserTotalCount, setIsFetching, setStateFollowing, getUsersThunkCreator, useUnFollow, useFollow, selectPageType } from "../../Redux/findusers-reducer";
import UsersPure from "./UsersPure";
import Preloader from "../Common/preloader";
import { getUserReselect} from "../../utils/reselect";
import { UserType } from "../../Types/Types";
import { AppStateType } from "../../Redux/redux-store";
import { type } from "os";

type PureProps = {
    pageTitle: string
}

type DispatchProps = {
    useFollow: (id:number) => void
    useUnFollow: (id:number) => void
    getUsersThunkCreator: (cp: number, pageSize: number) => void
    selectPage: (num: number) => selectPageType
}
type StateProps = {
    pageSize: number
    isFetching: boolean
    currentPage: number
    users: Array<UserType>
    totalUsersCount: number
    isFollowingProgress: Array<number>
    pageTitle: string
}
type PropsType = PureProps & DispatchProps & StateProps
class UsersClassAPI extends React.Component<PropsType> { 
    componentDidMount() {
        this.props.getUsersThunkCreator(1, this.props.pageSize)  
    }  

    pageChenged = (pagenum: number) => {
        this.props.selectPage(pagenum);
        this.props.getUsersThunkCreator(pagenum, this.props.pageSize)
       
    }
render() {
    return (
        <>
        {this.props.isFetching ? <Preloader/> : null}
    <UsersPure
    isFetching={this.props.isFetching}
    currentPage={this.props.currentPage}
    users={this.props.users}
    totalUsersCount={this.props.totalUsersCount}
    pageSize={this.props.pageSize}
    //unfollow={this.props.unfollow}
    //follow={this.props.follow}
    pageChenged = {this.pageChenged}
    //setStateFollowing={this.props.setStateFollowing}
    isFollowingProgress={this.props.isFollowingProgress}
    uUnFollow = {this.props.useUnFollow}
    uFollow = {this.props.useFollow}
    title = {this.props.pageTitle}
    />
    </> )
}
}

let mapStateToProps = (state: AppStateType) => {
    return {
        isFetching: state.userPage.isFetching,
        users: getUserReselect(state),
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFollowingProgress : state.userPage.isFollowingProgress,
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
    selectPage,
    setUserTotalCount,
    //setIsFetching,
    //setStateFollowing,
    getUsersThunkCreator,
    useUnFollow,
    useFollow,
})(UsersClassAPI)

export default UsersContainer