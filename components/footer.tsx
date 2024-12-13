import Image from "next/image";
import React from "react";
import logo from "../app/assets/light-logo.png";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <footer className="flex footer bg-gradient-to-r max-w-7xl mx-auto dark:from-gray-900 items-center justify-between text-base-content p-10">
        <aside>
          <Link href="/" className="hover:scale-150 transition-all">
          <Image src={logo} alt="Logo" width={100} />
        </Link>
        <p>
            UIDMT Edtech Ltd.
            <br />
            Providing reliable tech since 2008
          </p>
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
          <a className="link link-hover">Term policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
