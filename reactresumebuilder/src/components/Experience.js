import React, { Component } from 'react'

class Experience extends Component {
  continue=e=>{
    e.preventDefault();
    this.props.nextStep();
  }
  back=e=>{
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { handleChange,title, position, duration, description4} = this.props;
    return (
      <>
      <h2>Experience Information</h2>
        <label>
          <input 
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={handleChange('title')}
        />
        </label>
        <label>
          <input 
          type="text"
          name="position"
          placeholder="position"
          value={position}
          onChange={handleChange('position')}
        />
        </label>
        <label>
          <input 
          type="number"
          name="duration"
          value ={duration}
          placeholder="duration"
          onChange={handleChange('duration')}
        />
        </label>
        <label>
          <textarea 
          type="text"
          name="description4"
          value={description4}
          placeholder="description"
          onChange={handleChange('description4')}
        />
        </label>
        
        <button className="Back" onClick={this.back}>Back </button>
        <button className="Next" onClick={this.continue}>Next </button>
      </>
    )
  }
}

export default Experience;