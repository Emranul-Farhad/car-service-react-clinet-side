import logo from './logo.svg';
import './App.css';
import Header from './Shared pages/Headr/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/services' element={<Service></Service>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
      </Routes>
    </div>
  );
}

export default App;