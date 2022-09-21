import { Routes, Route, useNavigate } from "react-router-dom"

//nested routes
import Offers from "./Offers"

export default function About() {
    const navigate = useNavigate()


    return (
        <div className="content">
            <h2>About Us</h2>
            <p>Lorem ipsum, sit...ad!</p>
            
            <p>Lorem ipsum, sit..., ad!</p>

            <button onClick={() => navigate('/movies')}>Watch our movies</button> 

          <Routes>
          <Route path="/about/offers" element={<Offers />} />
          </Routes>
        </div>
    )
}