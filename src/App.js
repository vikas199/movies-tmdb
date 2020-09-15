import React, { useState } from 'react';
import './App.css';
import Header from './Header'
import Nav from './Nav'
import Results from './Results'
import Request from "./Request"
function App() {
  const [selectedTab, setSelectedTab] = useState(Request.fetchTrending)
  return (
    <div className="app">
      <Header />
      <Nav setSelectedTab={setSelectedTab}/>
      <Results selectedTab={selectedTab}/>
    </div>
  );
}

export default App;
