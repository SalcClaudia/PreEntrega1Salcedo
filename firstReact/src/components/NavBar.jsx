import CartWidget from './CartWidget';

const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img className='emerald-icon' src="../src/assets/emerald.png" alt="" />
        <a className="navbar-brand" href="">Emerald Jewelry</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul className="dropdown-menu">
                <p className='p-items'>Tipos</p>
                <li><a className="dropdown-item" href="#">Brazaletes</a></li>
                <li><a className="dropdown-item" href="#">Anillos</a></li>
                <li><a className="dropdown-item" href="#">Aretes</a></li>
                <li><a className="dropdown-item" href="#">Tobilleras</a></li>
              </ul>
            </li>
          </ul>
            <div className="custom-width">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Encuentra lo que necesitas" aria-label="Search"></input>
                  <button className="btn btn-outline-success" type="submit">Buscar</button>
              </form>
            </div>
        </div>
        <CartWidget />
      </div>
    </nav>

  )
}

export default NavBar;