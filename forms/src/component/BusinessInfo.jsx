import React, { Component } from 'react';

class BusinessInfo extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { businessName, email, phone,handleChange } = this.props;
        return(
            <>
                <h2>Business Information:</h2>
                <label> 
                   Business Name : <input  type="text" name="businessName" value={businessName} onChange={handleChange('businessName')} />
                </label>
                <label> 
                   Email ID :  <input   type="text" name="email"    value={email}       onChange={handleChange('email')} />
                </label>
                <label> 
                   Phone No. : <input  type="text" name="phone"      value={phone}    onChange={handleChange('phone')} />
                </label>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </>
        );
    }
}

export default BusinessInfo;