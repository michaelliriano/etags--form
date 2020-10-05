import React, { Component } from 'react';
import UserDetails from './UserDetails';
import Confirm from './Confirm';

export class MainForm extends Component {
    state={
        step: 1,
        license: '',
        vehicle: '',
    }
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1})
    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1})
    }
    handleChange = (input) => e => {
        this.setState({[input]: e.target.value.toUpperCase()})
    }
    render() {
        const { step } = this.state;
        const { license, vehicle } = this.state;
        const values = { license, vehicle }
        switch(step) {
            case 1:
                return(
                    <UserDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>
                )
            case 2:
                return <Confirm prevStep={this.prevStep} values={values} />
            default: 
        }
    }
}

export default MainForm
