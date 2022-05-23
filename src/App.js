import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login/Login';
import Register from './Pages/Login/Registration/Register';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/footer/Footer';
import Header from './Pages/Shared/Header/Header';



const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>


    </div>
  );
};

export default App;