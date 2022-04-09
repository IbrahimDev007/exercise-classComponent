import React from 'react';

class Eventex extends React.Component{
 constructor(props){
   super(props);
   this.state={
    name:'',
 
   };
   this.Football=this.Football.bind(this);
   
  
 }

    Football=()=>{
          alert("Great Shot!");
        }

    changeHandale=(e)=>{
          this.setState({name:e.target.value});
          console.log(e.target.value);
           }
    blurHandale=(e)=>{
      this.setState({name:e.target.value.toUpperCase()});
        
    }
    render(){
return(
<div>
    <h1>you can!!!!!</h1>
    <button onClick={this.Football}>Take the shot!</button>
    <h3>Some timime problem come naver give ups</h3>
    " On onblurfunction"
   <input type="text" onChange={this.changeHandale}  onBlur={this.blurHandale}  value={this.state.name} placeholder="Name"></input>
   <p>
  
    " On onChange function"

    </p>
</div>

);
}
}

export default Eventex;

