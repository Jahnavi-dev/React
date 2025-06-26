import axios from "axios";
import { Component } from "react";

class UpdatingStageComp extends Component{
    constructor(props){
        super(props)
        this.state={
            count:1,
            color:"green", 
            product:null
        }
    }

    incrementAction=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

   
    static getDerivedStateFromProps(props){
        console.log("getDerivedStatefromProps", props);
        return {
            color:props.color
        };
    }

    componentDidMount(){
        document.title=`Count ${this.state.count}`
        axios.get(`https://fakestoreapi.in/api/products/${this.state.count}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data.product);
            if(res.status===200){
                this.setState({product:res.data.product})
            }
            
        })
        
    }
    
    // componentDidUpdate(){
    //     document.title=`Count ${this.state.count}`
    //     axios.get(`https://fakestoreapi.in/api/products/${this.state.count}`)
    //     .then((res)=>{
    //         console.log(res);
    //         console.log(res.data.product);
    //         this.setState({product:res.data.product})
    //     })
        //Here componentDidUpdate is executing multiple times (which is going to infinite loop) so go to chatgpt for the above code 


        // const getProduct=async ()=>{
        //     let res=await axios.get(`https://fakestoreapi.in/api/products/${this.state.count}`)
        //     console.log(res, "componentDidUpdate");
            // if(res.status===200){
            //     this.setState({product:res.data.product})
            // }
            //Here componentDidUpdate is executing multiple times (which is going to infinite loop)so i tried but still same so go to chatgpt
        // }
        // getProduct();
    // }

    shouldComponentUpdate(){
        return true
        // return false
    }

    getSnapshotBeforeUpdate(props, state){
        console.log("getSnapshotBeforeUpdate");
        console.log(props);
        console.log(state);
        return null

    }

    render(){
        return(
            <>
            <h2>UpdatingStage</h2>
            <h3 style={{color:this.state.color}}>Counter</h3>
            <h5>{this.state.count}</h5>
            <button onClick={this.incrementAction}>Increment</button>
            {
                this.state.product!==null?
                <h6>{this.state.product.title}</h6>
                :<h6>No Product with this count</h6>
            }
            </>
        )
    }
}
export default UpdatingStageComp;