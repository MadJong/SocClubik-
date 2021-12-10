import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { UserType } from "../../Types/Types";
import Paginator from "./Paginator";
import classes from "./Users.module.css"
type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    pageChenged: (p: number) => void 
    users: Array<UserType>
    isFollowingProgress: Array<number>
    uUnFollow: (id: number) => void
    uFollow: (id: number) => void
    isFetching: boolean
    title: string
}
const UsersPure: React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage,pageChenged, users, isFollowingProgress, uUnFollow, uFollow, title}) => {
    const route = useNavigate()
    return (
        <div>
                <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}  pageChenged={pageChenged} />
            {users.map(us => {
                return (<div key={us.id}>
                    <span>
                        <div>
                            
                        <img onClick={() => {
                            route("/profile/" + us.id, {state: us.id})
                        }} className={classes.img} src={ us.photos.small ? us.photos.small : "https://www.kino-teatr.ru/news/8434/85299.jpg"} alt="" />
                        
                        </div>
                        <div>
                            {us.followed ? <button disabled={isFollowingProgress.some(id => id === us.id)} onClick={() => {
                               uUnFollow(us.id)
                            }}>Unfollow</button> : <button disabled={isFollowingProgress.some(id => id === us.id)} onClick={() => {
                                uFollow(us.id)
                            }}>Follow</button> }
                        </div>
                    </span>
                    <span>
                     <span>
                         <div>{us.name}</div>
                         <div>{us.status}</div>
                     </span>
                     <span>
                         <div>{"us.location.country"}</div>
                         <div>{"us.location.city"}</div>
                     </span>
                    </span>
                </div>)
            })}
        </div>
    )

}


export default UsersPure