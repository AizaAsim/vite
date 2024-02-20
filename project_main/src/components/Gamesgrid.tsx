import React from "react";
import useGames from "./useGames";

const Gamesgrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <div>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </div>
    </>
  );
};

export default Gamesgrid;
