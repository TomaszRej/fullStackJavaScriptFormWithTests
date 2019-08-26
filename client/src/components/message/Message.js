import React from "react";
import classNames from "classnames";

function Message({ type, message, handleClick, show }) {

  const messageClass = classNames({
    "alert": true,
    "alert-danger": type === "danger",
    "alert-success": type === "success"
  });

  if (!show) {
    return null;
  }

  return (
    <div className={messageClass} role="alert">
      {message}
      <button
        onClick={handleClick}
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close">
        <span aria-hidden="true" >&times;</span>
      </button>
    </div>
  )
}


export default Message;