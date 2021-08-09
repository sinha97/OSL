import React, { Component } from 'react';


class Template extends Component {

  render() {
    const { firstName, lastName, phoneNo, email, github, linkedIn, college, school, dateFrom, dateTill, dateFrom2, dateTill2, qualification, qualification2, description, description2, title, link, description3, institute, position, duration, description4, skill1, skill2, skill3, interest1, interest2, interest3 } = this.props;

    return (
      <div>

        <div className="float-child">
          <img src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg" alt="avatar" class="sidebar_avatar" />
          <div className="sidebar__name"><b>{firstName} {lastName}</b></div>
          <div className="sidebar__phone"><b>{phoneNo}</b></div>
          <figure className="sidebar__social-icons">
            <a href=""><img src="https://cdn.icon-icons.com/icons2/1182/PNG/512/1490129331-rounded07_82197.png" alt="email" className="sidebar__icon" />{email}</a>
            <a href=""><img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github" className="sidebar__icon" />{github}</a>
            <a href=""><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" alt="linkedIn" className="sidebar__icon" />{linkedIn}</a>
          </figure>
        </div><hr></hr>



        <h4 className="resume-card__heading">
          Education Details
        </h4>
        <div class="flex-container">
          <div class="flex-child one">
            <div className="resume-card__body ">
              College name: {college}<br></br>
              From: {dateFrom} &nbsp;
              Till:{dateTill}<br></br>
              Qualification: {qualification}<br></br>
              Description: {description}
            </div>
          </div>
          <br></br> <br></br>

          <div class="flex-child two resume-card__body">
            School name:{school}<br></br>
            From: {dateFrom2}&nbsp;
            Till: {dateTill2}<br></br>
            Qualification: {qualification2}<br></br>
            Description: {description2}
          </div>
        </div>
        <hr></hr>

        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">
            Projects Developed
          </h4>
          <div className="resume-card__body ">
            Title: {title}<br></br>
            <a href="">Link: {link}</a>
            <br></br>
            Description: {description3}<hr></hr>
          </div>
        </div>

        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">
            Experience Details
          </h4>
          <div className="resume-card__body ">
            Institute: {institute}<br></br>
            Position: {position}<br></br>
            Duration: {duration}<br></br>
            Description: {description4}<hr></hr>
          </div>
        </div>

        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">
            Extra Details
          </h4>
          <div className="resume-card__body ">
            Skills: {skill1} &nbsp;
            {skill2} &nbsp;
            {skill3}
            <br></br><br></br>
            Interests:{interest1}&nbsp;
            {interest2}&nbsp;
            {interest3}<hr></hr>
          </div>
        </div>
      </div>

    )
  }
}

export default Template;