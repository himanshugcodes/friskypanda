import React from "react";
import Image from "next/image";
import Link from "next/link";
const header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="logo">
                <Image
                  src="/assets/images/logo.png"
                  width={100}
                  height={120}
                  alt="Frisky Panda"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <nav>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
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
