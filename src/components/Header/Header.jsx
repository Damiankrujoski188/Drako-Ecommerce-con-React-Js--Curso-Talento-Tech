import "./Header.css"
import { Nav } from "../Nav/Nav"
import { Link } from "react-router-dom"

export const Header = () =>{
    return(
        <header className="header">
            <Link className="marca" to={"/"}>Dra<span>ko</span>.<span>Sto</span>re</Link>
            <Nav/>
        </header>
    )
}