import Image from 'next/image';
import Link from 'next/link';
import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';

const NavBar = () => {
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
            <div className='flex items-center gap-1'>
                <Image src={userAvatar} width={41} height={41} alt='user Photo' />
                <Link href={'/login'}>
                    <button className='btn px-[43px] bg-[#403F3F] text-white'>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;