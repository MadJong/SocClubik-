import React, { useState } from "react";
import classes from "./Post.module.css"
type PropsType = {
nickName: string,
ms: string
}
const Post: React.FC<PropsType> = ({nickName, ms}) => {
const [like, setLike] = useState(0)
    return (
        <div className={classes.wrapper}>
            <div className={classes.body}>
            <img className={classes.img} src="https://sun9-15.userapi.com/impg/g87r4UBy_lbyT9JkUax99IRw7thC-rQmkbeHEQ/GhD5sbqaOAk.jpg?size=1883x2160&quality=96&sign=830158b1f69c45d92ad902b6f6c47880&type=album" />
            <p className={classes.name}>{nickName}</p>
            <p className={classes.time}> </p> 
            </div>
            <div>
                <p className={classes.text}>
                    {ms}
                </p>
                <div>like count: {like}</div>
                <button onClick={() => {
                    setLike(like + 1)
                }}>Нравится</button>
            </div>
        </div>
    )
}

export default Post