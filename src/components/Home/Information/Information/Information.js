import React from 'react';
import InformationCol from '../InformationCol/InformationCol';
import sessionImg from '../../../../images/session.jpg';
import timeImg from '../../../../images/time.jpg';
import phoneImg from '../../../../images/phone.jpg';
import locationImg from '../../../../images/location.jpg';

const Information = () => {
    const postalAddress = [
        { 'name': 'Unica Event Agency' },
        { 'name': '85 Fentiman Ave' },
        { 'name': 'Ottawa, ON K1S 0T7' }
    ]

    const phoneEmail = [
        { 'name': 'Phone: 1-800-64-38' },
        { 'name': 'Fax: 1-800-64-39' },
        { 'name': 'office@fable.com' }
    ]

    const openHours = [
        { 'name': 'Monday – Friday' },
        { 'name': '8.00 am – 5.00 pm' },
        { 'name': 'Weekend Closed' }
    ]

    const sessions = [
        { 'name': 'Mornings, 8 am – 12 noon' },
        { 'name': 'Afternoons, 1 pm – 5 pm' },
        { 'name': 'Full Day, 8 am – 5 pm' }
    ]
    return (
        <div className="container pt-5 pb-5">
            <div  className="row pt-5 pb-5">
                <InformationCol key={1} menuTitle={"Postal Address"} menuImg={locationImg} menuItems={postalAddress}></InformationCol>
                <InformationCol key={2} menuTitle={"Phone & E-mail"} menuImg={phoneImg} menuItems={phoneEmail}></InformationCol>
                <InformationCol key={3} menuTitle={"Open Hours"} menuImg={timeImg} menuItems={openHours}></InformationCol>
                <InformationCol key={4} menuTitle={"Sessions"} menuImg={sessionImg} menuItems={sessions}></InformationCol>
            </div>
        </div>
    );
};

export default Information;