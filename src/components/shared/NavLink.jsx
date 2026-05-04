'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const NavLink = ({ href, children }) => {
    // current menu higlight korar jonno sohoj system. first e NavBar theke link gulare props akare alada ekta Link component e niye asalagbe.
    // 1. get pathname
    const pathName = usePathname()
    // 2. check isActive Path
    const isActive = href === pathName;
    // 3. implement the class
    return (
        <Link className={`${isActive? 'border-b-2 border-b-[#706F6F]':''}`} href={href}>{children}</Link>
    );
};

export default NavLink;