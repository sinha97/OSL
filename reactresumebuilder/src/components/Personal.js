import React, { Component } from 'react'

class Personal extends Component {
  continue=e=>{
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const {handleChange,firstName, lastName, phoneNo, email, github, website, linkedIn} = this.props;
    return (
      <>
      <h2>Personal Information</h2>
        <label>
          <input 
          type="text"
          name="firstName"
          placeholder="FirstName"
          value={firstName}
          onChange={handleChange('firstName')}
        />
        </label>
        <label>
          <input 
          type="text"
          name="lastName"
          placeholder="LastName"
          value={lastName}
          onChange={handleChange('lastName')}
        />
        </label>
        <label>
          <input 
          type="number"
          name="phoneNo"
          value ={phoneNo}
          placeholder="PhoneNo"
          onChange={handleChange('phoneNo')}
        />
        </label>
        <label>
          <input 
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange('email')}
        />
        </label>
        <label>
          <input 
          type="text"
          name="github"
          value={github}
          placeholder="Github"
          onChange={handleChange('github')}
        />
        </label>
        <label>
          <input 
          type="text"
          name="linkedIn"
          value={linkedIn}
          placeholder="LinkedIn"
          onChange={handleChange('linkedIn')}
        />
        </label>
        <button className="Next" onClick={this.continue}>Next </button>
      </>
    )
  }
}

export default Personal;