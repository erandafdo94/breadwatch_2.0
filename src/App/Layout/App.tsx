import React from 'react';
import { NavBar } from './NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Dashboard } from '../../Features/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Container style={{marginTop: '7em'}}>
       <Dashboard/>
     </Container>
    </div>
  );
}

export default App;
