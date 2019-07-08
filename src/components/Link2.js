import React, { Component } from 'react';
import Repaymentcalc from './Repaymentcalc' 

class Link2 extends Component {

    render() {
        return (
        <div className="App">
        <Repaymentcalc  getRepayment = {this.getRepayment}/>
        </div> 
        );  
    }

}

export default Link2;