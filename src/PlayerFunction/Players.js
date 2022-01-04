import React from 'react';
// import { useState, useEffect } from 'react';
// import { fetchPlayers } from '../Views/Players';
// import { Link } from 'react-router-dom';

export default function Players() {
  //   const [players, setPlayers] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchPlayers();
  //     setPlayers(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <h1>Here are the players</h1>
      {/* 
      {players.map((player) => (
        <Link to={`/players/${player.id}`} key={player.id}></Link>
      ))} */}
    </div>
  );
}
