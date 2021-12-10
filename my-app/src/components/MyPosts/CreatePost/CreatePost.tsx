import { type } from "os";
import React, { useState } from "react";
import { AddPostType} from "../../../Redux/pfrofile-reduser";
import classes from "./CreatePost.module.css"
import CreatePostForm from "./CreatePostForm";
type DataForm = {
    textForArea: string
}
type PropsType = {
    onAppPost: (text: string) => AddPostType
}
const CreatePost: React.FC<PropsType> = ({onAppPost}) => {
    let createPost = (dataForm: DataForm) => {
        console.log(dataForm)
        onAppPost(dataForm.textForArea)

    }
    return (
        <div>
            <div><p className={classes.p}>Create new Post:</p></div>
            <CreatePostForm onSubmit={createPost}/>
        </div>
    )
}

export default CreatePost

