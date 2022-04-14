import logo from './logo.svg';
import './App.css';
import Header from './Shared pages/Headr/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';
import Login from './pages/Login/Login';
import SerDetials from './pages/servicedetails/SerDetials';
// import Experts from './Experts/Experts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/services' element={<Service></Service>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/service-details' element={<SerDetials></SerDetials>} ></Route>
        {/* <Route path='/Experts' element={<Experts></Experts>} ></Route> */}
      </Routes>
    </div>
  );
}

export default App;
