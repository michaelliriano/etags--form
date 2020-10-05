import React, { Component } from 'react'

export class UserDetails extends Component {
    continue = e => {
        e.preventDefault();
        const { values } = this.props;
        if(values.license === '' || values.vehicle === ''){
            const spans = e.target.children;
            spans[4].display = 'block';
            spans[7].display = 'block';
            spans[4].style.color = 'Red';
            spans[7].style.color = 'Red';
            spans[4].innerText = 'All fields are required';
            spans[7].innerText = 'All fields are required';
        setTimeout(() => {
            spans[4].innerText = ''
            spans[7].innerText = ''
        }, 2000)
        }
        else if(!(/^[^+_=/*?@#$%&()'"|â„;:{}.,`~<>}{][^\\]{2,5}$/.test(values.license))) {
            const spans = e.target.children;
            spans[4].style.color = 'Red';
            spans[4].innerText = 'License Plate must be between 3-6 characters long';
            setTimeout(() => {
                spans[4].innerText = '';
            }, 2000)
        }
        else if(values.license === 'ABC123' && values.vehicle === 'FORD' ) {
            const spans = e.target.children;
            spans[7].style.color = 'Red';
            spans[7].innerText = 'You are not within the renewal period';
            setTimeout(() => {
                spans[7].innerText = '';
            }, 5000)
            
        }else{
            this.props.nextStep();
            console.log(this.props)
        } 
    }
    render() {
        const { values, handleChange } = this.props;
        const options = [
            {
                label: "Ford",
                value: "ford"
            },
            {
                label: "Honda",
                value: "honda",
            },
            {
                label: "Toyota",
                value: "toyota"
            }
        ]
        return (
            <div class="first--renew--part container">
                <form action="" onSubmit={this.continue}>
                    <h1>Renew Your Vehicle Registration</h1>
                    <h3>Enter Your Vehicle Information</h3>
                    <label for="License"></label>
                    <input type="text" placeholder="License Plate" onChange={handleChange('license')} defaultValue={values.license}/>
                    <span></span>
                    <label for="Vehicle Make"></label>
                    <select onChange={handleChange('vehicle')} defaultValue=''>
                    <option disabled value=''>Vehicle Make</option>
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                     ))}
                    </select>
                    <span></span>
                    <button >NEXT</button>
                </form>
            </div>
 
        )
    }
}

export default UserDetails;
