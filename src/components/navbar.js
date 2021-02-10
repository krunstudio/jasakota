import React, {useState} from 'react';
import ModalLogin from '../components/modal/login'
import { Button, Modal } from 'react-bootstrap';
import logo from '../assets/logo-sobatjasa.png';


const Navbar = props => {

    let data = props.data;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="navbar-light">
        <Modal size="lg" show={show} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered justify-content="center">
          <ModalLogin/>
        </Modal>
        <div className="row justify-content-center margin-0">
          <nav className="navbar navbar-expand-lg col-md-8">
            <a className="navbar-brand" href="/"><img className="logo" src={logo}/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/iklan-saya">Iklan saya</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pasang-iklan">Pasang Iklan</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleShow}>Masuk</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0" onSubmit={props.cariJasa}>
                <input className="form-control mr-sm-2" type="input" value={data.keyword} id="search" name='keyword' placeholder="Cari disini" onChange={e => props.setData({ ...data, keyword: e.target.value })}/>
              </form>
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={props.cariJasa}>Cari</button>
            </div>
          </nav>
        </div>
      </div>
    )
}

export default Navbar;