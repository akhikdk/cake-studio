import { Link } from "react-router-dom"

function Nav(){


    return <>
      <nav>
            <ul className="nav-links">
              <Link  className="navi" to={'/About'}>About us</Link>
              <Link className="navi" to={'/contact'}>Contact</Link>
             <Link className="navi" to={'/product'}>Product</Link>
             <Link className="navi" to = {'/Help'}>Help</Link>
            </ul>
     </nav> 
    </>
}

export default Nav