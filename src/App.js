import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import Match from './pages/Match';
import Contact from './pages/Contact';
import Translator from './pages/Translator';
import About from './pages/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/match' element={<Match />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/translate' element={<Translator />} />
          <Route path='/about' element={<About />} />
          
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
