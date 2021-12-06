import React, { useState } from "react";
import classes from "./CreatePost.module.css"
import CreatePostForm from "./CreatePostForm";
const CreatePost = ({postsArea, onAppPost, onUpdatetext }) => {
    let createPost = (dataForm) => {
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

