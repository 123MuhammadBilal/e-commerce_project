import React from 'react'
import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <div className='navigationContainer'>
            <div>
                <ul>
                    <li><Link className="homebutton" to={`/`}>{"Home"}</Link></li>
                    <li><Link className="homebutton" to={`/products`}>{"products"}</Link></li>
                    <li><Link className="homebutton" to={`/contact`}>{"contact"}</Link></li>
                    <li><Link className="homebutton" to={`/about`}>{"about"}</Link></li>
                </ul>
            </div>
            <div>
            <div>
                <ul>
                    <li><Link className="homebutton" to={`/Cart`}>{"Cart"}</Link></li>
                    <li><Link className="homebutton" to={`/form`}>{"Login"}</Link></li>
                    <div className='currentUser'>
                    <span><Link to={`/profile`}><img src="https://cdn-icons-png.flaticon.com/128/5087/5087579.png" alt="Icon" /></Link></span>
                </div>
                </ul>
                
            </div>
            </div>
        </div>
    )
}
