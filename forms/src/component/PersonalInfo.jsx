import React, { Component } from 'react';

class PersonalInfo extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { firstName, lastName, email, phone, handleChange } = this.props;
        return(
            <>
                <h2>Personal Information:</h2>
                <label> 
                   First Name : <input  type="text" name="firstName" value={firstName} onChange={handleChange('firstName')} />
                </label>
                <label> 
                   Last Name: <input  type="text" name="lastName"  value={lastName}    onChange={handleChange('lastName')} />
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

export default PersonalInfo;