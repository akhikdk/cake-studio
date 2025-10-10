import { Link } from "react-router-dom"

function Nav(){


    return <>
      <nav>
            <ul className="nav-links">
              <Link to={"/"}>HOME</Link>
              <Link to={'/contact'}>Contact</Link>
             <Link to={'/product'}>Product</Link>
             <Link to = {'/help'}>Help</Link>
            </ul>
     </nav> 
    </>
}

export default Nav