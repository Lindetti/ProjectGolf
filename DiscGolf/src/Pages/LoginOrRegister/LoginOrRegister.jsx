import {Link} from "react-router-dom";
import  "./LoginOrRegister.css";
const LoginOrRegister = () => {
    return (
      <div className="base-main">
      <div className="start-wrapper"> 
      <div className="register-wrapper">
      <h2>Discgolf App</h2>
    <form>
  <label htmlFor="username">Username</label>
  <input type="text" placeholder="username" name="username" id="username" required />
    <label>Password</label>
     <input type="password" name="password" placeholder="Enter password" required="" />
     <div className="buttons"> 
    <Link to="/Start" className="login" type="submit"> Login </Link>
    <Link to="/Register" className="register"> Register </Link>
    </div>
</form>
</div>
        </div>
      </div>
    )
}

export default LoginOrRegister;