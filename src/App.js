import './App.css';
import './components/Navbar.css';
import './components/Login.css';
import './components/Register.css';
import './components/TodayDeals.css';
import './components/ShopByCategory.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import TodayDeals from './components/TodayDeals';
import ShopByCategory from './components/ShopByCategory';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path = "/" element = {<><Register/></>}/>
      <Route exact path = "/login" element = {<Login/>}/>
      <Route exact path = "/today" element = {<TodayDeals/>}/>
      <Route exact path = "/shop" element = {<ShopByCategory/>}/>
    </Routes>

    </Router>

    
    </>
  );
}

export default App;