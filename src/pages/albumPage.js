import React from 'react';

const AlbumPage = () => {
    return (
        <div className="albumPage-wrapper">
            <center>
                <h3>Awardshow album</h3>
            </center>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="card">
                            <img style={{ width: "100%" }} src="/sliderImages/firstslider.jpg" className="card-img-top" alt="dbcdc" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="card">
                            <img style={{ width: "100%" }} src="/sliderImages/firstslider.jpg" className="card-img-top" alt="dbcdc" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="card">
                            <img style={{ width: "100%" }} src="/sliderImages/firstslider.jpg" className="card-img-top" alt="dbcdc" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="card">
                            <img style={{ width: "100%" }} src="/sliderImages/firstslider.jpg" className="card-img-top" alt="dbcdc" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlbumPage;

