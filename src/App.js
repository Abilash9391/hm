import RoomDashboard from './components/RoomDashboard';
import RoomDevices from './components/RoomDevices';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<><Navbar/><Home/></>} />
          <Route path="/rooms" element={<><Navbar/><RoomDashboard/></>} />
          <Route path="/room/:roomid" element={<><Navbar/><RoomDevices/></>} />
        </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
