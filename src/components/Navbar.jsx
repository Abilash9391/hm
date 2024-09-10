import React from 'react';
import '../styles/Navbar.css'
import ThemeToggle from './ThemeToggle';
import { NavLink} from 'react-router-dom';


function Navbar(){
    return(        
        <header className="Header">
        <div className="HeaderContainer">
            <div className="AppName">
                <NavLink to="/" className="NavLink">SMART HOME</NavLink>
            </div>
          <div className="Navigation">
                <NavLink to="/rooms" className="NavLink">Rooms</NavLink>
                {/* <div className='theme'><ThemeToggle/></div> */}
          </div>
          {/* <div className="MenuBtn">
            <Button onClick={this.props.toggleSideDrawer}>
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </div> */}
        </div>
      </header>
    );
}

export default Navbar;