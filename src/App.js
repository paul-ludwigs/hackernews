import logo from './logo.svg';
import './App.css';
import Articles from './components/Articles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hackernews</h1>
      </header>
      <Articles />
    </div>
  );
}

export default App;
