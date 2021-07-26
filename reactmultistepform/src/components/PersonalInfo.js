import React, { useState } from 'react';
import { Link } from "react-router-dom";

const PersonalInfo = () => {

    const [formData, setFormData] = useState("");

    const {jobtitle,company,city, from,to} = formData;
    const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    return (
        <div className="row">
            
            <div className="col-md-6 offset-sm-3 text-left">
                <h1 className='mt-2'>Personal Information </h1>
          <form>
            <div className="form-group">
              <label className="text-dark">Job Title</label>
              <input
                className="form-control"
                onChange={onChange}
                type="text"
                value={jobtitle}
              />
            </div>

            <div className="form-group">
              <label className="text-dark">Company</label>
              <input
                onChange={onChange}
                className="form-control"
                type="text"
                value={company}
              />
            </div>
                    
            <div className="form-group">
              <label className="text-dark">City</label>
              <input
                onChange={onChange}
                className="form-control"
                type="text"
                value={city}
            />
                    </div>
                    <div>
                    <h4>Time Period</h4>
          <input type="date" name="from" value={from} onChange={onChange} />
                    </div>
                    
                    <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={onChange}
          />
        </div>
            <Link to='/accountInfo'>
                <button  className="btn btn-success mr-5">
                    Previous
                </button>
            </Link>
            <Link to='/savedInfo'>
                <button  className="btn btn-success ">
                    Submit
                </button>
            </Link>
          </form>
        </div>
      </div>
    )
}

export default PersonalInfo
