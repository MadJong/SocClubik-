import React from "react";
import Head from "./Head";
import { antiLogin, setUserData } from "../../Redux/auth-reducer";
import {connect} from "react-redux"
import { doAuthorization } from "../../Redux/findusers-reducer";


class HeaderContainer extends React.Component {
    
    componentDidMount() {
        this.props.doAuthorization()
  }
    
    render() {
        return (
            <Head {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}
export default connect(mapStateToProps, {setUserData, doAuthorization, antiLogin})(HeaderContainer)