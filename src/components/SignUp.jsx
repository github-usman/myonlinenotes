import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
       localStorage.setItem('token', json.authtoken); 
      navigate("/login");
   }else{
    alert("Invalid credentials");
   }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={onChange}
            id="name"
            name="name"
            aria-describedby="emailHelp"
            minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            onChange={onChange}
            id="email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={onChange}
            name="password"
            id="password"
            minLength={5}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
           Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={onChange}
            name="cpassword"
            id="cpassword"
            minLength={5}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
