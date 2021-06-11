import React from 'react';
import eventImg from '../../../images/event.png';

const HeaderMain = () => {
    const btnDesign = { fontSize: '20px', backgroundImage: 'linear-gradient(90deg, #19D3AF, #0FCFEA)', border: 'none', padding: '15px 30px', color: 'white', borderRadius: '10px' };
    const textColor2 = { color: '#b4b5b5' };
    const headingColor = { color: '#3A4256' };
    const textColor = { color: '#3A3056' };
    return (
        <main className="bg-light pb-5 pt-5">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-6 pb-5">
                        <div className="pt-5">
                            <h1 className="pb-5" style={headingColor}>WE CREATE <br /> YOU CELEBRATE</h1>
                            <p className="pb-5" style={textColor}>The process of planning and coordinating the event is usually referred to as event planning and which can include budgeting, scheduling, site selection, acquiring necessary permits, coordinating transportation and parking, arranging for speakers or entertainers, arranging decor, event security, catering, coordinating with third-party vendors, and emergency plans.</p>
                            <button style={btnDesign}>Book Now</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={eventImg} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;