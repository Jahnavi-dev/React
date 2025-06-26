import { Component } from "react";

class UnMountingStageComp extends Component{
    state={
        visible:true
    }

    Action=()=>{
        this.setState({visible:!this.state.visible})
    }

    render(){
        return(
            <>
            <h4>UnMountingStage</h4>
            {this.state.visible?<ChildComp/>:<h5>No Child</h5>}
            
            <button onClick={this.Action}>Hide/show ChildComp</button>
            </>
        )
    }
}

export default UnMountingStageComp;

class ChildComp extends Component{
    componentWillUnmount(){
        console.log("componentWillUnmount")
        //while childComp is removed from DOM means this is executing once check in console
    }
    render(){
        return(
            <>
            <h4>ChildComp visible</h4>

            </>
        )
    }

}