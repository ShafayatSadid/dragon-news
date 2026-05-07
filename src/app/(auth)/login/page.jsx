'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';


const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    // password toggle system
    const [isShowPassword, setIsShowPassword] = useState(false);

    // get user data
    const getSubmit = async (userData) => {

        const { email, password } = userData;
        const { data, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            alert(`${error.message}`)
        }
        else {
            alert('Login successfully')
        }
    }
    return (
        <div className='max-w-[400px] mx-auto my-[134px]'>
            <h2 className='text-[2rem] font-semibold mb-10 text-center'>Login your account</h2>
            <hr />
            <form onSubmit={handleSubmit(getSubmit)}>
                {/* email */}
                <fieldset className="fieldset mt-5">
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

                <input className='btn btn-block bg-black text-white mt-5.5' type="submit" value="Login" />
            </form>

            <p className='text-[0.785rem] text-center mt-8'>Don't Have An Account ? <Link className='text-red-500' href={'/register'}>Register</Link> </p>
        </div>
    );
};

export default LoginPage;