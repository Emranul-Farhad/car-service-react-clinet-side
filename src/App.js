import logo from './logo.svg';
import './App.css';
import Header from './Shared pages/Headr/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';
import Login from './pages/Login/Login';
import SerDetials from './pages/servicedetails/SerDetials';
import Require from './Authentication/Require';
import  { Toaster } from 'react-hot-toast';
import Manage from './pages/manage/Manage';
import Chekout from './pages/Checkout/Chekout';
import OrderSubmit from './pages/ordesubmit/OrderSubmit';
import Orders from './pages/Home/Orders/Orders';
// import Experts from './Experts/Experts';

function App() {
  return (
    <div className="App">
      <Toaster   position="top-right"
  reverseOrder={false}></Toaster>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/services' element={<Service></Service>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/manage' element={<Manage></Manage>}  ></Route>
        <Route path='/add-service' element={
          <Require> <SerDetials></SerDetials> </Require>
        } ></Route>
         <Route path='/chekout/:id' element={
          <Require> <Chekout></Chekout> </Require>
        } ></Route>
         <Route path='/ordersubmit/:id' element={
          <Require> <OrderSubmit></OrderSubmit> </Require>
        } ></Route>
       <Route path='/orders' element={<Orders></Orders>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
