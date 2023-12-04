
import './App.css';
import { Route,Routes } from 'react-router-dom';

import Home from './pages/Home';
import Cover from './pages/Cover';
import Favourates from './pages/Favourates';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path={'/'} element={<Cover/>}/>
        <Route path={'/Home'} element={<Home/>}/>
        <Route path={'/Favourates'} element={<Favourates/>}/>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
