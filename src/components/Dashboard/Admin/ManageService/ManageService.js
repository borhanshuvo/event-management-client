import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://rocky-plains-06049.herokuapp.com/serviceList')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const deleteService = (id) => {
        fetch(`https://rocky-plains-06049.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    const newService = services.filter(service => service._id !== id);
                    setServices(newService);
                }
            })
    }

    const headingColor = { color: '#3A4256' };
    return (
        <div>
            <h4 className="pt-3 pb-5 ps-3" style={headingColor}>Manage Service</h4>
            <div className="container">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Event Title</th>
                            <th scope="col">Event Description</th>
                            <th scope="col">Event Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map(service => (
                                <tr key={service._id}>
                                    <td>{service.title}</td>
                                    <td>{service.description}</td>
                                    <td>{service.price}</td>
                                    <td><button style={{ border: 'none' }} onClick={() => deleteService(service._id)}><FontAwesomeIcon style={{ color: 'red' }} icon={faTrash} /></button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageService;