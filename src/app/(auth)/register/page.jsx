'use client'
import { authClient } from '@/lib/auth-client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

const RegistrationPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    // console.log(errors, 'errors:')

    // password toggle system
    const [isShowPassword, setIsShowPassword] = useState(false);

    // get user data method
    const getSubmit = async (userData) => {
        const { name, last, profile, email, password } = userData


        // register function
        const { data, error } = await authClient.signUp.email({
            name: name, // required

            image: profile,
            email: email, // required
            password: password, // required
            callbackURL: "/",
        });

        console.log({ data, error }, 'data:')

        if (error) {
            alert(`${error.message}`)
        }
        else {
            alert('Sign up successfully')
        }
    }

    return (
        <div onSubmit={handleSubmit(getSubmit)} className='max-w-[400px] mx-auto my-[134px]'>
            <h2 className='text-[2rem] font-semibold mb-10 text-center'>Register your account</h2>
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

                {/* profile avatar */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-[1.25rem] font-semibold ">Profile URL</legend>
                    <input {...register("profile", { required: "Profile photo is required" })}
                        type="text" className="input w-full" placeholder="Enter your profile url" />

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
                <fieldset className="fieldset relative">
                    <legend className="fieldset-legend text-[1.25rem] font-semibold ">Password</legend>
                    <input {...register("password", { required: "Password is required" })}
                        type={isShowPassword ? 'text' : 'password'} className="input w-full" placeholder="Enter your Password" />

                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    <span onClick={() => setIsShowPassword(!isShowPassword)} className='text-[1rem] absolute right-3 top-4'>
                        {isShowPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                    </span>
                </fieldset>

                <input className='btn btn-block bg-black text-white mt-5.5' type="submit" value="Register" />
            </form>

        </div>
    );
};

export default RegistrationPage;