import './App.css'
import Navbar from './components/Navbar'
import Intro from './pages/Intro'
import Resume from './pages/Resume'
import Project from './pages/Project'
import Contact from './pages/Contact'
import About from './pages/About'
import Blog from './pages/Blog'

function App() {
  return (
    <>
      <Intro />
      <About />
      <Resume />
      <Project />
      <Contact />
      {/* <Blog/> */}

    </>
  )
}

export default App
