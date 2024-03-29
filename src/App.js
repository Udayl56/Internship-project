
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';

import Courses from './component/Courses';
import About from './component/About';
import Contact from './component/ContactUs';
import ActiveCourses from './component/ActiveCourses';
import Blog from './component/Blog';

function App() {
  return (
    <>
      <div className="App container">
        <Header /><hr></hr>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<ActiveCourses />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

          {/*<Route path="/Testimonials" element={<Testimonials />} />*/}
          <Route path="/Blog" element={<Blog />} />

        </Routes>



      </div>

      <Footer /></>
  );
}

export default App;
