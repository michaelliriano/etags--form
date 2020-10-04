import React, { Component } from 'react'

export class Confirm extends Component {
    goBack = e => {
        e.preventDefault();
        this.props.prevStep();   
    }
    success = () => {
        const mainContent = document.querySelector('.main--content');
        const success = document.querySelector('.success-alert');
        success.innerText = 'Thank you, your order is complete.';
        success.style.color = 'green';
        setTimeout(() => {
            success.innerText = '';
            window.location.reload();
        }, 3000)
        
    }
    render() {
        
        return (
            <div className="confirm--form container">
                
                 <h1>You're Almost There!</h1>
                    <form>
                        <h3>License Plate</h3>
                        <h1>{this.props.values.license}</h1>
                        <h3>Vehicle Make</h3>
                        <h1>{this.props.values.vehicle}</h1>
                    </form>
                   
                    <button onClick={this.success}>RENEW</button>
                    <h1 className="success-alert"></h1>
                    <button className="prev--step" onClick={this.goBack}>Go Back</button>
               
            </div>
        )
    }
}

export default Confirm
