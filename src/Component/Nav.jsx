import headerLogo from '../assets/images/header-logo.svg';
import {navLinks} from "../constants/index.js";
import {hamburger} from "../assets/icons/index.js";
import {useState} from "react";
export const Nav = () => {
    const [isOpen,setIsOpen]=useState(false);
    return (
        <header className="w-full z-10">
            <nav className=" max-container padding-x  py-6 flex justify-between">
                <a href="/public" className="flex text-lg items-center justify-center gap-2 ">
                    <img src={headerLogo} alt="Logo"/>
                </a>
                {/* Desktop devices */}
                <div className="hidden lg:flex space-x-8 px-4 py-7 ">
                    {
                        navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-lg font-palanquin text-slate-gray px-2 py-1 rounded hover:bg-gray-100">{link.label}</a>
                        ))
                    }
                </div>

                {/* Mobile devices */}
                <div className="lg:hidden relative">
                    <button onClick={() => setIsOpen(!isOpen)} className="hover:bg-gray-200 px-2 py-2 rounded">
                        <img src={hamburger} alt='Hamburger Menu' className="h-6 w-6" />
                    </button>
                    {
                        isOpen && (
                            <div className="absolute top-full right-0 w-37 h-37 shadow-3xl rounded-lg mt-2">
                                {
                                    navLinks.map((link) => (
                                        <a key={link.href} href={link.href} className="block text-lg font-palanquin  text-slate-gray px-2 py-1 rounded hover:bg-gray-100 text-center">{link.label}</a>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </nav>
        </header>
    )
}