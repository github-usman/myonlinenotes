import React, { useState } from "react";
import "./style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner"; 

const Login = (props) => {
  const host = process.env.REACT_APP_API_URL;
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false); // State to manage loading spinner
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading spinner

    const response = await fetch(`${host}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();

    setIsLoading(false); // Stop loading spinner

    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert("Logged in Successfully", "success");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  return (
    
    isLoading ? <Spinner /> :<div className="mt-3">
      <h3 className="my-3">Sign in to access your Notes.</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
           Log In
        </button>
      </form>

      <hr className="custom-center" />
      <div className="d-flex justify-content-center">
        <Link to="/signup" className="btn btn-outline-primary" role="button">
          Create new an account for Free to make Notes!
        </Link>
      </div>

      <div className="my-3">
       
          <h6
            data-bs-toggle="collapse"
            href="#collapseExample"
            aria-controls="collapseExample"
          >
           User Guide <span style={{color:"blue",cursor:"pointer"}}> Read More...</span>
          </h6>
     
        <div class="collapse" id="collapseExample">
          <h6>Logging In:</h6>
          <ul>
            <li>Enter your credentials to access your account.</li>
            <li>If you don't have an account, sign up to create one.</li>
          </ul>

          <h6>Viewing Your Notes:</h6>
          <ul>
            <li>
              After logging in, you will be directed to your notes dashboard.
            </li>
            <li>Here, you can see a list of all your saved notes.</li>
          </ul>

          <h6>Note Privacy:</h6>
          <ul>
            <li>
              Your notes are private and secure. No one else can access or view
              your notes without your permission.
            </li>
          </ul>

          <h6>Creating a New Note:</h6>
          <ul>
            <li>To create a new note, click on the "+" or "Pop up" button.</li>
            <li>
              A blank note editor will open, ready for you to start typing.
            </li>
          </ul>

          <h6>Editing Text:</h6>
          <ul>
            <li>In the note editor, you can freely type and edit your text.</li>
            <li>
              Use the familiar formatting options like bold, italicize, and
              underline to customize your text.
            </li>
          </ul>

          <h6>Highlighting Text:</h6>
          <ul>
            <li>
              To highlight text, select the portion and enclosed with "***".
            </li>
          </ul>

          <h6>Adding Bold Text:</h6>
          <ul>
            <li>To make text bold, select the desired text.</li>
            <li>and Enclosed with "%%" symbol</li>
          </ul>

          <h6>Inserting the Date:</h6>
          <ul>
            <li>
              When you create a note, the app automatically adds the current
              date.
            </li>
            <li>This helps you keep track of when the note was created.</li>
          </ul>

          <h6>Saving Your Note:</h6>
          <ul>
            <li>Your notes are automatically saved as you type.</li>
            <li>There's no need to manually save your changes.</li>
          </ul>

          <h6>Deleting Notes:</h6>
          <ul>
            <li>If you no longer need a note, you can delete it.</li>
          </ul>

          <h6>Logout and Security:</h6>
          <ul>
            <li>
              Always remember to log out when using the app on a public
              computer.
            </li>
            <li>This ensures the security of your notes and account.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
