import React from "react";

class StatusProfile extends React.Component  {
    
    state = {
        editMode: false,
        status: this.props.status
    }
    activiteMode = () => {
        this.setState({
            editMode: true
        })
   }
   changeStatus = () => {

   }
   deactiviteMode = () => {
    this.setState({
        editMode: false
    })
    this.props.updateUserStatus(this.state.status)
}
    componentDidUpdate(prevProps,PrevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() { 
    return(
        <div>
            {this.state.editMode ? 
            <div>
            <input onChange={(e) => {
                this.setState({
                    status: e.target.value
                })
            }}  autoFocus={true} onBlur={this.deactiviteMode} value={this.state.status}></input>
            </div>
            : 
            <div>
            <span onDoubleClick={this.activiteMode}>{this.props.status}</span>
            </div> }
        </div>
    )
   }
}

export default StatusProfile