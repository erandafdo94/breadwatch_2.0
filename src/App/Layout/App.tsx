import React from 'react';
import { Container } from 'semantic-ui-react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar/navBar';


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
