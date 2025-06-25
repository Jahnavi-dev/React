import { Component } from "react";
import Spinner from 'react-bootstrap/Spinner';

class SpinnerComp extends Component{
    render(){
        return(
            <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
        )
    }
}
export default SpinnerComp;