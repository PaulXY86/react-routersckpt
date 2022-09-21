import { useState } from "react";

export default function offers() {
    const [item] = useState([
        { title:'THE SEE TEASER', episode: 0 },
        { title:'THE SEE SEASON ONE', episode: 1 },
        { title:'THE SEE SEASON ONE', episode: 2 },
    ])

     return (
        <div>
            <h3>Latest Offers</h3>
            <div className="offers">
                {item.map(item => (
                    <div key={item.title}>
                        <img src="https://www.tooxtraloaded.com.ng/wp-content/uploads/2021/08/seeeeee.jpeg" alt="site banner" />
                        <h4>{item.title}</h4>
                        <p>£{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
     )
}


