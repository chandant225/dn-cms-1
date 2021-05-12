import React from 'react';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
    return (
        <div className="gallery-wrapper">
            <section style={{ height: "70px", background: "white" }} className="navbar-plate">

            </section>
            <div className="container">
                <center>
                    <h2>Gallery</h2>
                </center>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card">
                            <img style={{ width: "100%" }} src="/sliderImages/firstslider.jpg" className="card-img-top" alt="dbcdc" />
                            <div style={{ textAlign: 'center' }} className="card-body">
                                {/* <h5 style={{ padding: '10px', textDecoration: 'underline' }} className="card-title">awards program</h5> */}
                                <Link to="/album" className="btn btn-primary">view album</Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card">
                            <img style={{ width: "100%" }} src="/sliderImages/firstslider.jpg" className="card-img-top" alt="dbcdc" />
                            <div style={{ textAlign: 'center' }} className="card-body">
                                <h5 style={{
                                    padding: '10px'
                                }} className="card-title">awards program</h5>
                                < Link to="#" className="btn btn-primary" > view album</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card">
                            <img style={{ width: "100%" }} src="/sliderImages/firstslider.jpg" className="card-img-top" alt="dbcdc" />
                            <div style={{ textAlign: 'center' }} className="card-body">
                                <h5 style={{ padding: '10px' }} className="card-title">awards program</h5>
                                <Link to="#" className="btn btn-primary">view album</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card">
                            <img style={{ width: "100%" }} src="/sliderImages/firstslider.jpg" className="card-img-top" alt="dbcdc" />
                            <div style={{ textAlign: 'center' }} className="card-body">
                                <h5 style={{ padding: '10px' }} className="card-title">awards program</h5>
                                <Link to="#" className="btn btn-primary">view album</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default GalleryPage;