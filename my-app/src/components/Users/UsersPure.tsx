import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom';
import { getUsersThunkCreator, selectPage, useFollow, useUnFollow } from "../../Redux/findusers-reducer";
import { getCurrentPageSelect, getFilterSelect, getIsFetchingSelect, getIsFollowingProgressSelect, getPageSizeSelect, getTotalUsersCountSelect, getUserReselect } from "../../utils/reselect";
import Preloader from "../Common/preloader";
import Paginator from "./Paginator";
import SearchForm from "./SearchForm";
import classes from "./Users.module.css"
type PropsType = { 
    pageTitle: string
}
const UsersPure: React.FC<PropsType> = (props) => {
    useEffect(() => {
        dispatch(getUsersThunkCreator(currentPageSel, pageSizeSel, "", filterSel.friend))
    }, [])
    const route = useNavigate()
    const dispatch = useDispatch()
    const totalUsersCountTwo = useSelector(getTotalUsersCountSelect)
    const usersHook= useSelector(getUserReselect)
    const pageSizeSel = useSelector(getPageSizeSelect)
    const currentPageSel = useSelector(getCurrentPageSelect)
    const isFollowingProgressSel = useSelector(getIsFollowingProgressSelect)
    const filterSel = useSelector(getFilterSelect)
    const isFetchingSel = useSelector(getIsFetchingSelect)
    const  pageChengedSel = (pagenum: number) => {
        dispatch(selectPage(pagenum));
        dispatch(getUsersThunkCreator(pagenum, pageSizeSel, filterSel.term, filterSel.friend))  
    } 
    const onFilterChangedSel = (filter: any) => {
        dispatch(getUsersThunkCreator(1, pageSizeSel, filter.term, filter.friend))
        dispatch(selectPage(1))  
    }
    const UnFollowSel = (id: number) => {
        dispatch(useUnFollow(id))
    }
    const FollowSel = (id: number) => {
        dispatch(useFollow(id))
    }
    
    return (
        
        <div>
                <h1>{props.pageTitle}</h1>
                {isFetchingSel ? <Preloader/> : null}
                <Paginator totalUsersCount={totalUsersCountTwo} pageSize={pageSizeSel} currentPage={currentPageSel}  pageChenged={pageChengedSel} />
                <SearchForm onFilterChanged={onFilterChangedSel}/>
            {usersHook.map(us => {
                return (<div key={us.id}>
                    <span>
                        <div>
                            
                        <img onClick={() => {
                            route("/profile/" + us.id, {state: us.id})
                        }} className={classes.img} src={ us.photos.small ? us.photos.small : "https://www.kino-teatr.ru/news/8434/85299.jpg"} alt="" />
                        
                        </div>
                        <div>
                            {us.followed ? <button disabled={isFollowingProgressSel.some(id => id === us.id)} onClick={() => {
                               UnFollowSel(us.id)
                            }}>Unfollow</button> : <button disabled={isFollowingProgressSel.some(id => id === us.id)} onClick={() => {
                                FollowSel(us.id)
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