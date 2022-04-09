import React from "react";

class Lifecycale extends React.Component{
    constructor(props){
        super(props);
        this.a=6;
        this.n= 56;
        this.state={ name:'pial'}

    }
   sum() {
         let sum=(this.a+this.n);
        return sum ;
         
    }
 

    render()
     {

    return(
        <h2>here is {this.sum()} addition state</h2>
      );} 
}

export default Lifecycale;