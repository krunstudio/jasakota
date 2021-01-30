import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import image from '../../../assets/image2.jpg'
import axios from 'axios'



const IklanSaya = (props, {match}) => {

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
      }

    let query = useQuery();
    let page = (query.get("page") === null) ? '1' : query.get("page")

    const api = (props.match.path == '/kategori/:id') ? `http://api.devsoft.my.id/public/Api/categories/${props.match.params.id}/${page}` : `http://api.devsoft.my.id/public/Api/search/sedot/page-${page}`
    const [data, setData] = useState([]);
      console.log(api)
    

    useEffect(() => {
		axios.get(api)
        .then(response => {
            const payload = response.data;
            setData(payload)
        })
    }, []);


    let pageNumber = [];
    let i = 1;
    let x;

    console.log(data && data && data.total_page)
    let total_page =  data.total_page + 1
    
    while (i < total_page) {
        
        x = <li className={(i == page) ? 'page-item active font-white' : 'page-item'}><a className="page-link" href={"?page=" + i}>{i}</a></li>;
        pageNumber.push(x)
        i++;
      }

    let Jasa = (props.match.path == '/kategori/:id') ? data.data : data

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-8" style={{height:400, width:'100%', margin:30}}>
                    <div style={{marginBottom:50}}>
                        Daftar iklan kamu
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
                        data.data && data.data.map((item, key) =>{
                            return (
                            <div>
                                <div className="row justify-content-center">
                                    <a href={`/${item.id_service_provider}/detail`} className="col-md-3 col-4">
                                        <img className='image-list' src={image}/>
                                    </a>
                                    <div className="col-md-9 col-8">
                                        <a href={`/${item.id_service_provider}/detail`}>
                                            <div className="row col-12 space-between">
                                                <div><h5>{item.title}</h5></div>
                                                <div className="subtitle">Edit</div>
                                            </div>
                                        </a>
                                        <div className="row col-12 space-between">
                                            <div>
                                                <a className="subtitle" href={`/${item.id_service_provider}/detail`}>Lokasi : {item.location}</a>
                                            </div>
                                            <div className="subtitle">
                                                Hapus
                                            </div>
                                        </div>
                                        <div>
                                            <a className="subtitle" href={`/${item.id_service_provider}/detail`}>Harga : Rp {item.price}</a>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{marginBottom:10}}/>
                            </div>
                        )
                        } )
                        }

                    <div className="row justify-content-center">
                        <nav aria-label="...">
                            <ul className="pagination">
                                <li className={ (page == 1) ? "page-item disabled" : "page-item"}>
                                <a className="page-link" href={'?page='+ (parseInt(page)-1)}>Previous</a>
                                </li>
                                {pageNumber}
                                <li className={ (page == data.total_page) ? "page-item disabled" : "page-item"}><a className="page-link" href={'?page='+ (parseInt(page)+1)}>Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default IklanSaya;