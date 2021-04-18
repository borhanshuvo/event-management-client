import { faFacebookSquare, faInstagramSquare, faLinkedinIn, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const noNamed = [
        { 'name': 'H#000(5th Floor), Road #12', link: '/flore' },
        { 'name': 'Chandpur, Chittagong, Bangladesh', link: '/location' }
    ]

    const company = [
        { 'name': 'About', link: '/about' },
        { 'name': 'Project', link: '/project' },
        { 'name': 'Our Team', link: '/team' },
        { 'name': 'Terms Condition', link: '/condition' },
        { 'name': 'Submit Listing', link: '/listing' }
    ]

    const quick_links = [
        { 'name': 'Quick Links', link: '/quick-links' },
        { 'name': 'Rentals', link: '/rentals' },
        { 'name': 'Sales', link: '/sales' },
        { 'name': 'Contact', link: '/contact' },
        { 'name': 'Our Blog', link: '/blog' }
    ]

    const about_us = [
        { 'name': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', link: '/aboutus' }
    ]

    return (
        <div className="pt-5 bg-light">
            <div style={{ backgroundColor: '#251D58' }}>
                <div className="container pb-5">
                    <div className="row pt-5 pb-5 text-white">
                        <FooterCol key={1} menuTitle={""} menuItems={noNamed}></FooterCol>
                        <FooterCol key={2} menuTitle={"Company"} menuItems={company}></FooterCol>
                        <FooterCol key={3} menuTitle={"Quick Links"} menuItems={quick_links}></FooterCol>
                        <FooterCol key={4} menuTitle={"About Us"} menuItems={about_us}>
                            <span className="pe-3 fs-2"><a href="https://web.facebook.com/" Target="_blank"><FontAwesomeIcon icon={faFacebookSquare} /></a></span>
                            <span className="pe-3 fs-2"><a href="https://twitter.com/"><FontAwesomeIcon icon={faInstagramSquare} /></a></span>
                            <span className="pe-3 fs-2"><a href="https://bd.linkedin.com/"><FontAwesomeIcon icon={faLinkedinIn} /></a></span>
                            <span className="pe-3 fs-2"><a href="https://www.instagram.com/"><FontAwesomeIcon icon={faTwitterSquare} /></a></span>
                        </FooterCol>
                    </div>
                </div>
                <div className="copyRight text-center pb-3 text-white">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;