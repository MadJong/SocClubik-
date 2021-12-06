import React, { useState } from "react";
import classes from "./Users.module.css"

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    let portionSize = 5
    let portionCount = Math.ceil(pagesCount / portionSize)
    console.log(portionCount)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.pageSize + 1
    let rightPortionPageNumber = portionNumber * props.pageSize
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
                            <span className={props.currentPage === p ? classes.pageSelected : classes.page} key={index + 1} onClick={ () => {
                                props.pageChenged(p)}}>{p}</span>
                        )
                    })}
                    {portionNumber < portionCount ? <button onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}>Next</button> : null}
                </div>
    )
}

export default Paginator