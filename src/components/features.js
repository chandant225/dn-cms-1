import React from 'react';
const Features = () => {
    return (
        <div className="features-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card shadow">
                            <h4>Professional Courses</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, accusantium!</p>
                            <button className="btn btn-danger shadow">Readmore</button>
                            <div className="overlapping-Box shadow">
                                <img style={{ width: '68%' }} src="/png-files/drawing.png" alt="drawing" />
                            </div>
                            <div style={{ backgroundColor: '#e91e63a6' }} className="animated-outline-right"></div>
                            <div style={{ backgroundColor: '#e91e63a6' }} className="animated-outline-down"></div>
                            <div style={{ backgroundColor: '#e91e63a6' }} className="animated-outline-top"></div>
                            <div style={{ backgroundColor: '#e91e63a6' }} className="animated-outline-left"></div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card shadow">
                            <h4>Expert Teachers</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, accusantium!</p>
                            <button className="btn btn-danger shadow">Readmore</button>
                            <div className="overlapping-Box shadow">
                                <img style={{ width: '68%' }} src="/png-files/books.png" alt="books" />
                            </div>
                            <div style={{ backgroundColor: 'blueviolet' }} className="animated-outline-right"></div>
                            <div style={{ backgroundColor: 'blueviolet' }} className="animated-outline-down"></div>
                            <div style={{ backgroundColor: 'blueviolet' }} className="animated-outline-top"></div>
                            <div style={{ backgroundColor: 'blueviolet' }} className="animated-outline-left"></div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card shadow">
                            <h4>Creative lesson</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, accusantium!</p>
                            <button className="btn btn-danger shadow">Readmore</button>
                            <div style={{ padding: '21px 0px 0px 0px' }} className="overlapping-Box shadow">
                                <img style={{ width: '82%' }} src="/png-files/abc.png" alt="abc" />
                            </div>
                            <div style={{ backgroundColor: 'yellow' }} className="animated-outline-right"></div>
                            <div style={{ backgroundColor: 'yellow' }} className="animated-outline-down"></div>
                            <div style={{ backgroundColor: 'yellow' }} className="animated-outline-top"></div>
                            <div style={{ backgroundColor: 'yellow' }} className="animated-outline-left"></div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card shadow">
                            <h4>Online Learning</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, accusantium!</p>
                            <button className="btn btn-danger shadow">Readmore</button>
                            <div className="overlapping-Box shadow">
                                <img style={{ width: '82%' }} src="/png-files/computer.png" alt="computer" />
                            </div>
                            <div style={{ backgroundColor: 'green' }} className="animated-outline-right"></div>
                            <div style={{ backgroundColor: 'green' }} className="animated-outline-down"></div>
                            <div style={{ backgroundColor: 'green' }} className="animated-outline-top"></div>
                            <div style={{ backgroundColor: 'green' }} className="animated-outline-left"></div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Features;