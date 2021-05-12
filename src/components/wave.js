import React from 'react';

const Wave = () => {

    return (
        <section>
            <div className="wave" id="wave1" style={{ "--i": 1, backgroundImage: 'url("png-files/wave.png")' }}></div>
            <div className="wave" id="wave2" style={{ "--i": 2, backgroundImage: 'url("png-files/wave.png")' }}></div>
            <div className="wave" id="wave3" style={{ "--i": 3, backgroundImage: 'url("png-files/wave.png")' }}></div>
            <div className="wave" id="wave4" style={{ "--i": 4, backgroundImage: 'url("png-files/wave.png")' }}></div>
        </section>
    );
}

export default Wave;
