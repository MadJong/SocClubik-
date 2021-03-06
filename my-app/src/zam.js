
  const dataUser = [
    {name:"Саня",id:"1"},
    {name:"Алёна",id:"2"},
    {name:"Вика",id:"3"},]

    const messagesData = [
        {message:"Привет, как ты?)" , id: 1},
        {message:"Классно, ты как?))" , id: 2},
        {message:"Я на севере)))" , id: 3},]

        const usersPosts = [{nickName: "Да я настоящий", ms: "y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid"},
  {nickName: "Да я настоящий", ms: "npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted"},
  {nickName: "Да я настоящий", ms: "Да, да и что? Ну я не такой как все, играю в компик и ловлю кайфы"},]

  const state = {
      profilePage: {
        posts: usersPosts,
        postsArea: "" 
      },
      dialogsPage: {
        dialogss: dataUser,
        messages: messagesData,
      },

      
  }

  export const postsAreaChange = (text) => {
    state.profilePage.postsArea = text
    renderThree()
}

export let addPost = (postMessage) => {
      let newPost = {
        nickName: "Да я настоящий",
        ms: state.profilePage.postsArea
      }

      state.profilePage.posts.push(newPost)
      state.profilePage.postsArea = ""
      renderThree()
      return newPost
  }

export const subscribe = (observer) => {
    renderThree = observer
}

import { useState } from "react";
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";
import classes from "./Myposts.module.css"
import Dialogs from "./components/Dialogs/Dialogs"


const Posts = (props) => {
  const [post, setPost] = useState('')
  const newPost = (val) => {
    setPost(val)
  }
  console.log("Ниже пропс сторе")
  console.log(props.store)
  console.log(props.store.getState().profilPage)
  return (
        <div className={classes.obol}>
        <h1>My posts</h1>
        <CreatePost  dispatch={props.store.dispatch} postsArea={props.postsArea} />
        <div>
            {props.usersPosts.map(post => <Post ms={post.ms} nickName={post.nickName} />)}
        </div>
      </div>
    )
}

export default Posts

const DialogsContainer = (props) => {
    console.log(props.store.getState().dialogsPage)
            let messageTextChange = (e) => {
                let text = e
                props.store.dispatch(messageTextChangeCreator(text))
            }

            let messageCreator = () => {
                props.store.dispatch(messageSendCreator())
            }

    return(<Dialogs messages={props.store.getState().dialogsPage.messages} dialogss={props.store.getState().dialogsPage.dialogss} newMessageBody={props.store.getState().dialogsPage.newMessageBody}  
          messageTextChange={messageTextChange} messageCreator={messageCreator}  
    />)
}


const PostsContainer = (props) => {
    let onUpdatetext = (e) => {
      let text = e
      props.store.dispatch(updateTextareaActionCreator(text))
    }

    let onAppPost = () => {
      props.store.dispatch(addPostActionCreator())
    }
    return(<Posts usersPosts={props.store.getState().profilPage.posts} postsArea={props.store.getState().postsArea} onAppPost={onAppPost} onUpdatetext={onUpdatetext}  />) 
}

case Message_Text:
            
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.text
            return stateCopy;
            case Send_Message:
                let newMessage = {
                    message: state.newMessageBody, id: 4
                 }
                 let stateCopyy = {...state}
                 stateCopyy.messages = [...state.messages]
                 stateCopyy.messages.push(newMessage)
                 stateCopyy.newMessageBody = ""
                 return stateCopyy;
                 default: 
                 return state   

                 <div>
                <div className={classes.pageContainer}>
                    {pages.map(p => {
                        return (
                            <span className={this.props.currentPage === p ? classes.pageSelected : classes.page} onClick={ () => {
                                this.pageChenged(p)}}>{p}</span>
                        )
                    })}
                </div>
            {this.props.users.map(us => {
                return (<div key={us.id}>
                    <span>
                        <div>
                        <img className={classes.img} src={ us.photos.small ? us.photos.small : "https://www.kino-teatr.ru/news/8434/85299.jpg"} alt="" />
                        </div>
                        <div>
                            {us.follow ? <button onClick={() => {
                                this.props.unfollow(us.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                this.props.follow(us.id)
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


this.props.setIsFetching(true)
getUsers(1, this.props.pageSize).then(response => {
    this.props.setUsers(response.items);
    if (response.totalCount > 10) {
        this.props.setUserTotalCount(50)
    }
    this.props.setIsFetching(false)
    //this.props.setUsersTotalCount(response.data.totalCount)
})
props.setStateFollowing(true, us.id)
doUnfollow(us.id).then(response => {
    if (response.data.resultCode == 0) {
        props.unfollow(us.id)
    }
    props.setStateFollowing(false, us.id)
})

getUserPage(this.props.ss).then(response => {
    this.props.setUserProfile(response)
  })

  getAuth().then(response => {
    if (response.resultCode === 0) {
        console.log(response)
        let {id, login, email} = response.data
        this.props.setUserData(id, email, login)
    }
})
{ Dialogs.jsx
<div className={classes.createForm}>
            <textarea className={classes.textArea} value={props.newMessageBody} onChange={ e => props.messageTextChangeCreator(e.target.value)}></textarea>
            </div>
            <div className={classes.button} onClick={() => {
                props.messageSendCreator()
            }}><button className={classes.send}>Send</button></div>

        }

        { CreatePost (Profile)
            <div><textarea value={postsArea} onChange={event => onUpdatetext(event.target.value)} className={classes.input} type="text"  /></div>
            <div><button onClick={()=> {
                onAppPost()
            }}  className={classes.send}>Send</button></div>
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`).then(response => {
          this.props.setUserProfile(response.data)
        })

        function App() {
            console.log(store.getState().auth.isAuth)
            return (
              <BrowserRouter>
              <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
              <div className="app-wrapper-content"> 
              <Routes>
                <Route path="/messages/*" element={<DialogsContainer />} />
                <Route path="/profile/" element={<ProfileContainer />} />
                <Route path="/findusers" element={<UsersContainer />}></Route>
                <Route path="/profile/:userId" element={<UserPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/*" element={<Navigate to="/login"/>} />
                </Routes>
              </div>
              </div>
              </BrowserRouter>
            );
          }
          
          export default App;
          