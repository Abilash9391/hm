import React from "react";
import Room from './Room'
import '../styles/RoomDashboard.scss'
import { faBed, faCouch, faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

function RoomDashboard(){
    const rooms=[
        {id:1, name:"BedRoom", icon:faBed},
        {id:2, name:"Living Room", icon:faCouch},
        {id:4, name:"Kitchen", icon:faKitchenSet}
    ]
    const navigate=useNavigate()
    const handleClick=(roomid)=>{
        navigate(`/room/${roomid}`)
    }
    return(
        // <div className="container">
            <div className="row">
                    {rooms.map(room=>{
                        return(
                                <div className="column">
                                    <Room
                                        id={room.id}
                                        key={room.id}
                                        name={room.name}
                                        icon={room.icon}
                                        onClick={()=>handleClick(room.id)}
                                    />
                                </div>
                        )
                    })}
            </div>
        // </div>
    );
}
export default RoomDashboard;