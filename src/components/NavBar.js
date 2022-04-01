import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Carrito';

function NavBar() {
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Nieva</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Inicio <span class="sr-only"></span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Esquies</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Cascos</a>
                </li>
                </ul>
            </div>
            <Cart/>
        </nav>
        </>
    );
}

export default NavBar;