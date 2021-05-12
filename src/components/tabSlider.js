import React, { useEffect, useState } from 'react';
const Tabslider = () => {
    const [toggleState, settoggleState] = useState(1);
    const switchTab = (index) => {
        settoggleState(index);
    }
    useEffect(() => {
        setTimeout(() => {
            settoggleState(toggleState === 4 ? 1 : toggleState + 1)
        }, 10000)
    }, [toggleState])

    return (
        <div className="tabslider-container">
            <div className="tabContent-container">
                <div className={toggleState === 1 ? 'tabcontent active-content' : 'tabcontent'}>
                    <div className="image-wrapper">
                        <img style={{ width: '100%' }} src="sliderImages/1.jpg" alt="firstslider" />
                    </div>
                    <div className="animate-content">
                        <p className="animate-header">Lorem ipsum dolor sit amet.</p>
                        <p className="animate-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloremque!</p>
                        <button className="btn btn-danger animate-button shadow">Read More <i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>

                <div className={toggleState === 2 ? 'tabcontent active-content' : 'tabcontent'}>
                    <div className="image-wrapper">
                        <img style={{ width: '100%' }} src="sliderImages/2.jpg" alt="firstslider" />

                    </div>
                    <div className="animate-content">
                        <p className="animate-header">Lorem ipsum dolor sit amet.</p>
                        <p className="animate-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloremque!</p>
                        <button className="btn btn-danger animate-button shadow">Read More <i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>

                <div className={toggleState === 3 ? 'tabcontent active-content' : 'tabcontent'}>
                    <div className="image-wrapper">
                        <img style={{ width: '100%' }} src="sliderImages/3.jpg" alt="firstslider" />
                    </div>
                    <div className="animate-content">
                        <p className="animate-header">Lorem ipsum dolor sit amet.</p>
                        <p className="animate-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloremque!</p>
                        <button className="btn btn-danger animate-button shadow">Read More <i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>

                <div className={toggleState === 4 ? 'tabcontent active-content' : 'tabcontent'}>
                    <div className="image-wrapper">
                        <img style={{ width: '100%' }} src="/sliderImages/thirdslider.jpg" alt="slider" />
                    </div>
                    <div className="animate-content">
                        <p className="animate-header">Lorem ipsum dolor sit amet.</p>
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

export default Tabslider;