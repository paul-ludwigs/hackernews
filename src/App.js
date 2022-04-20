import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Articles from './components/Articles';
import Search from './components/Search';

function App() {

  const [searchValue, setSearchValue] = useState("new");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hackernews</h1>
      </header>
      <Search setSearchValue={setSearchValue} />
      <Articles searchValue={searchValue} />
      

    </div>
  );
}

export default App;
