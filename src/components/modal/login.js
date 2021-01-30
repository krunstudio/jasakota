import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';


const ModalLogin = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const login = () => {
        window.location.href = '/profil'
    }
    
    return (
        <div className="container">

        <Modal.Header closeButton>

          <Modal.Title>Sign In</Modal.Title>

        </Modal.Header>

        <Modal.Body>

            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                {/* <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <div className="mt-65">
                    <div type="submit" class="btn btn-primary col-12" onClick={login}>Login</div>
                </div>
                <div className="forgot-password"><a href="#">Lupa Password?</a></div>
            </form>

        </Modal.Body>


    </div>
      );
}

export default ModalLogin;