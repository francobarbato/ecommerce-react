import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Carrito';

function NavBar() {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Nieva</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Inicio <span className="sr-only"></span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Esquies</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Cascos</a>
                </li>
                </ul>
            </div>
            <Cart/>
        </nav>
        </>
    );
}

export default NavBar;