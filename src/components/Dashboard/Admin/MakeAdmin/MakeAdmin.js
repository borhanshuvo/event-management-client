import { useForm } from 'react-hook-form';
import './MakeAdmin.css';
import swal from 'sweetalert';
import toast from 'react-hot-toast';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        const loading = toast.loading('Please wait...!');
        data.created = new Date();

        fetch('https://rocky-plains-06049.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.dismiss(loading);
                if (result) {
                    e.target.reset();
                    return swal("Admin Added", "Admin has been added successful.", "success");
                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
            .catch(error => {
                toast.dismiss(loading);
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
    }

    const headingColor = { color: '#3A4256' };
    return (
        <div className="ps-3">
            <h4 className="ps-2 pt-3 pb-5" style={headingColor}>Add Admin</h4>
            <div className="card make-admin-card-style">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group pb-3">
                            <label htmlFor="email" className="pb-2">Email</label>
                            <input type="email" name="email" placeholder="Valid Email Address" aria-invalid={errors.email ? "true" : "false"} {...register('email', { required: true })} id="email" className="form-control" />
                            {errors.email && (<span role="alert" className="text-danger"> This field is required </span>)}
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

export default MakeAdmin;