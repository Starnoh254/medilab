import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';
import { BrowserRouter as Router , Routes , Route }  from 'react-router-dom';
import Profile from './components/Profile';
import AddTests from './components/AddTests';
import LabTests from './components/LabTests';
import MyBookings from './components/MyBookings';
import AddNurses from './components/AddNurses';
import Nurses from './components/Nurses';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

const Myh1 = styled.h1`
  color: red;
`

function App() {
  return (
    <Router>
         <div className="App">
    
    {/* Removed the sidebar and top bar */}
          {/* <SideBar/>

          <TopBar/> */}
          {/* Routing will be required here */}
           <Routes>
            <Route path='/sign_in' element = {<SignIn/>}></Route>
            <Route path='/profile' element = {<Profile/>}></Route>
            <Route path='/add_tests' element = {<AddTests/>}></Route>
            <Route path='/lab_tests' element = {<LabTests/>}></Route>
            <Route path='/my_bookings' element = {<MyBookings/>}></Route>
            <Route path='/add_nurses' element = {<AddNurses/>}></Route>
            <Route path='/nurses' element = {<Nurses/>}></Route>
            <Route path='/' element = {<MainContent />}></Route>
            <Route path='/sign_up' element = {<SignUp />}></Route>
           </Routes>

        </div>
    </Router>
   
  );
}

export default App;
