import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import Templa from './components/templ';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/create" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/templ" element={<Templa />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
