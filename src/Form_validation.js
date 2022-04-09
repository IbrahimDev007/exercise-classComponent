import React from "react";
const intial={
    name:"",
    email:"",
    pass:"",
    nameerr:"",
    passerr:"",
    emailerr:"",
};
class Form_validation extends React.Component{
state=intial;
 valuvalide(){
    let nameerr;
    let passerr;
    let emailerr;
   if(!this.state.name)
   {
      nameerr='your name invalid'
   }
   if(!this.state.email.includes('@'))
   {
       emailerr='your Email invalid'
   }
   if(!this.state.pass.match(1))
   {
       passerr='your pass invalid'
   }
   if(nameerr||emailerr||passerr)
   {
       this.setState({nameerr,emailerr,passerr});
      return false;
   }
   return true;

}
//codegraper;
handalChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    
}
handalSubmit=(e)=>{
    e.preventDefault();
  const valuvalide= this.valuvalide();
   if(valuvalide){
    console.log(this.state);
    this.setState({intial});
   }

}



    render(){

        return(
               <form onSubmit={this.handalSubmit} >
               <div>
                  Name: <input
                        placeholder="name" 
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handalChange}
                   />
                   <div>{this.state.nameerr}</div>
                   <div>
                   Email: <input
                        placeholder="email" 
                        type="text"
                        name="email"
                        onChange={this.handalChange}
                        value={this.state.email}
                   />
                   </div>
                   <div>{this.state.emailerr}</div>
                   <div>
                  password: <input
                        placeholder="password" 
                        type="password"
                        name="pass"
                        onChange={this.handalChange}
                        value={this.state.pass}
                   />
                   </div>
                   <div>{this.state.passerr}</div>
               </div>
              <input type="submit" value="Submit"/>
               </form  >

        );
    }

}
export default Form_validation;