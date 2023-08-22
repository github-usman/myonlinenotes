import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function Alert(props) {
 
  const capitalize = (word) => {
    if(word === "danger"){
        word = "Error!"
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{height:'50px'}}>
      
      {props.alert && (
        <div className={`alert alert-${props.alert.type} `} role="alert">
          <FontAwesomeIcon  className="me-2" icon={faBell} shake size="xl" />
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
