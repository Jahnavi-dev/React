import { Component } from "react";

class CounterComp extends Component{
    // console.log("Hiii")
    state={
        status:false,
        AppName:"My Counter App",
        count:0
    }
    
    // IncrementAction=()=>{
    //     this.setState({
    //         count:this.state.count+1
    //     },()=>{ console.log("Inside setState"+this.state.count)})
    //     console.log("outside setState"+this.state.count)
    // }
    //  ResetAction=()=>{
    //     this.setState({
    //         count:0
    //     })
    // }
    //  DecrementAction=()=>{
    //     if(this.state.count>0){
    //         this.setState({
    //         count:this.state.count-1
    //     })
    //     }   
    // }
    ChangeAction=(Action)=>{
        switch(Action){
            case "Increment":
                this.setState({
                    count:this.state.count+1
                    },()=>{ console.log("Inside setState"+this.state.count)})
                    break;
            case "Reset":
                this.setState({
                    count:0
                    })
                    break;
            case "Decrement":
                if(this.state.count>0){
                    this.setState({
                    count:this.state.count-1
                    })
                }
                    break;
            default:
                break;
        }

    }
    SubscribeAction=()=>{
        this.setState({
            status:!this.state.status
        })
    }


    render(){
        const{status, AppName, count }=this.state
        return(
        <>
        <button style={{backgroundColor:status?"Green":"Red"}}onClick={this.SubscribeAction}>{status?"Subscribed":"Subscribe"}</button>
        {
            status&&
            <>
            <h3>{AppName}</h3>
        <h3>{count}</h3>
        {/* <button onClick={this.IncrementAction}>Increment</button>
        <button onClick={this.ResetAction}>Reset</button>
        <button onClick={this.DecrementAction}>Decrement</button> */}
        <button onClick={()=>this.ChangeAction("Increment")}>Increment</button>
        <button onClick={()=>this.ChangeAction("Reset")}>Reset</button>
        <button onClick={()=>this.ChangeAction("Decrement")}>Decrement</button>
            </>
        }
        </>
        )
    }
}
export default CounterComp;