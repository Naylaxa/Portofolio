import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom/dist';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Contact from './components/contact';
import Home from './components/home';
import Portofolio from './components/portofolio';
import AboutMe from './components/aboutMe';


// function App() {
const App = () => {
  const navHeading = "Navigation";
  const navText = "Sosial Media";

return (
<Router>
    <div className="App">
      <header className="App-header">
        <Navbar navText={navText}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portofolio' element={<Portofolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/aboutme' element={<AboutMe/>} />
        </Routes>
        
        <Footer />
      </header>
    </div>
</Router>
  );
}



export default App;
