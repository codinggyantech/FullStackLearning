
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Add from './components/Add';
import Home from './components/Home';
import Edit from './components/Edit'
import PageNotFound from './components/PageNotFound';
import Nav from './components/Nav';

function App() {
  return (
   <>
   <Router>
    <Nav/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path="/add" element={<Add/>} />
    <Route path="/edit/:id" element={<Edit/>} />
    <Route path="*" element={<PageNotFound/>} />



   </Routes>
   </Router>
   
   
   </>
  );
}

export default App;
