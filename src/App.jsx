import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'


function App() {

  return (
    <>
      <Cursor isGelly={false} cursorSize={20} />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
