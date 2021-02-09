import React, {useState, useEffect} from 'react'
import axios from 'axios'



const Register = (props) => {

    const [data, setData] = useState();
    let url = 'http://api.devsoft.my.id/public/Api';

    const submit = e => {
        if (e) e.preventDefault();
        let formData = new FormData();
        formData.append('username',data.username)
        formData.append('first_name',data.firstName)
        formData.append('last_name',data.lastName)
        formData.append('password',data.password)
		axios.post(`${url}/auth/create`, formData, { headers: { 'Content-Type' : 'multipart/form-data' }})
			.then(response => {
					window.location.href = "/iklansaya";	
			})
			.catch(error => {
				;
				throw (error)
			})}
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6 card margin-top-60 box-shadow">
                    <div className="col-md-12">
                    <form className="form-padding">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name="username" placeholder="Masukkan Email"  onBlur={e => setData({ ...data, username: e.target.value })}/>
                        </div>
                        <div className="form-group">
                            <label>Nama Depan</label>
                            <input type="text" className="form-control" name="firstName" placeholder="Masukkan Nama Depan"  onBlur={e => setData({ ...data, firstName: e.target.value })}/>
                        </div>
                        <div className="form-group">
                            <label>Nama Belakang</label>
                            <input type="text" className="form-control" name="lastName" placeholder="Masukkan Nama Belakang" onBlur={e => setData({ ...data, lastName: e.target.value })}/>
                        </div>
                        <div className="form-group">
                            <label>Kata Sandi</label>
                            <input type="password" className="form-control" name="password" placeholder="Masukkan Kata Sandi" onBlur={e => setData({ ...data, password: e.target.value })}/>
                        </div>
                        <div className="form-group">
                            <label>Verifikasi Kata Sandi</label>
                            <input type="password" className="form-control" name="passwordRepeat" placeholder="Masukkan Ulang Kata Sandi" name="price" onBlur={e => setData({ ...data, price: e.target.value })}/>
                        </div>
                        {/* <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" name="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div> */}
                        <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register