import "./Start.css";
import {Link} from "react-router-dom";

const Start = () => {
    return (
<div className="base-main">
    <div className="loggedIn-wrapper"> 
    <h2>dajcoN</h2>
    <div className="startDiv">
    <Link to="/CreateScoreboard" className="startBtns"> Create Scoreboard </Link>
    <button className="startBtns">My Scoreboards</button>
    <button className="startBtns">Friends</button>
    <Link to="/Profile" className="startBtns"> My Profile </Link>
    <Link to="/" className="startBtns"> Logout </Link>
    </div>
    </div>
</div>
    )
}

export default Start;