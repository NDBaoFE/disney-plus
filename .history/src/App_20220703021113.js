import React from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from './components/Detail';
import Login from './components/Login';
import Movie from './components/Movie';
import Detail1 from './components/Detail1';
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
          <Route path="/detail/:id" element={<Detail/>} ></Route>
          <Route path="/detail1/:id" element={<Detail1/>} >
          <Route path="/detail1/:id" element={<Detail1/>} />
          </Route>
          <Route path="/"  element={<Home/>}>
          </Route>
          <Route path="/movie" element={<Movie/>}/>
        </Routes>

        </Router>

    </div>
  );
}

export default App;
