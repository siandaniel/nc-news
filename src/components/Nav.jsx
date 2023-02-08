import { Link } from "react-router-dom";
import { LoggedInUserContext } from '../contexts/LoggedInUserContext.js';
import { useContext, useState } from 'react';

function Nav({setUserVoteRecord}) {
  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);
  const [signedIn, setSignedIn] = useState(false);

  const handleLogin = (e) => {
    setSignedIn(true);
    setLoggedInUser({
      "username": "jessjelly",
      "name": "Jess Jelly",
      "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
      "votes": {}
  })
    setUserVoteRecord({});
  }

  const handleLogout = (e) => {
    setSignedIn(false)
    setLoggedInUser({
      "username": "none",
      "name": "none",
      "avatar_url": "none",
      "votes": {}
  })
    setUserVoteRecord({});
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <p>REST OF NAV TBC</p>
      <div id="logged-in-user">
        {signedIn ? <p>Hello <b>{loggedInUser.username}</b>!</p> : ""}
        {signedIn ? <img src={loggedInUser.avatar_url} alt={`Avatar for ${loggedInUser.username}`} /> : ""}
        <button onClick={signedIn ? handleLogout : handleLogin}>{signedIn ? "Log Out" : "Log In"}</button>
      </div>
    </nav>
  );
}

export default Nav;