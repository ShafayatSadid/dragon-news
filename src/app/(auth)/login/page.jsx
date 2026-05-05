'use client'
import Link from 'next/link';
import { useForm } from 'react-hook-form';


const LoginPage = () => {

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
                <fieldset className="fieldset mt-5">
                    <legend className="fieldset-legend text-[1.25rem] font-semibold ">Email address</legend>
                    <input {...register("email", { required: 'Email is required' })}
                        type="email" className="input w-full" placeholder="Enter your email address" />
                        {errors.email &&(
                            <p className='text-red-500'>{errors.email.message}</p>
                        )}
                </fieldset>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-[1.25rem] font-semibold ">Password</legend>
                    <input {...register("password", { required: "Password is required" })}
                        type="password" className="input w-full" placeholder="Enter your Password" />

                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </fieldset>

                <input className='btn btn-block bg-black text-white mt-5.5' type="submit" value="Login" />
            </form>

            <p className='text-[0.785rem] text-center mt-8'>Don't Have An Account ? <Link className='text-red-500' href={'/register'}>Register</Link> </p>
        </div>
    );
};

export default LoginPage;