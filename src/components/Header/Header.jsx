import "./Header.css"
import { Nav } from "../Nav/Nav"

export const Header = () =>{
    return(
        <header className="header">
            <p>Dar<span>ko</span>.<span>Sto</span>re</p>
            <Nav/>
        </header>
    )
}