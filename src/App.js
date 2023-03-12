
import Home from './components/home/Home'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Tours from './components/tours/Tours';
import TourDetails from './components/Tourdetails/TourDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
         
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/city' element={<Tours/>}/>
          <Route path='/city/:id' element={<TourDetails/>}/>

          
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
