import { Routers, Route, useParams, } from "react-router-dom"

//nested routes
import Offers from "./Offers"

export default function MoviesDetails() {
    const { id } =useParams()
    

    return (
        <div className="content">
            <div className="movies">
                <div className="image">
                    <img src="https://www.tooxtraloaded.com.ng/wp-content/uploads/2021/08/seeeeee.jpeg" alt="" />
                </div>
                <div className="details">
                    <h2>Movies - {id}</h2>
                    <p>Lorem ipsum...elit</p>
                    <p>Lorem ipsum...quasi?</p>
                </div>
            </div>

             <Routers>
                <Route path="offers" element={ <Offers />}/>
             </Routers>
        </div>
    )
}
