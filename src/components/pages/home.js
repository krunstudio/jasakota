import React from 'react';
import Navbar from '../navbar';
import image from '../../assets/image2.jpg'
import banner1 from '../../assets/banner-1.png'
import banner1Mobile from '../../assets/banner-1-mobile.png'



const Home = props => {
    return (
        <div> 
            <div className="row justify-content-center margin-0">
                <div className="col-md-8" style={{height:400, width:'100%', margin:30}}>
                <div style={{marginBottom:50}} className="banner">
                    <img className="card d-md-block d-none" src={banner1} style={{width:'100%', hight:400}}></img>
                    <img className="card d-md-none d-block" src={banner1Mobile} style={{width:'100%'}}></img>

                </div>
                <div>
                    <hr style={{marginBottom:50}} className="d-md-block d-none"/>
                </div>
                <div className="row">
                    {props.dataCategory.map((item,key) =>{
                        return(
                            <div className="col-md-4 col-6 fade-in">
                                <a href={'/kategori/' + item.title.replace(/ /g, '')}>
                                    <div  className="card category-image">
                                        <img src={image}/>
                                    </div>
                                </a>
                                <div className="text-align-center mb-20">
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