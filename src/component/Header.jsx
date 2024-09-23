import React from "react";
import Image from "next/image";
import Link from "next/link";
const header = () => {
  return (
    <>
      <header className="">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-3">
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/assets/images/logo.png"
                    width={100}
                    height={120}
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
      </header>
    </>
  );
};

export default header;
