import React, { Component } from 'react'

export default class LocationDeatils extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { city, postCode, address,handleChange}  = this.props;
        return(
            <>
                <h2>Location Details</h2>
                <label> 
                   City : <input  type="text" name="city" value={city} onChange={handleChange('city')} />
                </label>
                <label> 
                   Post Code: <input  type="text" name="postCode"  value={postCode}    onChange={handleChange('postCode')} />
                </label>
                <label> 
                   Address :  <input   type="text" name="address" value={address}       onChange={handleChange('address')} />
                </label>
               
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </>
        );
    }
}
