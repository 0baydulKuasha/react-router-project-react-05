import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            <span>this is your website</span>
            <nav className="menu"  >
                <Link to="/">Header</Link>
                {/* <Link to='/navber'></Link> */}
                <Link to="/home">Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/Postes'> Postes</Link>
                <Link to='/footer'>Footer</Link>                
            </nav>
             
        </div>
       
    );
};

export default Header;