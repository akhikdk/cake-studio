import { Link } from "react-router-dom"

function Nav(){


    return <>
      <nav>
            <ul className="nav-links">
              <Link to={"/"}>HOME</Link>
              <Link to={'/contact'}>contact us</Link>
              <li>Product</li>
              <li>Help</li>
            </ul>
     </nav> 
    </>
}

export default Nav