import { createContext, useState } from "react";

export const LoggedInUserContext = createContext();

export const LoggedInUserProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(		{
        "username": "jessjelly",
        "name": "Jess Jelly",
        "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
        "votes": {}
    });

    return (
        <LoggedInUserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            {children}
        </LoggedInUserContext.Provider>
    )
}