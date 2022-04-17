import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Carrito';
import { Link } from 'react-router-dom'

function NavBar() {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><Link to='/'>Nieva</Link></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#"><Link to='/'>Inicio</Link><span className="sr-only"></span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><Link to='/category/8'>Esquies</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><Link to='/category/9'>Cascos</Link></a>
                </li>
                </ul>
            </div>
            <Cart/>
        </nav>
        </>
    );
}

export default NavBar;