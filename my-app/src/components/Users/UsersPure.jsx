import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import Paginator from "./Paginator";
import classes from "./Users.module.css"
const UsersPure = (props) => {
    const route = useNavigate()
    return (
        <div>
                <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}  pageChenged={props.pageChenged} />
            {props.users.map(us => {
                return (<div key={us.id}>
                    <span>
                        <div>
                            
                        <img onClick={() => {
                            route("/profile/" + us.id, {state: us.id})
                        }} className={classes.img} src={ us.photos.small ? us.photos.small : "https://www.kino-teatr.ru/news/8434/85299.jpg"} alt="" />
                        
                        </div>
                        <div>
                            {us.followed ? <button disabled={props.isFollowingProgress.some(id => id === us.id)} onClick={() => {
                               props.useUnFollow(us.id)
                            }}>Unfollow</button> : <button disabled={props.isFollowingProgress.some(id => id === us.id)} onClick={() => {
                                props.useFollow(us.id)
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