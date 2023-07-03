import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import { action, originals ,comedy,trending,romance,documentary,stunt,horror} from './Constants/urls'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <RowPost url = {originals} title='Netflix Originals'/>
        <RowPost url = {trending} title='Trending now' isSmall/>
        <RowPost url = {action} title='Action' isSmall/>
        <RowPost url = {comedy} title='comedy' isSmall/>
        <RowPost url = {horror} title='Horror' isSmall/>
        <RowPost url = {romance} title='Romance' isSmall/>
        <RowPost url = {stunt} title='Stunt' isSmall/>
        <RowPost url = {documentary} title='Documentary' isSmall/>
    </div>
  );
}

export default App;
