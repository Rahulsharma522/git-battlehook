import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom";

import './App.css';
import Popular from './Popular';
import NavBar from './NavBar';
import Battle from './Battle';
import Result from './Result';
import Footer from './Footer';

const App = () => {

  const [theme, toggleTheme] = useState('Light');
  const [player1Data, setPlayer1Data] = useState({})
  const [player2Data, setPlayer2Data] = useState({})

  const toggleIt = () => {
    if(theme === 'Light') {
        toggleTheme('Dark')
    }
    else {
        toggleTheme('Light');
    }
  }

  const handlePlayersData = (data1, data2) => {
    setPlayer1Data(data1);
    setPlayer2Data(data2);
  }

  return (
    <div className={`main ${theme}`}>
      <div className="App">
        <Router>
              <NavBar handleTheme={toggleIt} theme={theme}/>
              <Switch>
                <Route path="/" exact render={() => <Popular theme={theme==='Dark'?'bg-dark':''} />}  />
                <Route path="/battle" exact render={() => <Battle theme={theme==='Dark'?'bg-dark':''} handlePlayersData={handlePlayersData} />} />
                <Route path="/battle/result" exact render={() => <Result data1={player1Data} data2={player2Data} theme={theme==='Dark'?'bg-dark':''} />} />
              </Switch>
              <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;