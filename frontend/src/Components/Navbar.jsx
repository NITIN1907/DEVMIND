import { NavLink } from "react-router-dom"
import "./Navbar.css"
import {useAuth} from "../store/auth"
export const Navbar=()=>{
    const {isLoggedIn}=useAuth();

    

    return(
        
        <header>
            <div className="container">
                <div className="logo-brand">
                    <NavLink to="/">DevMind</NavLink>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>

                        <li><NavLink to="/About">About</NavLink></li>

                        <li><NavLink to="/Service">Service</NavLink></li>

                        <li><NavLink to="/Contact">Contact</NavLink></li>

                        {isLoggedIn ? (
                            <li>
                                <NavLink to="/logout">Logout</NavLink>
                            </li>
                        ):(
                            <>
                            <li>
                                <NavLink to="/register">Register</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                                 </li>
                        </>
                    )}
                        

                        
                    </ul>
                </nav>
            </div>
        </header>
       
    )
}