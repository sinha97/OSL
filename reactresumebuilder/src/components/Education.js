import React, { Component } from 'react'

class Education extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { handleChange, college, school, dateFrom, dateTill, dateFrom2, dateTill2, qualification, qualification2, description, description2 } = this.props;
    return (
      <>
          <h2>Education Information</h2>
        <div className="flex-container">
          <div className="flex-child one">
            <label>
              <input
                type="text"
                name="college"
                value={college}
                placeholder="College"
                onChange={handleChange('college')}
              />
            </label>
            <label>
              <input
                type="date"
                name="datefrom"
                value={dateFrom}
                placeholder="Datefrom"
                onChange={handleChange('dateFrom')}
              />
            </label>
            <label>
              <input
                type="date"
                name="dateTill"
                value={dateTill}
                placeholder="DateTill"
                onChange={handleChange('dateTill')}
              />
            </label>
            <label>
              <input
                type="text"
                name="qualification"
                value={qualification}
                placeholder="Qualification"
                onChange={handleChange('qualification')}
              />
            </label>
            <label>
              <textarea
                type="text"
                name="description"
                value={description}
                placeholder="Description"
                onChange={handleChange('description')}
              />
            </label>
          </div>

          <div className="flex-child two">

            <label>
              <input
                type="text"
                name="school"
                value={school}
                placeholder="School"
                onChange={handleChange('school')}
              />
            </label>
            <label>
              <input
                type="date"
                name="datefrom"
                value={dateFrom2}
                placeholder="Datefrom"
                onChange={handleChange('dateFrom2')}
              />
            </label>
            <label>
              <input
                type="date"
                name="dateTill"
                value={dateTill2}
                placeholder="DateTill"
                onChange={handleChange('dateTill2')}
              />
            </label>
            <label>
              <input
                type="text"
                name="qualification"
                value={qualification2}
                placeholder="Qualification"
                onChange={handleChange('qualification2')}
              />
            </label>
            <label>
              <textarea
                type="text"
                name="description"
                value={description2}
                placeholder="Description"
                onChange={handleChange('description2')}
              />
            </label>
          </div>

        </div>
          <button className="Back" onClick={this.back}>Back</button>
          <button className="Next" onClick={this.continue}>Next</button>
          </>
        )
  }
}

export default Education;