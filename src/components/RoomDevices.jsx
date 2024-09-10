import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/RoomDevices.css'
import Device from './Device/Device.jsx'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faFan,faLightbulb } from "@fortawesome/free-solid-svg-icons";

const RoomDevices = () => {
  const devices = [
    { roomid: 1, name: 'Fan', icon: faFan },
    { roomid: 1, name: 'Light', icon: faLightbulb },
    { roomid: 2, name: 'Fan', icon: faFan },
  ];
  const {roomid}= useParams()

  if (!devices) return null;

  const roomIdAsInt = parseInt(roomid);
  if (isNaN(roomIdAsInt)) {
    console.error(`Invalid roomid: ${roomid}`);
    return null;
  }

  return (
    <React.Fragment>
      <NavLink to="/rooms" className="backLine">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Back to Rooms</span>
      </NavLink>
      <div className="RoomDevices">
      {devices.filter((device) => device.roomid === roomIdAsInt)
          .map((device,index) => {
            return(
              <div key={index} className='column'>
            <Device  name={device.name} icon={device.icon} />
            </div>
          );}
          )}
      </div>
    </React.Fragment>
  );
};
export default RoomDevices;