import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import PageNotFound from './components/PageNotFound';
import Contact from './components/Contact';
function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>

      
<Route path="/"   element ={<Home /> }   />
<Route path='/about' element={<About/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='*' element ={<PageNotFound/>} />
 </Routes>
    </Router>
   
    </>
  );
}

export default App;
