import './App.css';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';

function App() {
  const [isLoading, setIsLoading] = useState();
  const [userVotes, setUserVotes] = useState({});

  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Routes>
        <Route path='/' element={<Articles isLoading={isLoading} setIsLoading={setIsLoading}/>}></Route>
        <Route path='/:article_id' element={<SingleArticle isLoading={isLoading} setIsLoading={setIsLoading} userVotes={userVotes} setUserVotes={setUserVotes}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
