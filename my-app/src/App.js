import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
      <Header />
      <Main />
        {/* <Routes>
          <Route path='/main' />
          <Route path='/search' />
        </Routes> */}
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
