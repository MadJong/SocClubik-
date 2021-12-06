import React from "react";
import classes from "./Users.module.css"
import * as axios from 'axios'

const Users = (props) => {
   
   let getUserss =  () => {
    if(props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }
   }
    
    return (
        <div>
            <button onClick={getUserss}>Загрузить пользователей</button>
            {props.users.map(us => {
                return (<div key={us.id}>
                    <span>
                        <div>
                        <img className={classes.img} src={ us.photos.small ? us.photos.small : "https://www.kino-teatr.ru/news/8434/85299.jpg"} alt="" />
                        </div>
                        <div>
                            {us.follow ? <button onClick={() => {
                                props.unfollow(us.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                props.follow(us.id)
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

export default Users