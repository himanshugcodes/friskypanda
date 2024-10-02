"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
const header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMobileMenu = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <header className="header d-none d-lg-block">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-3">
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/assets/images/logo.png"
                    width={150}
                    height={154}
                    alt="Frisky Panda"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-9 d-flex justify-content-end">
              <nav className="navigation">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/">Birthday Parties</Link>
                  </li>
                  <li>
                    <Link href="/">Events</Link>
                  </li>
                  <li>
                    <Link href="/">Cafe</Link>
                  </li>
                  <li>
                    <Link href="/">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/">Membership</Link>
                  </li>
                  <li>
                    <Link href="/">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="bottom-shape">
          <img src="/assets/images/header-bg.png" alt="Frisky Panda" />
        </div>
      </header>

      {/* Mobile Nav */}
      <header className="mob-header d-lg-none">
        <div className="container">
          <div className="mob-header-box">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/assets/images/logo.png"
                  width={100}
                  height={102}
                  alt="Frisky Panda"
                />
              </Link>
            </div>
            <div className="mob-main-header-right" onClick={toggleMobileMenu}>
              <i>
                <FaBars />
              </i>
            </div>
          </div>
        </div>
        <div className={`mobile-nav__wrapper ${isExpanded ? "expanded" : ""}`}>
          <div className="mobile-nav__overlay" onClick={toggleMobileMenu}></div>
          <div className="mobile-nav__content">
            <div className="mobile-nav-header">
              <div className="logo-box">
                <h4>Menu</h4>
              </div>
              <span className="mobile-nav__close" onClick={toggleMobileMenu}>
                <i>
                  <FaTimes />
                </i>
              </span>
            </div>

            <div className="mobile-nav__container">
              <ul className="main-menu__list">
                <li onClick={toggleMobileMenu}>
                  <Link href="/">Home</Link>
                </li>
                <li onClick={toggleMobileMenu}>
                  <Link href="/about">About Us</Link>
                </li>
                <li onClick={toggleMobileMenu}>
                  <Link href="/">Birthday Parties</Link>
                </li>
                <li onClick={toggleMobileMenu}>
                  <Link href="/">Events</Link>
                </li>
                <li onClick={toggleMobileMenu}>
                  <Link href="/">Cafe</Link>
                </li>
                <li onClick={toggleMobileMenu}>
                  <Link href="/">Gallery</Link>
                </li>
                <li onClick={toggleMobileMenu}>
                  <Link href="/">Membership</Link>
                </li>
                <li onClick={toggleMobileMenu}>
                  <Link href="/">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
