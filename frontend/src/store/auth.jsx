import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(" ");
    const [services,setServices]=useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);

    const storeTokenLs = (serverToken) => {
        setToken(serverToken);
        setIsLoggedIn(!!serverToken);
        return localStorage.setItem('token', serverToken);
    }
    //logout functionality
    
   
    console.log("is logged in", isLoggedIn)
    
    const LogoutUser = () => {
        setToken(" ");
        setIsLoggedIn(false);
        return localStorage.removeItem("token");
    }
    useEffect(() => {
        setIsLoggedIn(!!token);
    }, [token]);
    //JWT AUTHENTICATION - to get the currently loggedIN user data

 const userAuthentication = async () => {
        try {
            const response = await fetch(`http://localhost:8001/api/auth/user`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.ok) {
                const data = await response.json();
                console.log("user data", data.userData)
                setUser(data.userData)
            }
        } catch (error) {
            console.error("Error fetching user data")
        }
    }
    //to fetch the services data from the database
    const getServices = async()=>{
        try {
             const response = await fetch(`http://localhost:8001/api/data/service`,{
                method: "GET",
             })
             if(response.ok)
             {
                const data = await response.json();
                console.log("service",data.msg);
                setServices(data.msg);
             }
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
            getServices();
            userAuthentication();
    }, [])

    return (<AuthContext.Provider value={{ isLoggedIn, 
    storeTokenLs, 
    LogoutUser, 
    user,
    services }} >
        {children}
    </AuthContext.Provider>)
}
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the provide")
    }
    return authContextValue;
}
