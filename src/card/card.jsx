import "./card.css";
import { Link } from "react-router-dom";
function Card (){
       console.log("Hello world");
    return (
        <div className="card">
            <h2>This is the Card Component</h2>
            <p>Welcome to the Card page!</p>
            <Link to="/">Go Back Home</Link>
        </div>
    );
}
export default Card;