import React from "react";
import { connect } from "react-redux";
import App from "./App";
import { doAuthorization } from "./Redux/findusers-reducer";

class AppContainer extends React.Component {
    componentDidMount() {
        this.props.doAuthorization()
  }
    render() {
        if (!this.props.isAuth) return 
        return (
            <App/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

connect (mapStateToProps, {
    doAuthorization,
})(AppContainer)

export default AppContainer