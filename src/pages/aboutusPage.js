import React from 'react'
import TeamMember from '../components/teammembers';
import './aboutus.scss';

const AboutusPage = () => {
    return (
        <div>
            <div className="about-us-wrapper">
                <section style={{ height: "70px", background: "#d0404ef5" }} className="navbar-plate">

                </section>
                <center style={{ backgroundImage: 'url("background/pencils.jpg")', height: '130px', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: '-30rem' }} >
                    <p style={{ fontSize: "3rem" }}>
                        About us
                    </p>
                </center>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-4">
                                <center>
                                    <p style={{ fontSize: "3rem" }}>
                                        About us
                                 </p>
                                    <p style={{ marginTop: "20px" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil praesentium harum, asperiores eos cumque ut magni nam nulla ab delectus voluptas vitae eius odio veniam earum ratione illo quibusdam modi aspernatur provident eveniet neque rem. Quo esse numquam, illum rerum possimus quaerat corporis ex illo modi? Magnam inventore optio temporibus totam exercitationem provident beatae sequi. Ducimus molestias ex illum aut, ea error itaque sequi eveniet eligendi mollitia exercitationem debitis assumenda pariatur quod aperiam impedit vitae fugit placeat. Provident delectus officiis dolorum nihil labore, blanditiis saepe cupiditate suscipit quo fugit obcaecati dolores, illum facere tenetur culpa ea. Tenetur, error nesciunt. </p>
                                </center>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-8">
                                <center>
                                    <div className="embed-responsive embed-responsive-16by9 ">
                                        <iframe title="video" className="embed-responsive-item shadow" src="https://www.youtube.com/embed/OdVHrhElU5M?rel=0" allowfullscreen></iframe>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="about-features-section">
                <div className="container shadow">
                    <div className="row">
                        <div className="left-container col-sm-12 col-md-6 col-lg-6">
                            <div className="header-wrapper">
                                <h4>We offer a High Quality Blend of Co-Curricular Activities, Sports and Academics.</h4>
                            </div>
                            <div className="text-wrapper pt-3">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda libero tempore provident quae voluptatum blanditiis aliquid explicabo nesciunt dignissimos. Totam?</p>
                            </div>
                            <div className="button-wrapper pt-3">
                                <button className="btn btn-lg btn-danger rounded-pill shadow">Join today</button>
                            </div>
                        </div>


                        <div style={{ padding: '0' }} className="right-container col-sm-12 col-md-6 col-lg-6">'
                    <div className="img-wrapper">
                                <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="abcd.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: "linear-gradient(to top,rgb(255 0 0 / 4%),#ff00001f)" }} className="teacher-section-wrapper">
                <div className="container">
                    <center>
                        <p style={{ fontSize: "3rem" }}>Our Qualified staffs</p>
                    </center>
                    <div className="teacher-section">
                        <TeamMember />
                    </div>
                </div>
            </div>
            <section className="chairman-message">
                <div className="container">
                    <center>
                        <p style={{ fontSize: "3rem" }} className="mt-4">Principal's Message</p>
                        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </center>
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <div className="image-wrapper shadow">
                                <img className="shadow" src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjN8fGNlb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="hello" />
                                <div className="word-wrapper">
                                    <h4>Walter white</h4>
                                    <p>Ceo / Founder</p>
                                    <p><i className="fab fa-twitter"></i>@whiteWalter</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-3 first-para">
                            <div className="text-wrapper">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate ipsam quae, ex soluta expedita delectus quidem omnis. Vitae nostrum, nemo reiciendis debitis sapiente facilis. Dolor et molestiae architecto labore laboriosam sapiente, voluptatem, corrupti deleniti at, blanditiis maiores tempora quis consectetur. In, et cumque deserunt minus error quibusdam odio vel.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-3">
                            <div className="text-wrapper">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni esse pariatur repudiandae voluptatem optio mollitia doloremque reiciendis maxime quasi. Adipisci ut dolores non quo, dolorem, nostrum possimus ipsum atque asperiores veniam earum eius ex? Delectus, dolorem inventore necessitatibus ullam nihil qui modi corrupti pariatur, commodi, architecto cumque cupiditate quo?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default AboutusPage
