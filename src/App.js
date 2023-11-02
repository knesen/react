import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import Header from './components/HeaderSection/Header';
import Footer from './components/Footer';
import News from './views/News';
import NewsDetails from './views/NewsDetails';



function App() {
  return (
    <div>      
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/news' element={<News />} />
      <Route path='/newsdetails' element={<NewsDetails />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Routes>      
    </BrowserRouter>   
    </div>
  );
}

export default App;
