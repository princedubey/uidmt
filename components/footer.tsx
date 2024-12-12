import Image from "next/image";
import React from "react";
import logo from "../app/assets/light-logo.png";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <footer className="footer bg-gradient-to-r dark:from-gray-900 text-base-content p-10">
        <aside>
          <div className="relative">
          <Link href="/">
          <Image src={logo} alt="Logo" width={100}/>
        </Link>   
        <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
