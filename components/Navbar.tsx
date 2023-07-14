"use client"
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className='flexBetween navbar'>
            <div className='flex-1 flex-start gap-10'>
                <Link href="/">
                    <Image src="/logo.svg" width={115} height={43} alt="Flexibble" />
                </Link>
                <ul className='xl:flex hidden text-sm gap-7'>
                    <li></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
