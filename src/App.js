import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';

const Myh1 = styled.h1`
  color: red;
`

function App() {
  return (
    <div className="App">
    
      <SideBar/>
      <TopBar/>
      {/* Routing will be required here */}
      <MainContent/>
    </div>
  );
}

export default App;
