import React from 'react';
const Welcome = () => {
    return (
        // <div style={{ backgroundImage: 'url("png-files/watergif2.gif")', backgroundSize: 'contain' }} className="welcome-wrapper">
        <div style={{ background: "white" }} className="welcome-wrapper">
            {/* <img src="png-files/watergif2.gif" alt="bricks" className="parallax" />
        {
            window.addEventListener("scroll", () => {
                const parallax = document.querySelector('.parallax');
                let scrollposition = window.pageYOffset;
                parallax.style.transform = 'translateY(' + scrollposition * -.2 + 'px)';
            })
        } */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div style={{ color: "#0a0808d1" }} className="content-wrapper">
                            <p style={{ fontSize: "3rem" }}>Welcome to our School</p>
                            <p style={{ marginTop: "15px" }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis itaque quisquam nesciunt recusandae quidem eos voluptatem fugit pariatur quasi reprehenderit temporibus non exercitationem, facilis impedit voluptate expedita error mollitia maxime dignissimos? Natus harum quod esse!
                     </p>
                            <button style={{ marginTop: '10px' }} className="shadow">
                                Readmore
                    </button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="img-wrapper">
                            <img style={{ width: '100%' }} src="/png-files/backtoschool.png" alt="children" />
                        </div>
                    </div>
                </div>
                {/* <div className="fishes">
                    <div>
                        <img style={{ width: '30%' }} src="/png-files/fish3.gif" alt="blue-fish" />
                    </div>
                    <div>
                        <img style={{ width: '30%' }} src="/png-files/gold-fish.png" alt="gold-fish" />
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Welcome;