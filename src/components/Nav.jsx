import { Link } from "react-router-dom";
import { LoggedInUserContext } from '../contexts/LoggedInUserContext.js';
import { useContext } from 'react';

function Nav() {
  const { loggedInUser } = useContext(LoggedInUserContext);

    return (
      <nav>
          <Link to="/">Home</Link>
          <p>REST OF NAV TBC</p>
          <div id="logged-in-user">
          <p>Hello <b>{loggedInUser.username}</b>!</p>
            <img src={loggedInUser.avatar_url} alt={`Avatar for ${loggedInUser.username}`}/>
          </div>
      </nav>
    );
}

export default Nav;