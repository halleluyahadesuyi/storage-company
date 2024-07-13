import { useState } from 'react';
import { Navbar } from './components/Navbar'
import { Home } from './components/Home';
import { Ratings } from './components/Ratings';
import './App.css'

function App() {
  // const [isNavOpen, setIsNavOpen] = useState(false);

  // const toggleNavbar = () => {
  //   setIsNavOpen(!isNavOpen);
  // };

  return (
    <>
      <Home />
      {/* <Navbar toggleNavbar={toggleNavbar} /> */}
      <Ratings />
    </>
  )
}

export default App
