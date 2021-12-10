import { addPostActionCreator} from "../../Redux/pfrofile-reduser";
import Posts from "./Posts";
import {connect} from "react-redux"
import { AppStateType } from "../../Redux/redux-store";

let mapStateToProps = (state: AppStateType)  => {
  return {
    usersPosts: state.profilPage.posts,
    //postsArea:  state.profilPage.postsArea,
  }
}

//let mapDispatchToProps = (dispatch) => {
 //return{ onAppPost: () => {
 //   dispatch(addPostActionCreator())
 // },
 // onUpdatetext: (text) => {
    //dispatch(updateTextareaActionCreator(text))
 // }
//}

//}

let PostsContainer = connect(mapStateToProps, { addPostActionCreator})(Posts)

export default PostsContainer