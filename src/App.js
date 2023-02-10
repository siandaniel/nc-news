import './App.css';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import ErrorPage from './components/ErrorPage';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';

function App() {
  const [isLoading, setIsLoading] = useState();
  const [userVoteRecord, setUserVoteRecord] = useState({});
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <Nav setUserVoteRecord={setUserVoteRecord}/>
      <Header/>
      <Routes>
        <Route path="*" element={<ErrorPage error={"Sorry, this page does not exist"}/>} />
        <Route path='/' element={<Articles isLoading={isLoading} setIsLoading={setIsLoading} error={error} setError={setError}/>}></Route>
        <Route path='/articles' element={<Articles isLoading={isLoading} setIsLoading={setIsLoading} error={error} setError={setError}/>}></Route>
        <Route path='/articles/:topic' element={<Articles isLoading={isLoading} setIsLoading={setIsLoading} error={error} setError={setError}/>}></Route>
        <Route path='/articles/article/:article_id' element={<SingleArticle isLoading={isLoading} setIsLoading={setIsLoading} userVoteRecord={userVoteRecord} setUserVoteRecord={setUserVoteRecord} error={error} setError={setError}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
