import { Component } from "react";

class TimerComp extends Component{
    state={
        count:10
    }
    TimerAction=(Action)=>{
        switch (Action) {
            case "start":
                if(this.state.count>0){
            const intervalId=setInterval(()=>{
            this.setState({count:this.state.count-1},()=>{})
            if(this.state.count===1){
                clearInterval(intervalId);
            }
            
        },1000)}
            break;
        
            default:
                break;
        
        

        }
        
    }
    render(){
        const{count}=this.state
        return(
            <>
            <h3>Timer</h3>
            <h3>{count}</h3>
            <button onClick={()=>this.TimerAction("start")}>Start</button>
            <button onClick={()=>this.TimerAction("pause")}>Pause</button>
            <button onClick={()=>this.TimerAction("stop")}>Stop</button>
            </>
        )
    }
}
export default TimerComp;