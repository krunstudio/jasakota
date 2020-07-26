import React from 'react';
import Navbar from '../navbar';

const Home = props => {
    return (
        <div> 
            <div className="row justify-content-center">
                <div className="col-md-7" style={{height:400, width:'100%', margin:30}}>
                <div style={{marginBottom:50}}>
                    <img className="card" src="https://mdbootstrap.com/img/Photos/Others/gradient1.jpg" style={{width:'100%', hight:400}}></img>
                </div>
                <div>
                    <hr style={{marginBottom:50}}/>
                </div>
                <div className="row">
                    {props.dataCategory.map((item,key) =>{
                        return(
                            <div className="col-md-4">
                                <a href={'/kategori/' + item.title.replace(/ /g, '')}>
                                    <div  className="card" style={{height:200, margin:20}}>
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