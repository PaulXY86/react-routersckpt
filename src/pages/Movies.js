import { Routes, Link, useNavigate } from "react-router-dom"

//nested routes
import Movies from "./MoviesDetails"

export default function Movies() {
    const navigate = useNavigate()

    return (
        <div className="content">
            <h3>TEASER</h3>
            <div className="movies">
                {[0,1,2,3].map(p => (
                    <div key={p}>
                        <Link to={/movies/${p}}>
                        <img src="https://www.tooxtraloaded.com.ng/wp-content/uploads/2021/08/seeeeee.jpeg" alt="site banner" />
                        </Link>
                    </div>
                ))} 
            </div>
            <h3>SEASONI</h3>
            <div className="movies">
                {[4,5,6,7].map(p => (
                    <div key={p}>
                        <Link to={/movies/${p}}>
                        <img src="https://www.tooxtraloaded.com.ng/wp-content/uploads/2021/08/seeeeee.jpeg" alt="site banner" />
                        </Link>
                    </div>
                ))} 
            </div>
            <h3>SEASONII</h3>
            <div className="movies">
                {[8,9,10,11].map(p => (
                    <div key={p}>
                        <Link to={/movies/${p}}>
                        <img src="https://www.tooxtraloaded.com.ng/wp-content/uploads/2021/08/seeeeee.jpeg" alt="site banner" />
                        </Link>
                    </div>
                ))} 
            </div>
            <button onClick={() => navigate('/movies')}>Watch our movies</button> 

<Routes>
<Route path="/movie/moviesdetails" element={<Movies />} />
</Routes>
        </div>
    )
}