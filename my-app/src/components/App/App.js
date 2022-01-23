import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import Favourite from '../Main/components/Favourite';
import Modal from '../Main/components/Modal';
import Search from '../Main/components/Search';
import Error from '../Main/components/Search/components/Error';
import {Provider} from 'react-redux';
import store from '../../redux';
import Homepage from '../Main/components/Homepage';

function App(props) {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className='app'>
      <Header />
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/main' element={<Main/>} />
          <Route path='/search/:query' element={<Search />} />
          <Route path='/error' element={<Error />} />
          <Route path='/modal/:id' element={<Modal />} />
          <Route path='/favourite' element={<Favourite />} />
        </Routes>
      <Footer />
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;