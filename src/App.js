import React from 'react';
import logo from './logo.svg';
// import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import Post from './components/Post'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/aboutus" component={Aboutus} /> 
        <Route path="/:post_id" component={Post} />
      </div>
    </BrowserRouter>
  );
}

export default App;
