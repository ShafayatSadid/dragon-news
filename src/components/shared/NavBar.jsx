'use client'
import Image from 'next/image';
import Link from 'next/link';
import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const NavBar = () => {
    // get session user id
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    console.log(session, 'session:');
    return (
        <div className='mt-[34px] flex justify-between items-center max-w-[1140px] mx-auto'>

            {/* fake div */}
            <div></div>
            {/* menu */}
            <ul className='flex gap-4 text-[#706F6F]'>
                <li>
                    <NavLink href={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink href={'/career'}>Career</NavLink>
                </li>
            </ul>

            {/* user details */}

            {
                isPending ? <div><span className="loading loading-ring loading-md"></span></div> :
                    user ? <div className='flex items-center gap-2'>
                        <h2>Hello, {user?.name}</h2>
                        <Image src={user.image} width={41} height={41} alt='user Photo' />
                        <Link href={''}>
                            <button onClick={async () => await authClient.signOut()} className='btn px-[23px] bg-blue-500 text-white'>Log out</button>
                        </Link>

                    </div>
                        :
                        <div className='flex items-center gap-2'>

                            <Image src={userAvatar} width={41} height={41} alt='user Photo' />
                            <Link href={'/login'}>
                                <button className='btn px-[23px] bg-blue-500 text-white'>Login</button>
                            </Link>

                        </div>
            }

        </div>
    );
};

export default NavBar;