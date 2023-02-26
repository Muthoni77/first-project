import React, { Component } from "react";

class ClassBasedComponents extends Component{

state= {
    //write all state properties inside of this
    count : 0 //initial value of count property
}
handleClick =()=> {
    const {count}=this.state;
    //set state method
    this.setState({
        count : count + 1
    },()=>{
        console.log(this.state);

    })
}

    render(){
        console.log(this.state);
        return(
            
             <div>
                 <button onClick={this.handleClick}>Click</button>
             </div>   
            
        )
    }

};

export default ClassBasedComponents;