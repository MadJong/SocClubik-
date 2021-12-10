import React, { useState } from "react";
import classes from "./Users.module.css"

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    pageChenged:(p: number) => void
}
const Paginator: React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, pageChenged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    let portionSize = 5
    let portionCount = Math.ceil(pagesCount / portionSize)
    console.log(portionCount)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * pageSize + 1
    let rightPortionPageNumber = portionNumber * pageSize
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    } 
    return (
        
        <div className={classes.pageContainer}>
            {portionNumber > 1 ? <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Back</button> : null}
                    {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p, index) => {
                        return (
                            <span className={currentPage === p ? classes.pageSelected : classes.page} key={index + 1} onClick={ () => {
                                pageChenged(p)}}>{p}</span>
                        )
                    })}
                    {portionNumber < portionCount ? <button onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}>Next</button> : null}
                </div>
    )
}

export default Paginator