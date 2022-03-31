import React from 'react';
const Counter = () => {
    return (
        <div style={{ backgroundImage: 'url("background/pencils.jpg")' }} className="counter-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card shadow">
                            <div className="img-wrapper">
                                <img style={{ width: "68%" }} src="png-files/teacher.png" alt="teacher" />
                            </div>
                            <h3>
                                qualified teachers
                           </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, facilis.</p>
                            <h2>555</h2>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card shadow">
                            <div className="img-wrapper">
                                <img style={{ width: "100%" }} src="png-files/trophy.png" alt="teacher" />
                            </div>
                            <h3>
                                Awards
                           </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, facilis.</p>
                            <h2>555</h2>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card shadow">
                            <div className="img-wrapper">
                                <img style={{ width: "68%" }} src="png-files/books.png" alt="teacher" />
                            </div>
                            <h3>
                                faculties
                           </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, facilis.</p>
                            <h2>555</h2>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card shadow">
                            <div className="img-wrapper">
                                <img style={{ width: "59%" }} src="png-files/students.png" alt="teacher" />
                            </div>
                            <h3>
                                students
                           </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, facilis.</p>
                            <h2>555</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;
