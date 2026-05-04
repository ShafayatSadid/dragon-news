import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center gap-4'>

            <h2 className='text-5xl font-bold text-center text-purple-500'>This Page is Not Found</h2>

            <Link href={'/'}>
            <button className='btn bg-purple-500 text-white'>Got to Home</button></Link>
        </div>
    );
};

export default NotFoundPage;