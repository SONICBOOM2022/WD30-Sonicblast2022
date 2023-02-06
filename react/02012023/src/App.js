import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './css/landing.css'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import MainLayout from './pages/layout/MainLayout'
import ShopLayout from './pages/layout/ShopLayout'
import ShopMain from './components/Shop/ShopMain'


function App() {
  return (
    <> 
      {/* <Link to="/Home">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Projects">Projects</Link> */}
      {/* <Header></Header> */}
      <Routes>
        <Route element={<MainLayout />}>
        {/* <Route element={<Header />}/> */}
        <Route path="/" element={<Main />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        {/* <Route element={<Footer />}/> */}
        </Route>
        <Route element={<ShopLayout />}>
          <Route path="/Shop" element={<ShopMain />}/>
        </Route>

      </Routes>
      {/* <Footer></Footer> */}
      
    </>
  );
}

export default App;
