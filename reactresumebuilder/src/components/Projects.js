import React, { Component } from 'react'

class Projects extends Component {
  continue=e=>{
    e.preventDefault();
    this.props.nextStep();
  }
  back=e=>{
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {handleChange, title, link, description3} = this.props;
    return (
      <>
      <h2>Projects Information</h2>
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
          name="link"
          placeholder="link"
          value={link}
          onChange={handleChange('link')}
        />
        </label>
        <label>
          <textarea 
          type="text"
          name="description3"
          value ={description3}
          placeholder="description"
          onChange={handleChange('description3')}
        />
        </label>
        <button className="Back" onClick={this.back}>Back </button>
        <button className="Next" onClick={this.continue}>Next </button>
      </>
    )
  }
}

export default Projects;