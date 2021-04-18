import React from 'react';

const Contact = () => {
    const headingColor = { color: '#3A4256' };
    const textColor = { color: '#3A3056' };
    const btnDesign = { width: '30%', backgroundImage: 'linear-gradient(90deg, #19D3AF, #0FCFEA)', border: 'none', padding: '10px', color: 'white', borderRadius: '10px' };
    return (
        <div className="bg-light pb-5 pt-5">
            <h4 className="text-center pt-5 pb-2" style={textColor}><u>Contact Us</u></h4>
            <h1 className="text-center pb-5" style={headingColor}>Always Connect with us</h1>
            <div className="pb-5">
                <div className="card m-auto" style={{ width: '50%' }}>
                    <form>
                        <div className="card-body">
                            <div class="mb-3">
                                <label for="name" class="form-label" style={textColor}>Name</label>
                                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label" style={textColor}>E-mail</label>
                                <input type="text" name="email" class="form-control" id="email" placeholder="Your E-mail" />
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label" style={textColor}>Phone Number</label>
                                <input type="text" name="phone" class="form-control" id="phone" placeholder="Your Phone Number" />
                            </div>
                            <div class="mb-5">
                                <label for="message" class="form-label" style={textColor}>Message</label>
                                <textarea name="message" id="message" class="form-control" rows="5" placeholder="Your Message"></textarea>
                            </div>
                            <div class="mb-3 d-flex justify-content-center">
                                <input style={btnDesign} type="submit" value="SEND" name="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;