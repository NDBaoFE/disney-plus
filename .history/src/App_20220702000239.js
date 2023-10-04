import React from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from './components/Detail';
import Login from './components/Login';
import Movie from './components/Movie';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/detail/:id" element={<Detail/>} >
          </Route>
          <Route path="/"  element={<Home/>}>
          </Route>
          <Route path="/page" element={<Movie/>}/>
        </Routes>

        </Router>

    </div>
  );
}

export default App;
