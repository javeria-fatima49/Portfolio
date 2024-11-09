"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

     const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-[#2d2d2d] p-4 text-white">
            <div className="container mx-auto flex justify-between items-center flex-wrap">
                <h1 className="text-2xl font-bold font-serif"><span className="text-[#f8d839] font-extrabold text-3xl" >J</span>averia <span className="text-[#f8d839] font-extrabold text-3xl">P</span>ortfolio</h1>
                

                <nav className="hidden md:flex gap-6 text-2xl font-sans">
                    <ul className="flex gap-6">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <div className="md:hidden text-2xl">
                    <button onClick={toggleMobileMenu} className="focus:outline-none">
                        &#9776;
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <nav className="md:hidden font-sans">
                    <ul className="flex flex-col gap-4 mt-4 text-center">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
