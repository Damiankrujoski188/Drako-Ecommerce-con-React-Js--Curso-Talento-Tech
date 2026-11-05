import "./Header.css"
import { Nav } from "../Nav/Nav"
import { Link } from "react-router-dom";
import brand from "../../assets/drako_brand.png";

export const Header = () =>{
    return(
        <header className="header">
            {/* <Link className="marca" to={"/"}>Dra<span>ko</span>.<span>Sto</span>re</Link> */}
            <Link to={"/"} className="container-brand">
                <img src={brand} alt="DrakoStore" />
            </Link>
            <Nav/>
        </header>
    )
}