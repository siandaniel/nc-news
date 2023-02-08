import { createContext, useState } from "react";

// Create a context to be shared amongst all components:
export const LoggedInUserContext = createContext();


// Create a component to hold the state that will be shared
// Value prop is what will be shared in the above context
// Import UserProvider in index.js and wrap it round App
// Destructure 'children' key from 'props' and make sure they're rendered in the return statement 
// ('children' is the App component! As UserProvider has App inside it in index.js)
export const LoggedInUserProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState({
        "username": "cooljmessy",
        "name": "Peter Messy",
        "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002"
    });

    return (
        <LoggedInUserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            {children}
        </LoggedInUserContext.Provider>
    )
}

// Now anywhere in the app component tree, we can use:
//  const userValue = useContext(UserContext)
 // ...to access the value from the UserContext (which is the value from the Provider)
 // Remember to do importing so we can use it:
//     import { UserContext } from './contexts/UserContext';
//     import { useContext } from 'react';