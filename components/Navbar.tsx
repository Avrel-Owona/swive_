import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <header className="absolute w-full flex justify-between py-5 px-10">
                <Link href="/">
                    <h1 className="font-bold text-xl text-gray-100 cursor-pointer">Swive</h1>
                </Link>
                <nav>
                    <ul className='flex'>
                        <Link href="/auth/login">
                            <li className='text-gray-100 pr-5 cursor-pointer'>Login</li>
                        </Link>
                        <Link href="/auth/register">
                            <li className='text-gray-100  cursor-pointer'>Register</li>
                        </Link>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;