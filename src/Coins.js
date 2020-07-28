import React from 'react';

const Coins = data => {
  const coin = data.data
  return (
    <div className="card col-6">
      <div>
        <img src={coin.imageSmall} className="card-img-top" alt={coin.name} />
      </div>
      <div className="card-body">
        <p className="card-text">{coin.name}</p>
        <p className="card-text">{coin.minerFee}</p>
      </div>
    </div>
  )
}

export default Coins