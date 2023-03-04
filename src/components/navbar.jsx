import { Link } from "react-router-dom";
import "../App.css"

export const Navbar = ()=>{
    return(
        <div className="myNavbar">
            <div>
                <h3>RealE</h3>
            </div>
            <div className="theLinks">
                <Link to="/Home">Home</Link>
                <Link to="/Buy">Buy</Link>
                <Link to="/Rent">Rent</Link>
                <Link to="/Lease">Lease</Link>
            </div>
            <div className="theAuths">
                <Link to="/Login" className="authLink">Login</Link>
                <Link to="/Signup" className="authLink">Signup</Link>
            </div>
        </div>
    )
}