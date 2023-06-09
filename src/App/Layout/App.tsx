import React from 'react';
import { Container } from 'semantic-ui-react';
import { Dashboard } from '../../Features/Dashboard/dashboard';
import { NavBar } from './NavBar/navBar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Container style={{marginTop: '5em'}}>
       <Outlet/>
     </Container>
    </div>
  );
}

export default App;
