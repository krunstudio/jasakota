import React from 'react';

const Navbar = props => {
    return (
        <div className="navbar-light bg-light">
        <div className="row justify-content-center">
          <nav className="navbar navbar-expand-lg col-md-7">
            <a className="navbar-brand" href="/">Jasakota</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/listjasas">Iklan saya</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pasang Iklan</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Masuk</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    )
}

export default Navbar;