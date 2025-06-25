import { Component } from "react";
import SpinnerComp from "./spinner";
import CardComp from "./card";
import axios from "axios";

class MountingStageComp extends Component{
    constructor(){
        super()
        this.state={
            title:"Mounting Stage",
            products:[],
            color:"red"
        }
    }
    componentDidMount(){
        // fetch("https://fakestoreapi.in/api/products")
        // .then(res=>res.json()).then(res=>{
        //     {this.setState({products:res.products})}
        //     console.log(res.products)
        // })
        // axios.get("https://fakestoreapi.in/api/products")
        // .then((res)=>{
        //     console.log(res)
        //     // console.log(res.data.products);
        //     if(res.status===200){
        //         {this.setState({products:res.data.products})}
        //     }
        // });
        this.fetchData();
        document.title=this.state.title;

    }


    fetchData=async()=>{
        try {
            const res=await axios.get("https://fakestoreapi.in/api/products")
            if(res.status===200){
                {this.setState({products:res.data.products})}
            }
            else{
                alert("something went wrong");
                console.log("something went wrong")
            }
            
        } catch (error) {
            console.log(error);
        }
    }


    static getDerivedStatefromProps(props){
        console.log("getDerivedStatefromProps", props);
        // return null
        return {
            color:props.color
        };
    }
    render(){
        return(
            <>
            <h3 style={{color:this.props.color}}>Fetching data through MountingStage </h3>
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
                {
                    this.state.products.length>0?
                    this.state.products.map((eachProduct)=>{
                        return(
                            <div key={eachProduct.id}>
                                <CardComp product={eachProduct}/>
                                {/* {console.log(eachProduct)} */}
                            </div>
                        )
                    })
                    :<SpinnerComp/>
                }
            </div>
            </>
        )
    }
}

export default MountingStageComp


