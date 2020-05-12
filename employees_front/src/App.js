import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './components/router/Router'
import NavBar from './components/navBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
