import './register.css'
import { NavLink } from 'react-router-dom';
const Register = () => {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>User Name</label>
                <input type="text" placeholder='Enter your user name...' />
                <label >Email</label>
                <input type="text" placeholder='Enter your email...' />
                <label>Password</label>
                <input type="password" placeholder='Enter your password...' />
                <button className='registerButon'>Register</button>
            </form>
            <button>
                <NavLink to="/login" className="registerLoginButon">Login</NavLink>
            </button>
        </div>);
}

export default Register;