"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50">
                <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/image/girl-image.jpg"
                            alt="Profile"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <span className="font-semibold text-2xl font-serif text-white">
                            <span className="text-yellow-500 font-extrabold font-serif text-3xl">P</span>ortfolio
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        {["Home", "About", "Skill", "Projects", "Services", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    <div className="md:hidden text-2xl">
                        <button onClick={toggleMobileMenu} className="focus:outline-none text-yellow-400">
                            &#9776;
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-black/90 text-white flex flex-col items-center gap-4 py-4">
                        {["Home", "About", "Skill", "Projects", "Services", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </>
    );
}
