import axios from "axios";
import { Component } from "react";
import CardComp from "./card";

class CategoriesTask extends Component{
    constructor(){
        super()
        this.state={
            catogeries:[],
            products:[]
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData=async()=>{
        const res=await axios.get("https://fakestoreapi.in/api/products/category");
        console.log(res);
        this.setState({catogeries:res.data.categories},()=>{console.log(this.state, "inside fetchData setState")})
    }

    buttonAction=async(eachCategory)=>{
        console.log(eachCategory);
        const res=await axios.get("https://fakestoreapi.in/api/products")
        console.log(res.data.products);
        const filteredProducts=res.data.products.filter(eachProduct=>{
            if(eachProduct.category===eachCategory){
                return eachProduct
            }
        })
        console.log(filteredProducts);
        this.setState({
            products:filteredProducts
        })
   
    }

    render(){
        return(
            <>
            <h3>Filtering Products based on Category</h3>
            <div style={{display:"flex", gap:"30px", justifyContent:"center", marginTop:"20px"}}>
                {
                    this.state.catogeries.length>0?
                    this.state.catogeries.map((eachCategory, index)=>{
                        return(
                        <button key={index} 
                            style={{height:"50px", width:"150px", border:"2px solid blueviolet", backgroundColor:"white", borderRadius:"10px"}}
                            onClick={()=>this.buttonAction(eachCategory)}>{eachCategory}
                        </button>)
                    })
                    :<h5>Downloading catogeries</h5>
                }
            </div>
            <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>
                {this.state.products.length===0?
                <h5>Click any button to get products</h5>:
                this.state.products.map((eachProduct)=>{
                        return(
                            <div key={eachProduct.id} style={{width:"350px"}}>
                                <CardComp product={eachProduct}/>
                                {/* {console.log(eachProduct)} */}
                            </div>
                        )
                    })  
                }
            </div>

            </>
        )
    }
}
export default CategoriesTask;