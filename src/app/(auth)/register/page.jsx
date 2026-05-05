'use client'
import { useForm } from 'react-hook-form';

const RegistrationPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    console.log(errors, 'errors:')
    
    const getSubmit = (data) => {
        console.log(data, 'data')
    }

    return (
        <div onSubmit={handleSubmit(getSubmit)} className='max-w-[400px] mx-auto my-[134px]'>
            <h2 className='text-[2rem] font-semibold mb-10 text-center'>Login your account</h2>
            <hr />
            <form>
                {/* name */}
                <fieldset className="fieldset mt-5">
                    <legend className="fieldset-legend text-[1.25rem] font-semibold ">Full Name</legend>
                    <input {...register("name", { required: 'First name is required' })}
                        type="text" className="input w-full" placeholder="Enter your first name" />
                    {errors.name && (
                        <p className='text-red-500'>{errors.name.message}</p>
                    )}
                </fieldset>

                {/* last name */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-[1.25rem] font-semibold ">Last Name</legend>
                    <input {...register("last", { required: "Last name is required" })}
                        type="text" className="input w-full" placeholder="Enter your last name" />

                    {errors.last && <p className='text-red-500'>{errors.last.message}</p>}
                </fieldset>

                {/* email */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-[1.25rem] font-semibold ">Email address</legend>
                    <input {...register("email", { required: 'Email is required' })}
                        type="email" className="input w-full" placeholder="Enter your email address" />
                    {errors.email && (
                        <p className='text-red-500'>{errors.email.message}</p>
                    )}
                </fieldset>

                {/* password */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-[1.25rem] font-semibold ">Password</legend>
                    <input {...register("password", { required: "Password is required" })}
                        type="password" className="input w-full" placeholder="Enter your Password" />

                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </fieldset>

                <input className='btn btn-block bg-black text-white mt-5.5' type="submit" value="Register" />
            </form>

        </div>
    );
};

export default RegistrationPage;