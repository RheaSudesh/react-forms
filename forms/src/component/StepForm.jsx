import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import AccountDetails from './AccountDetails';
import LocationDetails from './LocationDetails';
import BusinessInfo from './BusinessInfo';
import Display from './Display';

export class StepForm extends Component {
    state = {
        step: 1,

        // step 1
        firstName: '',
        lastName: '',
        email: '',
        phone:'',
        // conditional react for 2 types of accounts
        type :'',
        businessName:'',

        // step 2
        country: '',
        currency: '',
        accountNo: '',
        accountType:'',

        //step 3
        city:'',
        postCode:'',
        address:''

    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    showStep = () => {
        const { step,type, firstName, lastName,email,phone,businessName} = this.state;
        const {country, currency, accountNo,accountType} =this.state;
        const {city,postCode,address} =this.state;

        if(step === 1)
        {
            if(type==="Personal")
            {
                return (<PersonalInfo 
                    nextStep = {this.nextStep} 
                    handleChange = {this.handleChange} 
                    firstName={firstName} 
                    lastName={lastName}
                    email={email}
                    phone={phone}
                />);
            }
            else if(type==="Business")
            {
                return (<BusinessInfo 
                    nextStep = {this.nextStep} 
                    handleChange = {this.handleChange} 
                    businessName={businessName} 
                    email={email}
                    phone={phone}
                />);
            }

        }
        if(step === 2)
            return (<AccountDetails
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                country={country} 
                currency={currency}
                accountNo={accountNo}
                accountType={accountType}
            />);
        if(step === 3)
            return (<LocationDetails
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                city={city}
                postCode={postCode}
                address={address}

            />);    
        if(step === 4)
            return (<Display 
                firstName={firstName} 
                lastName={lastName}
                businessName={businessName}
                type={type}
                handleChange = {this.handleChange} 
                country={country} 
                accountNo={accountNo}
                city={city}
                address={address}
                prevStep = {this.prevStep}
            />);
    }

    render(){
        const { step} = this.state;

        return(
            <>
                <h2>Step {step} of 4.</h2>
                <p>Account Type: </p>
                <select onChange={this.handleChange('type')}>
                    <option value="Personal" >Personal</option>
                    <option value="Business" >Business</option>
                </select>
                {this.showStep()}
            </>
        );
    }
}

export default StepForm;