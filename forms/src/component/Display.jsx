import React, { Component } from 'react';

class Display extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    printBasedOnTypeOfAccount(type){
        if(type==="Personal")
        {
            return(
                <>
                    <h2>Display Personal Details:</h2>
                    First Name: <b>{this.props.firstName}</b><br />
                    Last Name: <b>{this.props.lastName}</b><br />
                    Country: <b>{this.props.country}</b><br />
                    Account Number: <b>{this.props.accountNo}</b><br />
                    City: <b>{this.props.city}</b><br />
                    Address: <b>{this.props.address}</b><br />
                    <button className="Back" onClick={this.back}>
                        « Back
                    </button>
                </>
            );
        }
        else{
            return(
                <>
                    <h2>Display Business Details:</h2>
                    Business Name: <b>{this.props.businessName}</b><br />
                    Country: <b>{this.props.country}</b><br />
                    Account Number: <b>{this.props.accountNo}</b><br />
                    City: <b>{this.props.city}</b><br />
                    Address: <b>{this.props.address}</b><br />
                    <button className="Back" onClick={this.back}>
                        « Back
                    </button>
                </>
            );

        }
    }
    render(){
        const { type} = this.props;
        return(
            <>
            {this.printBasedOnTypeOfAccount(type)}
            </>
        );
    }
}

export default Display;