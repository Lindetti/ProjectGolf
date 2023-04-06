import { Link } from "react-router-dom";
import { useState } from "react";
import "./CreateScoreboard.css";

const CreateScoreBoard = () => {
  const [scoreboardName, setScoreboardName] = useState("");
  const [numberOfHoles, setNumberOfHoles] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState([]);

  const handleScoreboardNameChange = (event) => {
    setScoreboardName(event.target.value);
  };

  const handleNumberOfHolesChange = (event) => {
    setNumberOfHoles(event.target.value);
  };

  const handlePlayerNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleAddPlayer = (event) => {
    event.preventDefault();
    if (playerName !== "") {
      setPlayers([...players, playerName]);
      setPlayerName("");
    }
  };

  const handleSaveScoreboard = (event) => {
    event.preventDefault();
    // Here you can save the scoreboard data to a database or other storage
    console.log("Scoreboard saved:", scoreboardName, numberOfHoles, players);
  };

  return (
    <div className="base-main">
      <div className="createScoreBoard-wrapper">
        <h2>Create Scoreboard</h2>
        <form onSubmit={handleSaveScoreboard}>
          <div className="saveDiv">
            <button type="submit">Save</button>
          </div>
          <input
            type="text"
            placeholder="Scoreboard name"
            value={scoreboardName}
            onChange={handleScoreboardNameChange}
            required
          />

          <input
            type="number"
            placeholder="Number of holes"
            value={numberOfHoles}
            onChange={handleNumberOfHolesChange}
            required
            max="18"
          />

          <div className="playersDiv">
            <input
              type="text"
              placeholder="add player"
              value={playerName}
              onChange={handlePlayerNameChange}
            />
            <button onClick={handleAddPlayer}>Add</button>
          </div>
          <div className="playersAdded">
            <ul>
              {players.map((player, index) => (
                <li key={index}>
                  Player {index + 1}: {player}
                </li>
              ))}
            </ul>
          </div>
        </form>
        {players.length > 0 && (
          <div className="startRoundDiv">
            <Link to="/HolePages" className="register">
              {" "}
              Start round{" "}
            </Link>
          </div>
        )}
        <div className="backDiv">
          <Link to="/Start"> Back </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateScoreBoard;
