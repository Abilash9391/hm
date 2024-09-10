import React from "react";
import '../styles/Room.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Room(props) {
  return (
    
      <div className="room" onClick={props.onClick}>
        <div className="container">
          <div className="title">{props.name}</div>
          <div className="head">
              <div>
                {props.devicesCount} {props.devicesCount === 1 ? "Device" : "Devices"}
              </div>
            
            {props.icon ? (
              <FontAwesomeIcon icon={props.icon} className="icon" />
            ) : null}</div>
          </div>
      {/* </div> */}
    </div>
  );
}

export default Room;