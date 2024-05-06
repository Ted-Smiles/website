import { Route, Routes } from 'react-router'

import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Header />
      <div className='content'>
        <Routes>

          <Route path='/' element={ <Main /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/gallery' element={ <Gallery /> } />
          <Route path='/contact' element={ <Contact /> } />

        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
