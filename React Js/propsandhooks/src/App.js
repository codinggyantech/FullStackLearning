
import './App.css';
import NavBar from './components/NavBar';
import MainComponent from './components/MainComponent';







function App() {
  const d = "MY data"
  return (
    <div className="App">
      <NavBar d  = {d}/>
      <MainComponent d = {d}/>
     
    </div>
  );
}

export default App;
