import { Link } from "react-router-dom";

function Header(){
    return (
        <ul className="home-ul">
            <Link className="home-li" to='/'>Home</Link>
            <Link className="info-li" to='/Info'>Info</Link>
        </ul>
    );
}

export default Header;