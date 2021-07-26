import React, { useState } from 'react';
import { Link } from "react-router-dom";

const MyAccountInfo = () => {

    const [values, setValues] = useState({
    name: "",
    password: "",
    confpassword: ""
  });

  const { name, password, confpassword} = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

    

    return (
        <div className="row">
            
            <div className="col-md-6 offset-sm-3 text-left">
                <h1 className='mt-2'>My Account Information </h1>
          <form>
            <div className="form-group">
              <label className="text-dark">Name</label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
              />
            </div>

            <div className="form-group">
              <label className="text-dark">Password</label>
              <input
                onChange={handleChange("password")}
                className="form-control"
                type="password"
                value={password}
              />
            </div>
                    
            <div className="form-group">
              <label className="text-dark">Password</label>
              <input
                onChange={handleChange("confpassword")}
                className="form-control"
                type="password"
                value={confpassword}
            />
            </div>
            <Link to='/accountinfo'>
                <button  className="btn btn-success">
                    Next
                </button>
            </Link>
          </form>
        </div>
      </div>
    )
}

export default MyAccountInfo;
