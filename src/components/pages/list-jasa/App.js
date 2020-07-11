import React, {useEffect} from 'react';
import Navbar from '../../navbar';


const Listjasa = props => {
    let data = props.dataList;
    return (
        <div>
            <Navbar {...props}/>
            <div className="row justify-content-center">
                <div className="col-md-7" style={{height:400, width:'100%', margin:30}}>
                    <div style={{marginBottom:50}}>
                        <a>Kategori Guru</a>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-3 col-4">
                            <img className='image-list' src="https://media.suara.com/pictures/480x260/2019/12/24/78259-ilustrasi-guru-mengajar.jpg"/>
                        </div>
                        <div className="col-md-9 col-8">
                            <div>
                                <h5>{data.title}</h5>
                            </div>
                            <div>
                                <a>Lokasi : {data.location}</a>
                            </div>
                            <div>
                                <a>Harga : Rp {data.price}</a>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row justify-content-center">
                        <div className="col-md-3 col-4">
                            <img className='image-list' src="https://cdn1-production-images-kly.akamaized.net/ncc2QvLsjojPCyV1OM1uME8mS14=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1729978/original/055302400_1507191383-Banner_Hari_Guru.jpg"/>
                        </div>
                        <div className="col-md-9 col-8">
                            <div>
                                <h5>Guru Les Matematika</h5>
                            </div>
                            <div>
                                <a>Lokasi : Kampung Baru</a>
                            </div>
                            <div>
                                <a>Harga : Rp. 1.000.000</a>
                            </div>
                        </div>
                    </div>
                    <hr style={{marginBottom:50}}/>
                    <div className="row justify-content-center">
                        <nav aria-label="...">
                            <ul class="pagination">
                                <li class="page-item disabled">
                                <span class="page-link">Previous</span>
                                </li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item">
                                <span class="page-link">
                                    2
                                    <span class="sr-only">(current)</span>
                                </span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                <a class="page-link" href="#">Next</a>
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