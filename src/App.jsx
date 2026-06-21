import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Articles from './pages/Articles'
import ArticlePage from './pages/ArticlePage'
import Glossary from './pages/Glossary'
import TermPage from './pages/TermPage'
import Mission from './pages/Mission'
import StartHere from './pages/StartHere'
import Help from './pages/Help'
import Newsletter from './pages/Newsletter'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/glossary/:term" element={<TermPage />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/start-here" element={<StartHere />} />
          <Route path="/help" element={<Help />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
