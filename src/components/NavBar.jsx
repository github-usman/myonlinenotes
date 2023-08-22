import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link,useNavigate } from "react-router-dom";

export default function NavBar(props) {
  let navigate = useNavigate();
  const handleLogout =()=>{
    localStorage.removeItem('token');
    navigate('/login');
    props.showAlert("Logged Out successfully","success");
  }
  let location = useLocation();
  useEffect(() => {}, [location]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            OnlineNotebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
           {!localStorage.getItem('token') ? <form className="d-flex" role="search">
             
              <Link to="/login" className="btn btn-outline-primary mx-1" role="button">
                Login
              </Link>
              <Link to="/signup"  className="btn btn-outline-primary mx-1" role="button">
                SignUp
              </Link>
            </form>:<button onClick={handleLogout} className="btn btn-primary">Log Out</button>}
          </div>
        </div>
      </nav>
    </div>
  );
}
