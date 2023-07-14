import { footerLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


// created a ColumnProps for TS => must make sure to define what is being passed in and that it's typed correctly
type ColumnProps = {
    title: string,
    links: Array<string>;
}

// utility component that doesn't need to have its own file (only being used within the footer)
const FooterColumn = ({ title, links }: ColumnProps) => (
    <div className='footer_column'>
        <h4 className='font-semibold'>
            {title}
        </h4>
        <ul className='flex flex-col gap-2 font-normal'>
            {links.map((link) => <Link href="/" key={link}>{link}</Link>)}
        </ul>
    </div>
)

const Footer = () => {
    return (
        <footer className='flex-start footer'>
            <div className='flex flex-col gap-12 w-full'><div className='flex items-start flex-col'>
                <Image src="/logo-purple.svg" width={115} height={38} alt='Flexibble' />
                <p className='text-start text-sm font-normal mt-5 max-w-xs'>Flexibble is the world's leading community for creatives to share, grow and get hired.</p>
                <div className='flex flex-wrap gap-12'><FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} /></div>
            </div>
            </div>
        </footer>
    )
}

export default Footer;
