import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";
import classes from "./Myposts.module.css"


const Posts = (props) => {
  console.log("Render Posts!")
  return (
        <div className={classes.obol}>
        <h1>My posts</h1>
        <CreatePost  onAppPost={props.addPostActionCreator} onUpdatetext={props.updateTextareaActionCreator} postsArea={props.postsArea} />
        <div>
            {props.usersPosts.map((post,index) => <Post ms={post.ms} key={index + 1} nickName={post.nickName} />)}
        </div>
      </div>
    )
}

export default Posts