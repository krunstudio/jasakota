import React, {useState, useEffect} from 'react'
import axios from 'axios'
import image from '../../../assets/image2.jpg'


const Details = (props, tes) => {

    const [data, setData] = useState([]);

    const slug = props.match.params.slug

    const whatsapp = `https://api.whatsapp.com/send?phone=+62${data.whatsapp}&text=Halo,%20Saya%20melihat%20iklan%20anda%20di%20Jasakota.com`
    const telp = `tel:${data.whatsapp}`

    useEffect(() => {
		axios.get(`http://api.devsoft.my.id/public/Api/detailjasa/show/${slug}`)
        .then(response => {
            const payload = response.data;
            setData(payload)
    })
  }, []);

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-7" style={{height:400, width:'100%', margin:30}}>
                    <div style={{marginBottom:50}}>
                        {/* <img className="card detail-image" src="https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png"></img> */}
                        <img className="card detail-image" src={image}></img>
                    </div>
                    <div>
                        <hr style={{marginBottom:50}}/>
                    </div>
                    <div>
                        <h5>{data.title}</h5>     
                    </div>
                    <div style={{marginBottom:30}}>
                        <a>{data.description}</a>
                    </div>
                    <div>
                        <a>{`Penyedia jasa :  ${data.username}`}</a>
                    </div>
                    <div style={{marginBottom:30}}>
                        <a>{`Harga :  ${data.price}`}</a>
                    </div>
                    <div className="row justify-content-center">
                        <div>
                            <center  className='d-md-block d-none'>
                                <a href={telp} style={{margin:10}}>
                                    <button className="btn btn-primary"><img src='https://www.suunto.com/contentassets/b190b20bd1fd4f67a432fd503ce976ae/icon-incoming-call.png' className='whatsapp-icon'/>{data.whatsapp}</button>
                                </a>
                                <a href={whatsapp} style={{margin:10}}>
                                    <div className="btn btn-primary"><img src='https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png' className='whatsapp-icon'/>{data.whatsapp}</div>
                                </a>
                            </center>
                        </div>
                        {/* <div>
                            <center>

                                    <a href={telp} style={{margin:10}}>
                                        <button className="btn btn-primary">Hubungi Penyedia Jasa</button>
                                    </a>


                                    <a href={whatsapp} style={{margin:10}}>
                                        <div className="btn btn-primary">Whatsapp Penyedia Jasa</div>
                                    </a>

                            </center>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details