"use client"

import { useState } from "react";
import Link from "next/link";
import { User, Menu, X } from "lucide-react";
import Logo from "@/assets/Logo/kkr-logo.png"
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="relative z-20"
    >
      {/* Large Screen Navbar */}
      <h1 className="absolute left-6 text-xl font-bold"><Image alt="Logo"  className="h-24 w-24" src={Logo}/></h1>
      <nav className="hidden md:flex justify-between items-center px-8 py-4">
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            listStyle: "none",
            margin: 0,
            padding: 0,
            justifyContent: "center",
          }}
        >
          <li style={{ margin: "0.5rem 0.5rem" }}>
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              HOME
            </Link>
          </li>
          <li style={{ margin: "0.5rem 1rem" }}>
            <Link href="/about" style={{ textDecoration: "none", color: "black" }}>
              ABOUT
            </Link>
          </li>
          <li style={{ margin: "0.5rem 1rem" }}>
            <Link href="/products" style={{ textDecoration: "none", color: "black" }}>
              PRODUCTS
            </Link>
          </li>
          <li style={{ margin: "0.5rem 1rem" }}>
            <Link href="/shop" style={{ textDecoration: "none", color: "black" }}>
              SHOP
            </Link>
          </li>
          <li style={{ margin: "0.5rem 1rem" }}>
            <Link href="/services" style={{ textDecoration: "none", color: "black" }}>
              OUR SERVICES
            </Link>
          </li>
          <li style={{ margin: "0.5rem 1rem" }}>
            <Link href="/updates" style={{ textDecoration: "none", color: "black" }}>
              UPDATES
            </Link>
          </li>
        </ul>
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white">
          <span className="sr-only">User</span><User size={24} color="white" />
          {/* Placeholder for user icon */}
        </button>
      </nav>

      {/* Small Screen Navbar */}
      <nav className="md:hidden flex items-center justify-between px-4 py-3">
        <h1 className="absolute left-6 text-xl font-bold"><Image alt="Logo"  className="h-12 w-12" src={Logo}/></h1>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          className="absolute right-6"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Slide-In Menu */}
      {isMenuOpen && (
        <div className="fixed w-screen inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center space-y-6 text-white text-lg md:hidden">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
            className="absolute top-4 right-4"
          >
            <X size={32} />
          </button>
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:underline">
            HOME
          </Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:underline">
            ABOUT
          </Link>
          <Link href="/products" onClick={() => setIsMenuOpen(false)} className="hover:underline">
            PRODUCTS
          </Link>
          <Link href="/shop" onClick={() => setIsMenuOpen(false)} className="hover:underline">
            SHOP
          </Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)} className="hover:underline">
            OUR SERVICES
          </Link>
          <Link href="/updates" onClick={() => setIsMenuOpen(false)} className="hover:underline">
            UPDATES
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

