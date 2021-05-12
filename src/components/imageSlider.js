import React, { useState } from 'react';
import { sliderData } from './sliderData';

const Imageslider = () => {
    const [current, setCurrent] = useState(0);
    const length = sliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(sliderData) || sliderData.length <= 0) {
        return null;
    }
    return (
        <section className="slidesContainer">
            <span className="prev" onClick={prevSlide}><i className="fas fa-chevron-left"></i></span>
            <span className="next" onClick={nextSlide}><i className="fas fa-chevron-right"></i></span>
            {sliderData.map((sliderimage, index) => {
                return (
                    <div key={index} className={index === current ? 'slide active' : 'slide'}>
                        {index === current && (
                            <img style={{ width: "100%" }} src={sliderimage.image} alt='images' />
                        )}
                    </div>
                )
            })}
        </section>



    );
}

export default Imageslider;

// .slider-container {
//     section.slidesContainer {
//         position: relative;
//         margin: auto;
//         display: flex;
//         height: 500px;

//         /* Next & previous buttons */
//         .prev,
//         .next {
//             cursor: pointer;
//             position: absolute;
//             top: 50%;
//             width: auto;
//             padding: 16px;
//             margin-top: -22px;
//             color: white;
//             font-weight: bold;
//             font-size: 18px;
//             transition: 0.6s ease;
//             border-radius: 0 3px 3px 0;
//             user-select: none;
//         }

//         /* Position the "next button" to the right */
//         .next {
//             right: 0;
//             border-radius: 3px 0 0 3px;
//         }

//         /* On hover, add a black background color with a little bit see-through */
//         .prev:hover,
//         .next:hover {
//             background-color: rgba(0, 0, 0, 0.8);
//         }

//         .slide.active {
//             -webkit-animation-name: fade;
//             -webkit-animation-duration: 1.5s;
//             animation-name: fade;
//             animation-duration: 1.5s;

//             img {
//                 height: 500px;
//                 object-fit: cover;
//             }

//             @media screen and (max-width:768px) {
//                 img {
//                     height: 100%;
//                 }
//             }
//         }

//         @-webkit-keyframes fade {
//             from {
//                 opacity: .4
//             }

//             to {
//                 opacity: 1
//             }
//         }

//         @keyframes fade {
//             from {
//                 opacity: .4
//             }

//             to {
//                 opacity: 1
//             }
//         }
//     }

//     @media screen and (max-width:768px) {
//         section.slidesContainer {
//             height: 100%;
//         }
//     }
// }