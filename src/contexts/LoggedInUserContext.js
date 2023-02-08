import { createContext, useState } from "react";

export const LoggedInUserContext = createContext();

export const LoggedInUserProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(		{
      "username": "none",
      "name": "none",
      "avatar_url": "none",
      "votes": {}
    });

    return (
        <LoggedInUserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            {children}
        </LoggedInUserContext.Provider>
    )
}