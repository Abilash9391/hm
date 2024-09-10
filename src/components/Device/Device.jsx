// import { useState } from 'react';
import Switch from './Switch.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/Device.css'

function Device(props) {

    return (
        <div className="device">
            <div className="deviceContainer">
                <div className="title">{props.name}</div>
                <div className='head'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={props.icon} />
                    </div>
                    <div className="switch">
                        <Switch />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Device;