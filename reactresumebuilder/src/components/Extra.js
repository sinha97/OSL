import React, { Component } from 'react'

class Extra extends Component {
  continue=e=>{
    e.preventDefault();
    this.props.nextStep();
  }
  back=e=>{
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {handleChange,skill1, skill2, skill3, interest1, interest2, interest3} = this.props;
    return (
      <>
      <h2>Extra Information</h2>
        <label>
          <input 
          type="text"
          name="skill1"
          placeholder="skill2"
          value={skill1}
          onChange={handleChange('skill1')}
        />
        </label>
        <label>
          <input 
          type="text"
          name="skill2"
          placeholder="skill2"
          value={skill2}
          onChange={handleChange('skill2')}
        />
        </label>
        <label>
          <input 
          type="text"
          name="skill3"
          value ={skill3}
          placeholder="skill3"
          onChange={handleChange('skill3')}
        />
        </label>
        <label>
          <input 
          type="text"
          name="interest1"
          value={interest1}
          placeholder="interest1"
          onChange={handleChange('interest1')}
        />
        </label>
        <label>
          <input 
          type="text"
          name="interest2"
          value={interest2}
          placeholder="interest2"
          onChange={handleChange('interest2')}
        />
        </label>
        <label>
          <input 
          type="text"
          name="interest3"
          value={interest3}
          placeholder="interest3"
          onChange={handleChange('interest3')}
        />
        </label>
        <button className="Back" onClick={this.back}>  Back</button>
        <button className="Next" onClick={this.continue}>Generate Resume </button>
      </>
    )
  }
}

export default Extra;