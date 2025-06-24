import React, { Component } from "react";

class StateCRUD extends Component{
    // state={
    //     fruits:["apple", "banana", "mango"]
    // }
    constructor(){
        super()
        this.state={
            fruits:["apple", "banana", "mango"]
        }
    }
    //componentDidMount Practice
    componentDidMount(){
        fetch("https://fakestoreapi.in/api/products")
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    addFruit=()=>{

        const newState=[...this.state.fruits,"kiwi", "grapes", "sapota","orange" ]
        console.log(newState);
        const min = 3;
        const max = 6;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomNumber);
        const randomFruit = newState[randomNumber];
        console.log(randomFruit)
        this.setState(
            {
                fruits:[...this.state.fruits,randomFruit]
            }
            ,()=>{
            console.log(this.state)
        })
    }
    clearAllFruitsAction=()=>{
        this.setState({fruits:[]},()=>{})
    }
    deleteAction=(index)=>{
        console.log(index);
        const filteredFruits=this.state.fruits.filter((value,i)=>i!==index)
        this.setState({fruits:filteredFruits},()=>{console.log(this.state.fruits)})
    }

    updateAction=(index)=>{
        console.log(index);
        const updatedFruits=this.state.fruits.map((value,i)=>{
            if(i==index){
                return "Guava"
            }
        else{
            return value
        }})
        this.setState({fruits:updatedFruits},()=>{console.log(this.state.fruits)})
    }


    render(){
        return(
            <>
            <h2>State CRUD Operations</h2>
            <button onClick={this.addFruit}>Add Fruit</button>
            <span>   </span>
            <button onClick={this.clearAllFruitsAction}>Clear All Fruits</button>
            {
                this.state.fruits.map((eachFruit,index)=>{
                    return(
                        <React.Fragment key={index}>
                            <h4>{eachFruit}</h4>
                            <button onClick={()=>this.deleteAction(index)}>Delete</button>
                            <span>   </span>
                            <button onClick={()=>this.updateAction(index)}>update</button>
                        </React.Fragment>
                    )
                })
            }
            </>
        )
    }
}
export default StateCRUD;