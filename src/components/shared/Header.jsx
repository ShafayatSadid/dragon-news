import logo from '@/assets/logo.png'
import { format } from 'date-fns';
import Image from 'next/image';
const Header = () => {
    return (
        <div className='mt-[50px] space-y-5 text-center text-[#706F6F]'>
            <Image src={logo} 
            width={300} height={60} alt='logo' 
            className='mx-auto md:w-[471px]' />
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;