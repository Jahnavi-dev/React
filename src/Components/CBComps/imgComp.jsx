import { Component } from "react";

class ImageComp extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <img src={this.props.image} height={200} width={200}/>
        )
    }
}
export default ImageComp;