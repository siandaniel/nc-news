import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTopics } from "../utils/api";

function Nav() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // setIsLoading(true);
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
      // setIsLoading(false);
    })
  }, [])

    return (
      <nav>
          <Link to="/">Home</Link>
          {topics.map((topic) => {
            return <Link to={`/${topic.slug}`} key={topic.slug}>{topic.slug}</Link>
          })}
      </nav>
    );
}

export default Nav;