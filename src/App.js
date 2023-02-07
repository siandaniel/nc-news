import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Routes>
        <Route path='/' element={<Articles/>}></Route>
        <Route path='/:article_id' element={<SingleArticle/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
