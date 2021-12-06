import React from "react";
 
export const withAuthRedirect = (Component) => {

    class withAuthRedirect extends React.Component {

        render() {
            if (!isAuth) return <Redirect to="/messages/*"/>
            return <Component props={...this.props}/>
        }

    }

    return withAuthRedirect
}