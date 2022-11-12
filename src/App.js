import React from 'react';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';


import './style/App.scss'
import './style/header.scss'
import './style/home.scss'




const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
