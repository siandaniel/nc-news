import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Routes>
        <Route path='/' element={<Articles/>}></Route>
        <Route path='/:article_id' element={<Comments/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
