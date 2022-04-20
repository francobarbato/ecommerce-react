import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './CartWidget';
import { Link } from 'react-router-dom'

// corregir etiqueta a y link

function NavBar() {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand" href="#">Nieva</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to='/' className="nav-link" href="#">Inicio<span className="sr-only"></span></Link>
                </li>
                <li className="nav-item">
                    <Link to='/category/8' className="nav-link" href="#">Esquies</Link>
                </li>
                <li className="nav-item">
                    <Link to='/category/9' className="nav-link" href="#">Cascos</Link>
                </li>
                </ul>
            </div>
            <Link to='/Cart'><Cart/></Link>
        </nav>
        </>
    );
}

export default NavBar;