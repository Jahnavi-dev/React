import { Component } from "react";
// import "./mainHeading.css"
import moduleStyles from "./mainHeading.module.css"

// const inlineStyle1={backgroundColor:"black",color:"white"}
// const inlineStyle2={backgroundColor:"yellow",color:"red"}
// const inlineStyle3={backgroundColor:"green",color:"blue"}

class MainHeadingComp extends Component{
    
    render(){
        return(
            <>
            {/* <h1 style={inlineStyle1}>Hi</h1>
            <h2 style={inlineStyle2}>Hello</h2>
            <h3 style={inlineStyle3}>Namaste</h3> */}
            <h1 className="mainHead">Hi</h1>
            <h2 className="mainHead">Hello</h2>
            <h3 className="mainHead">Namaste</h3>
            <button className={moduleStyles.moduleStylingButton}>Module Styling</button>
            </>
        )
    }
}

export default MainHeadingComp;