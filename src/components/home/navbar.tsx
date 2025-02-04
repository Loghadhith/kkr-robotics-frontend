"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { User, Menu, X } from "lucide-react";
import Logo from "@/assets/Logo/kkr-logo.png";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-transparent z-50 py-4 flex justify-between items-center transition-all ${
        isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo on the left */}
      <h1 className="absolute left-6 text-xl font-bold">
        <Image alt="Logo" className="h-24 w-24" src={Logo} />
      </h1>
      
      {/* Large Screen Navbar */}
      <nav className="hidden md:flex justify-between items-center px-8 py-4 w-full">
        {/* Create a container for the links with some gap from the logo */}
        <ul className="flex space-x-[50px] w-full justify-end pr-[90px]">
          <li><Link href="/" className="group relative text-black hover:text-black no-underline">HOME<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-all"></span></Link></li>
          <li><Link href="/about" className="group relative text-black hover:text-black no-underline">ABOUT<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-all"></span></Link></li>
          <li><Link href="/products" className="group relative text-black hover:text-black no-underline">PRODUCTS<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-all"></span></Link></li>
          <li><Link href="/shops" className="group relative text-black hover:text-black no-underline">SHOPS<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-all"></span></Link></li>
          <li><Link href="/community" className="group relative text-black hover:text-black no-underline">COMMUNITY<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-all"></span></Link></li>
          <li><Link href="/services" className="group relative text-black hover:text-black no-underline">OUR SERVICES<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-all"></span></Link></li>
          <li><Link href="/events" className="group relative text-black hover:text-black no-underline">EVENTS<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-all"></span></Link></li>
          <li><Link href="/contacts" className="group relative text-black hover:text-black no-underline">CONTACTS<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-all"></span></Link></li>
        </ul>

        {/* User Icon */}
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white">
          <span className="sr-only">User</span><User size={24} color="white" />
        </button>
      </nav>

      {/* Small Screen Navbar */}
      <nav className="md:hidden flex items-center justify-between px-4 py-3">
        <h1 className="absolute left-6 text-xl font-bold">
          <Image alt="Logo" className="h-12 w-12" src={Logo} />
        </h1>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          className="absolute right-6"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Slide-In Menu for Small Screen */}
      {isMenuOpen && (
        <div className="fixed w-screen inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center space-y-6 text-white text-lg md:hidden">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
            className="absolute top-4 right-4"
          >
            <X size={32} />
          </button>
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:underline">HOME</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:underline">ABOUT</Link>
          <Link href="/products" onClick={() => setIsMenuOpen(false)} className="hover:underline">PRODUCTS</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:underline">SHOP</Link>
          <Link href="/community" onClick={() => setIsMenuOpen(false)} className="hover:underline">COMMUNITY</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)} className="hover:underline">OUR SERVICES</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:underline">EVENTS</Link>
          <Link href="/contacts" onClick={() => setIsMenuOpen(false)} className="hover:underline">CONTACTS</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
