import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Coins from './Coins'

function App() {
  const [coins, setCoins] = useState({})
  
  useEffect(() => {
    (async () => {
      let ajax = await fetch("https://shapeshift.io/getcoins");
      let data = await ajax.json();
      setCoins(data);
    })();
  }, []);

  let keys = [];
  if (coins) {
    keys = Object.keys(coins);
  }
  return (
    <div className="App container">
      <div className="row">
        <div className='coins-collection col-6 row'>
          {keys && keys.map(key => {
            return <Coins key={coins[key].symbol} data={coins[key]}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
