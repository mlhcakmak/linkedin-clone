import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/login';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/home" element={<><Header/><Home/></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
