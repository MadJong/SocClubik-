import React from "react";
import * as axios from 'axios'
import UsersPure from "./UsersPure";

class UsersClassAPI extends React.Component { 
        componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                if (response.data.totalCount > 10) {
                    this.props.setUsersTotalCount(50)
                }
                //this.props.setUsersTotalCount(response.data.totalCount)
            })
                
        }  

        pageChenged = (pagenum) => {
            this.props.selectPage(pagenum);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagenum}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)})
        }
    render() {
        return (
        <UsersPure currentPage={this.props.currentPage}
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        pageChenged = {this.pageChenged}
        /> )
    }
}
