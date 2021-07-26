import React, { useState } from 'react';
import { Link } from "react-router-dom";

const AccountInfo = () => {
    const [formData, setFormData] = useState("");

    const { fos, university,from ,to} = formData;

    const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    return (
        <div className="row">
            
            <div className="col-md-6 offset-sm-3 text-left">
                <h1 className='mt-2'>Educational Information </h1>
                <form>
            <div className="form-group">
              <label className="text-dark mr-3">Education level</label>
                <select name="status"  onChange={onChange}>
                    <option>* Select Professional Status</option>
                    <option value="Developer">Higher School or equivalent</option>
                    <option value="Junior Developer">Diploma</option>
                    <option value="Senior Developer">Bachelor's'</option>
                    <option value="Manager">Masters</option>
                    <option value="Student or Learning">Doctrate</option>
                </select>
                    </div>
            <div className="form-group">
              <label className="text-dark">Field of study</label>
              <input
                className="form-control"
                onChange={onChange}
                type="text"
                value={fos}
              />
                    </div>
                    
                    <div className="form-group">
              <label className="text-dark">University</label>
              <input
                className="form-control"
                onChange={onChange}
                type="text"
                value={university}
              />
                    </div>
                    <div className="form-group">
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
            // disabled={current}
          />
        </div>

            <Link to='/'>
                <button  className="btn btn-success mr-5">
                    Previous
                </button>
            </Link>
            <Link to='/personalInfo'>
                <button  className="btn btn-success ">
                    Next
                </button>
            </Link>
          </form>
            </div>
        </div>
    )
}

export default AccountInfo

