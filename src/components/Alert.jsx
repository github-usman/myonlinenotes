import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function Alert() {
  return (
    <div>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <FontAwesomeIcon  icon={faBell} shake size="xl" />
        <strong className="ms-3">Welcome!</strong> to online Notebook you can write your ynote.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}

export default Alert;
