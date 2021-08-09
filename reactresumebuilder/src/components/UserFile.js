import React, { Component } from 'react'
import Personal from './Personal';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';
import Extra from './Extra';
import Template from './Template';

class UserFile extends Component {
  state = {
    step: 1,

    //step 1 personal
    firstName: "",
    lastName: '',
    email: '',
    phoneNo: '',
    github: '',
    linkedIn: '',

    // step 2 education
    college: '',
    dateFrom: '',
    dateTill: '',
    qualification: '',
    description: '',

    school: '',
    dateFrom2: '',
    dateTill2: '',
    qualification2: '',
    description2: '',

    // step 3 projects
    title: '',
    link: '',
    description3: '',

    // step 4 experience
    institute: '',
    position: '',
    duration: '',
    description4: '',

    // step 5 extra 
    skill1: '',
    skill2: '',
    skill3: '',
    interest1: '',
    interest2: '',
    interest3: ''
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  }

  showStep = () => {
    const { step, firstName, lastName, phoneNo, email, github, linkedIn, college, school, dateFrom, dateTill, dateFrom2, dateTill2, qualification, qualification2, description, description2, title, link, description3, institute, position, duration, description4, skill1, skill2, skill3, interest1, interest2, interest3 } = this.state;

    if (step === 1) {
      return (
        <Personal
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          firstName={firstName}
          lastName={lastName}
          phoneNo={phoneNo}
          email={email}
          github={github}
          linkedIn={linkedIn}
        />);
    }
    if (step === 2) {
      return (
        <Education
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          college={college}
          school={school}
          dateFrom={dateFrom}
          dateTill={dateTill}
          dateFrom2={dateFrom2}
          dateTill2={dateTill2}
          qualification={qualification}
          description={description}
          qualification2={qualification2}
          description2={description2}
        />);
    }
    if (step === 3) {
      return (
        <Projects
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          title={title}
          link={link}
          description3={description3}
        />);
    }
    if (step === 4) {
      return (
        <Experience
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          institute={institute}
          position={position}
          duration={duration}
          description4={description4}
        />);
    }
    if (step === 5) {
      return (
        <Extra
        handleChange={this.handleChange}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          skill1={skill1}
          skill2={skill2}
          skill3={skill3}
          interest1={interest1}
          interest2={interest2}
          interest3={interest3}
        />);
    }
    if (step === 6) {
      return (
        <Template
          firstName={firstName}
          lastName={lastName}
          phoneNo={phoneNo}
          email={email}
          github={github}
          linkedIn={linkedIn}
          college={college}
          school={school}
          dateFrom={dateFrom}
          dateTill={dateTill}
          dateFrom2={dateFrom2}
          dateTill2={dateTill2}
          qualification={qualification}
          description={description}
          qualification2={qualification2}
          description2={description2}
          title={title}
          link={link}
          description3={description3}
          institute={institute}
          position={position}
          duration={duration}
          description4={description4}
          skill1={skill1}
          skill2={skill2}
          skill3={skill3}
          interest1={interest1}
          interest2={interest2}
          interest3={interest3}
        />
      )
    }

  };


  render() {
    const { step } = this.state;
    return (
      <>
        <h2>{this.showStep()}</h2>
      </>
    )
  }
}

export default UserFile;