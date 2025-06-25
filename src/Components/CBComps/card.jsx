import { Component } from "react";
import ImageComp from "./imgComp";

class CardComp extends Component{
     constructor(props){
        super(props)
    }

    render(){
        console.log("inside CardComp")
        console.log(this.props.product)
        return(
            <>
            <ImageComp image={this.props.product.image}/>
            <h4>{this.props.product.title}</h4>
            <h5>{this.props.product.description}</h5>
            </>
        )
    }
}
export default CardComp;