import React, {useEffect, useState} from 'react';
import Navbar from '../../navbar';
import axios from 'axios'



const Listjasa = (props, {match}) => {

    const api = (props.match.path == '/kategori/:id') ? `http://api.devsoft.my.id/public/Api/categories/${props.match.params.id}/1` : `http://api.devsoft.my.id/public/Api/search/${props.slug}/page-1`
    const [data, setData] = useState([]);

    

    useEffect(() => {
		axios.get(api)
        .then(response => {
            const payload = response.data;
            setData(payload)
        })
    }, []);

    const Jasa = (props.match.path == '/kategori/:id') ? data.search : data
    console.log(data)
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-7" style={{height:400, width:'100%', margin:30}}>
                    <div style={{marginBottom:50}}>
                        <a>Menampilkan Kategori {data.category_title}</a>
                    </div>
                    {(props.match.path == '/kategori/:id') ?
                         Jasa && Jasa.map((item, key) =>{
                            return (
                            <div>
                                <div className="row justify-content-center">
                                    <a href={`/${item.id_service_provider}/detail`} className="col-md-3 col-4">
                                        <img className='image-list' src="https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png"/>
                                    </a>
                                    <div className="col-md-9 col-8">
                                        <a href={`/${item.id_service_provider}/detail`}>
                                            <h5>{item.title}</h5>
                                        </a>
                                        <div>
                                            <a href={`/${item.id_service_provider}/detail`}>Lokasi : {item.location}</a>
                                        </div>
                                        <div>
                                            <a href={`/${item.id_service_provider}/detail`}>Harga : Rp {item.price}</a>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{marginBottom:10}}/>
                            </div>
                        )
                        } )
                        :
                         Jasa.map((item, key) =>{
                            return (
                            <div>
                                <div className="row justify-content-center">
                                    <a href={`/${item.id_service_provider}/detail`} className="col-md-3 col-4">
                                        <img className='image-list' src="https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png"/>
                                    </a>
                                    <div className="col-md-9 col-8">
                                        <a href={`/${item.id_service_provider}/detail`}>
                                            <h5>{item.title}</h5>
                                        </a>
                                        <div>
                                            <a href={`/${item.id_service_provider}/detail`}>Lokasi : {item.location}</a>
                                        </div>
                                        <div>
                                            <a href={`/${item.id_service_provider}/detail`}>Harga : Rp {item.price}</a>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{marginBottom:10}}/>
                            </div>
                        )
                        } )}

                    <div className="row justify-content-center">
                        <nav aria-label="...">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                <span className="page-link">Previous</span>
                                </li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item">
                                <span className="page-link">
                                    2
                                    <span className="sr-only">(current)</span>
                                </span>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Listjasa;