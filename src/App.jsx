import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Layout from './components/Layout'
import Home from './pages/Home'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Work from './pages/Work'
import Process from './pages/Process'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Resources from './pages/Resources'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/process" element={<Process />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
