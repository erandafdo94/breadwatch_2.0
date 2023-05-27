import React from 'react';
import { Container } from 'semantic-ui-react';
import { NavBar } from './navBar/NavBar';
import { Dashboard } from '../../features/dashboard/Dashboard';
import './index.css';


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
