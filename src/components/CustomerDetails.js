import React, { Component } from "react";

class CustomerDetails extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      toggle: false,
      summaryToggle: false
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formContinue = this.formContinue.bind(this);
}

onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
}

formContinue(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
}

handleChangeEnableOrderSummary = () => {
  this.setState({
      summaryToggle: true
  })
}

render() {
    return (
       <form onSubmit={this.formContinue}> 
        
          <span></span>
          <div >
          {/* <input  */}
                
                <textarea className="style-name-text"
                
                type="text" 
                placeholder="Name" 
                required/>
             
                </div>
                
            <div>
               
    	        <textarea className="style-pincode-text"
                type="number" 
                placeholder="    Pincode" 
                maxLength='6' 
                pattern="^[1-9][0-9]{5}$"  
                required />
                <textarea className="style-locality-text"
                type="text" 
                placeholder="    Locality" 
                required />
            </div>
            <div>
                <textarea className="style-address-text"
                type="text" 
                placeholder="  Address" 
            />
        </div>
        
        <div>
          <span> </span>
    	  <textarea className="style-pincode-text"
          type="text" 
          placeholder="    City/Town" 
          required />
        <textarea className="style-locality-text"
          type="text" 
          placeholder="   Landmark" 
          required />
        </div>

        <div className="radio">
         <span></span>
        <label style={{ marginRight:'50px', marginLeft:'69px' }}>
          <input 
            type="radio"
            value="Home"
            checked={this.state.selectedOption === "Home"}
            onChange={this.onValueChange}
          />
          Home
        </label>
      
        <label style={{ marginRight:'50px'}}>
          <input
            type="radio"
            value="Work"
            checked={this.state.selectedOption === "Work"}
            onChange={this.onValueChange}
          />
          Work
        </label>
      
        <label>
          <input
            type="radio"
            value="Other"
            checked={this.state.selectedOption === "Other"}
            onChange={this.onValueChange}
          />
          Other
        </label>
      
      <div>
          <span></span>
          <div style={{marginLeft:'120px', marginBottom:'20px' }}>
            Selected option is : {this.state.selectedOption} 
            
           
           
            
          </div>
      </div>
      </div> 
     </form>
     );
  }
}

export default CustomerDetails