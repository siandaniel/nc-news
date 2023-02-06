import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';

function App() {
  return (
    <div className="App">
            <Nav/>
            <Header/>
      <Routes>
        <Route path='/articles' element={<Articles/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
