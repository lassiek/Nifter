import React, { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
// import Header from './components/Header/Header';
// import Home from './pages/Home/Home';
// import Market from './pages/Market/Market';
// import Footer from './components/Footer/Footer';

import './App.css'

const Home = lazy (() => import ('./pages/Home/Home'))
const Market = lazy (() => import ('./pages/Market/Market'))

function App () {

  return (
    <div className='App'>
      <Routes>
        <Route index element={<Layout />}>
          {/* <Route path={'/home'} element={<Home />} />
          <Route path={'/market'} element={<Market />} />  */}
        </Route>
      </Routes>
    </div>
    // <BrowserRouter>
    //   <div className='App'>
    //     <Header />
    //     <main>
    //       <Routes>
    //         <Route index element={<Home/>} />
    //         <Route path={'/'} element={<Layout />} />
    //         <Route path='/home' element={<Home />} />
    //         <Route path='/market' element={<Market />} /> 
    //       </Routes>
    //     </main>
    //     <Footer />
    //   </div>
    // </BrowserRouter>

  )
}

export default App
