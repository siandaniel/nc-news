import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getTopics } from "../utils/api";
import { LoggedInUserContext } from '../contexts/LoggedInUserContext.js';

function Nav({ setUserVoteRecord }) {
  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);
  const [signedIn, setSignedIn] = useState(false);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    })
  }, [])

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
    <nav className="navbar">
      <Link to="/">Home</Link>
      <div className="dropdown">
        <button className="dropbtn">Topics
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          {topics.map((topic) => {
            return <Link to={`/articles/${topic.slug}`} key={topic.slug}>{topic.slug}</Link>
          })}
        </div>
      </div>
      <div id="logged-in-user">
        {signedIn ? <p>Hi <b>{loggedInUser.username}</b>!</p> : ""}
        {signedIn ? <img src={loggedInUser.avatar_url} alt={`Avatar for ${loggedInUser.username}`} /> : ""}
        <button onClick={signedIn ? handleLogout : handleLogin}>{signedIn ? "Log Out" : "Log In"}</button>
      </div>
    </nav>
  );
}

export default Nav;