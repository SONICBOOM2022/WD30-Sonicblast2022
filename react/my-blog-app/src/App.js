import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './css/landing.css'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
        </Routes>
      <Footer></Footer>
    </>
  )
}

export default App;