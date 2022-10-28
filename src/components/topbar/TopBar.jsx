import './topbar.css';
import img from '../../images/topImg.jpg';
import { NavLink } from "react-router-dom";
export default function TopBar() {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    {/* <NavLink to="/" className="topListItem">HOME</NavLink> */}
                    <NavLink to="/" className="topListItem">HOME</NavLink>
                    <NavLink to="/write" className="topListItem">WRITE</NavLink>
                    <NavLink to="/about" className="topListItem">ABOUT</NavLink>
                    <NavLink to="/logout" className="topListItem">
                        {user && "LOUGOUT"}
                    </NavLink>

                    {/* <NavLink to="/settings" className="topListItem">Settings</NavLink>
                <NavLink to="/write" className="topListItem">WRITE</NavLink>
                <NavLink to="/write" className="topListItem">WRITE</NavLink> */}

                    {/* <li className="topListItem">HOME</li> */}
                    {/* <li className="topListItem">ABOUT</li> */}
                    <li className="topListItem">CONTACT</li>
                    {/* <li className="topListItem">WRITE</li> */}
                    {/* <li className="topListItem">LOGOUT</li> */}
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img src={img} alt="" className="topImage" />
                ) : (
                    <div>
                        <NavLink to="/login" className="topListItem">LOGIN</NavLink>
                        <NavLink to="/register" className="topListItem">REGISTER</NavLink>
                    </div>
                )}
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>

            </div>
        </div>
    )
}
