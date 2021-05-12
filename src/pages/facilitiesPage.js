import React from 'react'
import { Link } from 'react-router-dom'
import './facilities.scss'

const FacilitiesPage = () => {
    return (
        <div>
            <div className="facilities-container-wrapper">
                <section style={{ height: "70px", background: "#d0404ef5" }} className="navbar-plate">

                </section>
                <center style={{ backgroundImage: 'url("background/pencils.jpg")', height: '130px', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: '-30rem' }} >
                    <p style={{ fontSize: "3rem" }}>
                        Facilities
                    </p>
                </center>
                <div className="container shadow rounded py-5" style={{ color: '#696363' }}>
                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-6">
                            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, non?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam adipisci consectetur inventore, nemo sapiente possimus vel? Eaque hic fuga nulla.</p>
                            <div className="text-wrapper my-3">
                                <i className="fab fa-angellist"></i>
                                <p style={{ color: 'red', fontWeight: '600' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugiat.</p>
                            </div>
                            <div className="text-wrapper my-3">
                                <i className="fab fa-angellist"></i>
                                <p style={{ color: '4caf50', fontWeight: '600' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugiat.</p>
                            </div>
                            <div className="text-wrapper my-3">
                                <i className="fab fa-angellist"></i>
                                <p style={{ color: 'chocolate', fontWeight: '600' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugiat.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-6">
                            <div style={{ marginTop: '36px' }} className="image-wrapper">
                                <img style={{ borderRadius: '20px' }} src="https://images.unsplash.com/photo-1586694681327-cc2144178860?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE0fHxzY2hvb2x8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="abcd.jpg" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <section>
                <div className="container" style={{ color: '#696363' }}>
                    <center>
                        <h1 className="py-3">Facilities</h1>
                    </center>
                    <div className="facilities-box-wrapper">
                        <Link to="#play">
                            <div className="box card shadow mx-2">
                                <i className="far fa-futbol py-2"></i>
                                <span>
                                    <h3 className="py-2">PlayGround</h3>
                                </span>
                                <span>
                                    <h5 className="py-2">Games & activities.</h5>
                                </span>
                            </div>
                        </Link>
                        <Link to="#play">
                            <div className="box card shadow mx-2">
                                <i className="fas fa-building py-2"></i>
                                <span>
                                    <h3 className="py-2">Infrastructure</h3>
                                </span>
                                <span>
                                    <h5 className="py-2">Campus area.</h5>
                                </span>
                            </div>
                        </Link>
                        <Link to="#play">
                            <div className="box card shadow mx-2">
                                <i className="fas fa-bus-alt py-2"></i>
                                <span>
                                    <h3 className="py-2">Transport</h3>
                                </span>
                                <span>
                                    <h5 className="py-2">vechiles.</h5>
                                </span>
                            </div>
                        </Link>
                        <Link to="#play">
                            <div className="box card shadow mx-2">
                                <i className="fas fa-hamburger py-2"></i>
                                <span>
                                    <h3 className="py-2">Food & Stay</h3>
                                </span>
                                <span>
                                    <h5 className="py-2">Foods & snacks.</h5>
                                </span>
                            </div>
                        </Link>
                        <Link to="#media">
                            <div className="box card shadow mx-2">
                                <i className="fas fa-wifi py-2"></i>
                                <span>
                                    <h3 className="py-2">Networked</h3>
                                </span>
                                <span>
                                    <h5 className="py-2">Communication.</h5>
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <section>
                <div className="container" style={{ color: '#696363' }}>

                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-6 image-wrapper1">
                            <img className="shadow" src="https://images.unsplash.com/photo-1589206946274-929e4da3996b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE3fHxzY2hvb2x8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="abcd.jpg" />
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-6">
                            <div className="content-wrapper1">
                                <h2>Bright Classrooms</h2>
                                <p style={{ paddingTop: '10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam esse maiores eos corporis similique cum repudiandae, deserunt in aperiam animi dignissimos nisi ab laudantium rem.</p>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-6">
                            <div id="" className="content-wrapper2">
                                <h2>Labs & Library</h2>
                                <p style={{ paddingTop: '10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam esse maiores eos corporis similique cum repudiandae, deserunt in aperiam animi dignissimos nisi ab laudantium rem.</p>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-6 image-wrapper2">
                            <img className="shadow" src="https://images.unsplash.com/photo-1457276587196-a9d53d84c58b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAwfHxzY2hvb2x8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="abcd.jpg" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-6 image-wrapper3">
                            <img className="shadow" src="https://images.unsplash.com/photo-1542899435-95e8b1563695?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNjaG9vbCUyMHBsYXlncm91bmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="abcd.jpg" />
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-6">
                            <div id="play" className="content-wrapper3">
                                <h2>Play Grounds</h2>
                                <p style={{ paddingTop: '10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam esse maiores eos corporis similique cum repudiandae, deserunt in aperiam animi dignissimos nisi ab laudantium rem.</p>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-6">
                            <div id="media" className="content-wrapper4">
                                <h2>Multi-media Rooms</h2>
                                <p style={{ paddingTop: '10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam esse maiores eos corporis similique cum repudiandae, deserunt in aperiam animi dignissimos nisi ab laudantium rem.</p>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-6 image-wrapper4">
                            <img className="shadow" src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTN8fHNjaG9vbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="abcd.jpg" />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default FacilitiesPage
