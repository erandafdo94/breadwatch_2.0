import React from 'react';
import { Container } from 'semantic-ui-react';
import { Dashboard } from '../../Features/Dashboard/dashboard';
import { NavBar } from './NavBar/navBar';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Container style={{marginTop: '5em'}}>
       <Dashboard/>
     </Container>
    </div>
  );
}

export default App;
