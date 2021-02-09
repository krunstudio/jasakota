import React from 'react';
import Navbar from '../navbar';
import image from '../../assets/image2.jpg'


const Home = props => {
    return (
        <div> 
            <div className="row justify-content-center">
                <div className="col-md-8" style={{height:400, width:'100%', margin:30}}>
                <div style={{marginBottom:50}}>
                    <h1 className="text-header fade-in-right">Solusi Hebat Mencari Jasa
                    </h1>
                    <img className="card" src="https://mdbootstrap.com/img/Photos/Others/gradient1.jpg" style={{width:'100%', hight:400}}></img>
                </div>
                <div>
                    <hr style={{marginBottom:50}}/>
                </div>
                <div className="row">
                    {props.dataCategory.map((item,key) =>{
                        return(
                            <div className="col-md-4 fade-in">
                                <a href={'/kategori/' + item.title.replace(/ /g, '')}>
                                    <div  className="card" style={{height:200, margin:20}}>
                                        <img style={{height:'100%'}} src={image}/>
                                    </div>
                                </a>
                                <div className="text-align-center">
                                    <b>{item.title}</b>
                                </div>
                            </div>
                        )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;