import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import About from './pages/About/About'
import Invisible from './pages/Invisible/Invisible'
import Products from './pages/Products/Products'
import Contact from './pages/Contact/Contact'
import Courses from './pages/Courses/Courses';
import Franchise from './pages/Franchise/Franchise';
import Blog from './pages/Blog/Blog';
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Invisible" element={<Invisible />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Courses" element={<Courses />} />
        <Route path="/Franchise" element={<Franchise />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
