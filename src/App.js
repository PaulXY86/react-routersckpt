 import {BrowserRouter, Link, Routes, Route, Navigate,} from 'react-router-dom'
 import { useState } from 'react'
 
//pages
 import Home from './pages/Home'
import About from './pages/About'
import Movies from './pages/Movies'
import MoviesDetails from './pages/MoviesDetails'

function App() {
  const [cartIsEmpty] = useState(false)


  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>WORLD CIMEMAT</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/movies">Movies</Link>
        </nav>
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path="/about/*" element={ <About />}/>
          <Route path="/movies/:id/*" element={ <MoviesDetails />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/test" element={(
            <div>
              <h2>Test Page</h2>
              <p>hello!</p> 
            </div>
          )} /> 
          <Route path="/redirect" element={<Navigate to="/about" /> } />
          <Route 
            path="/checkout" 
            element={cartIsEmpty ? <Navigate to="/movies" /> : <p>checkout</p> }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;