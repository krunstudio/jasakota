import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios'
import localStorage from 'localStorage';





const ModalLogin = (props) => {

    const [show, setShow] = useState(false);
    const [authVerification, setAuthVerification] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState([]);
    let url = 'http://api.devsoft.my.id/public/Api';

    const successLogin = (response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('id', response.data.identity)

        localStorage.setItem('token_date', new Date());

        // localStorage.setItem('profile', JSON.stringify(response));

        let prevUrl = localStorage.getItem('prevUrl');

        if (prevUrl ==  null) {
            prevUrl = '';
        } else {
            localStorage.removeItem('prevUrl');
        }

        window.location.href = prevUrl;
   }

    const login = (e) => {
        if (e) e.preventDefault();
        let formData = new FormData();
        formData.append('username',data.username)
        formData.append('password',data.password)
		axios.post(`${url}/auth`, formData, { headers: { 'Content-Type' : 'multipart/form-data' }})
			.then(response => {
                    successLogin(response)
			})
			.catch(error => {
				;
                setAuthVerification('Email atau Password salah!')
				throw (error)
			})
    }
    
    return (
        <div className="container">

        <Modal.Header closeButton>

          <Modal.Title>Sign In</Modal.Title>

        </Modal.Header>

        <Modal.Body>
            <div className="auth hide">
                {authVerification}
            </div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" aria-describedby="emailHelp" onBlur={e => setData({ ...data, username: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onBlur={e => setData({ ...data, password: e.target.value })} />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <div className="mt-65">
                    <div type="submit" className="btn btn-primary col-12" onClick={login}>Login</div>
                </div>
                <div className="forgot-password">Belum punya akun? <a href="/register">Daftar Disini</a></div>
            </form>

        </Modal.Body>


    </div>
      );
}

export default ModalLogin;