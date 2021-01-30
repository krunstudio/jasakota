import React, {useState, useEffect} from 'react'
import axios from 'axios'


const PasangIklan = (props) => {

    const [data, setData] = useState();
    let url = 'http://api.devsoft.my.id/public/Api';

    const submit = e => {
        if (e) e.preventDefault();
        let formData = new FormData();
        formData.append('title',data.title)
        formData.append('description',data.description)
        formData.append('location',data.location)
        formData.append('price',data.price)
        formData.append('id_master_categories',data.id_master_categories);
		axios.post(`${url}/pasangiklan/create`, formData, { headers: { 'Content-Type' : 'multipart/form-data' }})
			.then(response => {
					window.location.href = "#";
				
			})
			.catch(error => {
				;
				throw (error)
			})}
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="col-md-12">
                    <form>
                        <div className="form-group">
                            <label>Judul Iklan</label>
                            <input type="text" className="form-control" name="title" placeholder="Masukkan Judul Iklan"  onBlur={e => setData({ ...data, title: e.target.value })}/>
                        </div>
                        <div className="form-group">
                            <label>Kategori</label>
                            <select className="form-control form-control" name="category" onBlur={e => setData({ ...data, id_master_categories: e.target.value })}>
                                {props.category.map((item, key) => {
                                    return (                
                                        <option value={item.id_master_categories}>{item.title}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Deskripsi</label>
                            <textarea type="text" className="form-control" name="description" placeholder="Masukkan Deskripsi" name="category" onBlur={e => setData({ ...data, description: e.target.value })}/>
                        </div>
                        <div className="form-group">
                            <label>Lokasi</label>
                            <input type="text" className="form-control" name="location" placeholder="Masukkan Lokasi" name="location" onBlur={e => setData({ ...data, location: e.target.value })}/>
                        </div>
                        <div className="form-group">
                            <label>Biaya Layanan</label>
                            <input type="text" className="form-control" name="price" placeholder="Masukkan Biaya" name="price" onBlur={e => setData({ ...data, price: e.target.value })}/>
                        </div>
                        <div className="form-group">
                            <label>Nomor HP</label>
                            <input type="tel" disabled='disabled' className="form-control" name="phone_number" value="0812345667" name="phone_number" onBlur={e => setData({ ...data, phone_number: e.target.value })}/>
                        </div>
                        <div className="form-group">
                            <label>Gambar</label>
                            <input type="file" className="form-control" name="image"/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" name="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasangIklan