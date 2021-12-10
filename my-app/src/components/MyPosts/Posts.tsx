import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";
import classes from "./Myposts.module.css"
import { AddPostType } from "../../Redux/pfrofile-reduser";
import { PostItem } from "../../Types/Types";

type PropsType = {
  addPostActionCreator: (text:string) => AddPostType
  usersPosts: Array<PostItem>
}
const Posts: React.FC<PropsType> = ({addPostActionCreator, usersPosts}) => {
  console.log("Render Posts!")
  return (
        <div className={classes.obol}>
        <h1>My posts</h1>
        <CreatePost  onAppPost={addPostActionCreator}/>
        <div>
            {usersPosts.map((post,index) => <Post ms={post.ms} key={index + 1} nickName={post.nickName} />)}
        </div>
      </div>
    )
}

export default Posts