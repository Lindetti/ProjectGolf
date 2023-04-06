import "./Register.css";
import {Link} from "react-router-dom";

const Register = () => {
    return (
 <div className="base-main">
<div className="register-wrapper">
    <form>
    <h2>Register</h2>
  <label htmlFor="username">Username</label>
  <input type="text" placeholder="username" name="username" id="username" required />
  <label htmlFor="email">Email</label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required />
    <label>Password</label>
     <input type="password" name="password" placeholder="Enter password" required="" />
     <label>Repeat Password</label>
    <input type="password" name="password" placeholder="Repeat password"required="" />
    <hr></hr>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <button type="submit" className="registerbtn">Register</button>
    <Link to="/" > Cancel </Link>
</form>
</div>
 </div>
    )
}

export default Register;