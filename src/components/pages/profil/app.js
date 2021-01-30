import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Profil = (props) => {

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
                <div className="col-md-8">
                    <div className="col-md-12">
                        Profile
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profil