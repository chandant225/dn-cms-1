import React, { useState } from 'react';
const AnimatedTab = () => {
    const [toggleState, settoggleState] = useState(1);
    const switchTab = (index) => {
        settoggleState(index);
    }

    return (
        <div className="tabslider-container">
            <div className="tabContent-container">
                <div className={toggleState === 1 ? 'tabcontent active-content' : 'tabcontent'}>
                    <div className="image-wrapper">
                        <img src="png-files/sun3.png" alt="firstslider" className="first" />
                        <img style={{ width: '100%' }} src="png-files/eve.png" alt="secondslider" className="second" />
                        <img style={{ width: '100%' }} src="png-files/flowers.png" alt="secondslider" className="third" />
                        <img style={{ width: '100%' }} src="png-files/garden.png" alt="secondslider" className="forth" />
                        <img src="png-files/tree.png" alt="secondslider" className="fifth" />
                        <img src="png-files/cloud1.png" alt="secondslider" className="sixth" />
                        <img src="png-files/coconut.png" alt="secondslider" className="seventh" />
                        <img src="png-files/horse.gif" alt="secondslider" className="eight" />
                        <img src="png-files/mountain.png" alt="secondslider" className="nine" />
                    </div>
                    <div className="animate-content">
                        <h1 className="animate-header">Lorem ipsum dolor sit amet.</h1>
                        <p className="animate-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloremque!</p>
                        <button className="btn btn-danger animate-button shadow">Read More <i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>

                <div className={toggleState === 2 ? 'tabcontent active-content' : 'tabcontent'}>
                    <div className="image-wrapper">
                        <img style={{ width: '100%' }} src="sliderImages/secondslider.jpg" alt="firstslider" />

                    </div>
                    <div className="animate-content">
                        <h1 className="animate-header">Lorem ipsum dolor sit amet.</h1>
                        <p className="animate-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloremque!</p>
                        <button className="btn btn-danger animate-button shadow">Read More <i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>

                <div className={toggleState === 3 ? 'tabcontent active-content' : 'tabcontent'}>
                    <div className="image-wrapper">
                        <img style={{ width: '100%' }} src="sliderImages/thirdslider.jpg" alt="firstslider" />
                    </div>
                    <div className="animate-content">
                        <h1 className="animate-header">Lorem ipsum dolor sit amet.</h1>
                        <p className="animate-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloremque!</p>
                        <button className="btn btn-danger animate-button shadow">Read More <i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>

                <div className={toggleState === 4 ? 'tabcontent active-content' : 'tabcontent'}>
                    <div className="image-wrapper">
                        {/* <img style={{ width: '100%' }} src="sliderImages/secondslider.jpg" alt="secondslider" /> */}
                        <img style={{ width: '100%' }} src="png-files/flowers.png" alt="secondslider" />
                    </div>
                    <div className="animate-content">
                        <h1 className="animate-header">Lorem ipsum dolor sit amet.</h1>
                        <p className="animate-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloremque!</p>
                        <button className="btn btn-danger animate-button shadow-lg">Read More <i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="tab">
                    <button
                        onClick={() => switchTab(1)}
                        className={toggleState === 1 ? 'tablinks active-tab' : 'tablinks'}>Schools</button>
                    <button
                        onClick={() => switchTab(2)}
                        className={toggleState === 2 ? 'tablinks active-tab' : 'tablinks'} >Facilities</button>
                    <button
                        onClick={() => switchTab(3)}
                        className={toggleState === 3 ? 'tablinks active-tab' : 'tablinks'}>Admission</button>
                    <button
                        onClick={() => switchTab(4)}
                        className={toggleState === 4 ? 'tablinks active-tab' : 'tablinks'}>Acedemics</button>
                </div>
            </div>
        </div>
    );
}

export default AnimatedTab;



      // .image-wrapper {
            //     display: flex;

            //     img.first {
            //         width: 10%;
            //         height: 22%;
            //         opacity: 1;
            //         right: 0;
            //         top: 16px;
            //         position: absolute;
            //         animation: rotatesun 10s linear 0.5s infinite normal both;
            //     }

            //     @keyframes rotatesun {
            //         0% {
            //             transform: rotate(0);
            //         }

            //         100% {
            //             transform: rotate(180deg);
            //         }
            //     }


            //     img.second {
            //         height: 610px;
            //     }

            //     img.third {
            //         position: absolute;
            //         width: 100%;
            //         left: 0px;
            //         bottom: -25px;
            //         z-index: 5;
            //     }

            //     img.forth {
            //         width: 100%;
            //         position: absolute;
            //         top: -252px;
            //         z-index: 1;
            //     }

            //     img.fifth {
            //         width: 30%;
            //         position: absolute;
            //         top: 30px;
            //         left: -28px;
            //         z-index: 1;
            //     }

            //     img.sixth {
            //         z-index: 0;
            //         width: 15%;
            //         top: 0;
            //         opacity: 0.8;
            //         left: 0rem;
            //         position: absolute;
            //         animation: movecloud 30s ease-in 0.5s infinite normal both;
            //     }

            //     @keyframes movecloud {
            //         0% {
            //             left: 0;
            //         }

            //         100% {
            //             left: 100rem;
            //         }
            //     }

            //     img.seventh {
            //         position: absolute;
            //         right: 46px;
            //         top: 40px;
            //         z-index: 1;
            //     }


            //     img.eight {
            //         position: absolute;
            //         width: 20%;
            //         top: 242px;
            //         right: 0;
            //         z-index: 5;
            //         height: 20%;
            //         animation: horse-running 10s linear 0.5s infinite normal both;
            //     }

            //     @keyframes horse-running {
            //         0% {
            //             right: 0;
            //         }

            //         100% {
            //             right: 1100px;
            //         }
            //     }

            //     img.nine {
            //         width: 100%;
            //         position: absolute;
            //         top: -150px;
            //         z-index: 0;
            //     }




            //     @media screen and (max-width: 768px) {
            //         img {
            //             height: 100%;
            //         }
            //     }
            // }