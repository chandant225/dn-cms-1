import React, { useState } from 'react';
const Testimonials = () => {
    const [togglestate, settoggleState] = useState(1);
    const switchtab = (index) => {
        settoggleState(index);
    }
    return (
        <div className="testimonials-wrapper">
            <div className="container shadow">
                <div className="testimonials-container">

                    <div className="right-container">
                        <div onClick={() => switchtab(1)} className={togglestate === 1 ? 'img-button active-btn' : 'img-button'}>
                            <img src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="hello.jpg" />
                        </div>
                        <div onClick={() => switchtab(2)} className={togglestate === 2 ? 'img-button active-btn' : 'img-button'}>
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="hello.jpg" />
                        </div>
                        <div onClick={() => switchtab(3)} className={togglestate === 3 ? 'img-button active-btn' : 'img-button'}>
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="hello.jpg" />
                        </div>
                        <div onClick={() => switchtab(4)} className={togglestate === 4 ? 'img-button active-btn' : 'img-button'}>
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="hello.jpg" />
                        </div>
                        <div onClick={() => switchtab(5)} className={togglestate === 5 ? 'img-button active-btn' : 'img-button'}>
                            <img src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="hello.jpg" />
                        </div>
                        <div onClick={() => switchtab(6)} className={togglestate === 6 ? 'img-button active-btn' : 'img-button'}>
                            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="hello.jpg" />
                        </div>
                        <div onClick={() => switchtab(7)} className={togglestate === 7 ? 'img-button active-btn' : 'img-button'}>
                            <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="hello.jpg" />
                        </div>
                        <div onClick={() => switchtab(8)} className={togglestate === 8 ? 'img-button active-btn' : 'img-button'}>
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="hello.jpg" />
                        </div>
                    </div>
                    <div className="left-container">
                        <div className="upper-box" style={{ padding: '12px 2px 2px 30px' }}>
                            <p style={{ fontSize: "3rem" }}>client Testimonials</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime autem repellat hic magnam atque veniam tempora ullam quam officiis modi consequatur, iste omnis numquam quia suscipit, quaerat aut fugit natus.</p>
                        </div>
                        <div className="overlapping-box">
                            <span><i className="fas fa-link"></i></span>
                        </div>
                        <div className="lower-box bg-danger">
                            <div className={togglestate === 1 ? 'testimonials-box active-content' : 'testimonials-box'}>
                                <h4>kathie murphy</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab quasi ullam quaerat tenetur temporibus.</p>
                            </div>
                            <div className={togglestate === 2 ? 'testimonials-box active-content' : 'testimonials-box'}>
                                <h4>lisa hathway</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab quasi ullam quaerat tenetur temporibus.</p>
                            </div>
                            <div className={togglestate === 3 ? 'testimonials-box active-content' : 'testimonials-box'}>
                                <h4>catherine geller</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab quasi ullam quaerat tenetur temporibus.</p>
                            </div>
                            <div className={togglestate === 4 ? 'testimonials-box active-content' : 'testimonials-box'}>
                                <h4>aidan flores</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab quasi ullam quaerat tenetur temporibus.</p>
                            </div>
                            <div className={togglestate === 5 ? 'testimonials-box active-content' : 'testimonials-box'}>
                                <h4>john snow</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab quasi ullam quaerat tenetur temporibus.</p>
                            </div>
                            <div className={togglestate === 6 ? 'testimonials-box active-content' : 'testimonials-box'}>
                                <h4>angelique ward</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab quasi ullam quaerat tenetur temporibus.</p>
                            </div>
                            <div className={togglestate === 7 ? 'testimonials-box active-content' : 'testimonials-box'}>
                                <h4>hector cox</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab quasi ullam quaerat tenetur temporibus.</p>
                            </div>
                            <div className={togglestate === 8 ? 'testimonials-box active-content' : 'testimonials-box'}>
                                <h4>phoebe miller</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab quasi ullam quaerat tenetur temporibus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;