import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handelBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const onSubmit = (data, e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);
        formData.append('price', info.price);

        fetch('https://rocky-plains-06049.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if(result){
                    e.target.reset();
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    const headingColor = { color: '#3A4256' };
    return (
        <div className="ps-3">
            <h4 className="ps-2 pt-3 pb-5" style={headingColor}>Add Service</h4>
            <div className="card" style={{ width: '90%' }}>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group pb-3">
                            <label htmlFor="title" className="pb-2">Event Title</label>
                            <input type="text" name="title" placeholder="Event Title" id="title" className="form-control" onBlur={handelBlur} />
                        </div>
                        <div className="form-group pb-3">
                            <label htmlFor="description" className="pb-2">Description</label>
                            <input type="text" name="description" placeholder="Event Description" id="description" className="form-control" onBlur={handelBlur} />
                        </div>
                        <div className="form-group pb-3">
                            <label htmlFor="price" className="pb-2">Price</label>
                            <input type="text" name="price" placeholder="Event Price" id="price" className="form-control" onBlur={handelBlur} />
                        </div>
                        <div className="form-group pb-5">
                            <label htmlFor="img" className="pb-2">Image</label>
                            <input type="file" name="img" id="img" className="form-control" onChange={handleFileChange} />
                        </div>
                        <div className="form-group pb-3">
                            <input type="submit" name="submit" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;