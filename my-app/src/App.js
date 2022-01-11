import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Favourite from './components/Main/components/Favourite';
import Modal from './components/Main/components/Modal';
import Simular from './components/Main/components/Modal/components/Simular';
import Search from './components/Main/components/Search';
import Error from './components/Main/components/Search/components/Error';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app'>
      <Header />
        <Routes>
          <Route path='/main' element={<Main/>} />
          <Route path='/search/:query' element={<Search />} />
          <Route path='/error' element={<Error />} />
          <Route path='/modal/:id' element={<Modal />} />
          <Route path='/favourite' element={<Favourite />} />
        </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
