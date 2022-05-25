import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Review from './Pages/Dashboard/Review';
import Home from './Pages/Home/Home/Home';
import SigngleTool from './Pages/Home/Home/Tools/SingleTool/SigngleTool';
import Login from './Pages/Login/Login/Login/Login';
import Register from './Pages/Login/Registration/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/footer/Footer';
import Header from './Pages/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './Pages/Payment/Payment';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/tool/:id' element={
          <RequireAuth>
            <SigngleTool></SigngleTool>
          </RequireAuth>
        }></Route>


        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>

          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
        </Route>


        <Route path='/payment' element={<Payment></Payment>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
};

export default App;