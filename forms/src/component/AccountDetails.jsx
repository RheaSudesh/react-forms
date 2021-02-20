import React, { Component } from 'react';
import currencyData from './currency.json'
class AccountDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            currencyData:[...currencyData]
        }
        // this.setCurrecyAccordingToCountry=this.setCurrecyAccordingToCountry.bind(this);
    }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    // setCurrecyAccordingToCountry= (country)=> {
    //     for(let i=0;i<5;i++){
    //         if({this.state.currencyData[i].name}==country)
    //         {
    //             this.props.currency=this.state.currencyData[i].currency;
    //         }
    //     }
    // }

    render(){
        const { country, currency, accountNo,accountType, handleChange}  = this.props;
        return(
            <>
                <h2>Bank Details</h2>
                <label>
                   Country : <select name="country"  onChange={handleChange('country')}>
                                <option value={this.state.currencyData[0].name} >{this.state.currencyData[0].name}</option>
                                <option value={this.state.currencyData[1].name} >{this.state.currencyData[1].name}</option>
                                <option value={this.state.currencyData[2].name} >{this.state.currencyData[2].name}</option>
                                <option value={this.state.currencyData[3].name} >{this.state.currencyData[3].name}</option>
                                <option value={this.state.currencyData[4].name} >{this.state.currencyData[4].name}</option>
                            </select>
                </label> <br></br>
                <label>                    
                   Currency: <input  type="text" name="currency'"  value={currency}  onChange={handleChange('currency')} />
                </label>
                <label> 
                   Account Number :  <input   type="text" name="accountNo" value={accountNo}       onChange={handleChange('accountNo')} />
                </label>
                <label> 
                   Account Type : <input  type="text" name="accountType"      value={accountType}    onChange={handleChange('accountType')} />
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

export default AccountDetails;