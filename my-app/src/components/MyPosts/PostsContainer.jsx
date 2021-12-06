import { addPostActionCreator, updateTextareaActionCreator } from "../../Redux/pfrofile-reduser";
import Posts from "./Posts";
import {connect} from "react-redux"

let mapStateToProps = (state)  => {
  return {
    usersPosts: state.profilPage.posts,
    postsArea:  state.profilPage.postsArea,
  }
}

let mapDispatchToProps = (dispatch) => {
 return{ onAppPost: () => {
    dispatch(addPostActionCreator())
  },
  onUpdatetext: (text) => {
    dispatch(updateTextareaActionCreator(text))
  }
}

}

let PostsContainer = connect(mapStateToProps, { addPostActionCreator,
  updateTextareaActionCreator,
  })(Posts)

export default PostsContainer