import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#18181A',
        color: '#fff',
        padding: '30px 0',
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        {/* Social Links */}
          <div className='flex justify-center items-center gap-4 pt-6 pb-10'>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className='w-7 h-7'/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
             <FaTwitter className='w-7 h-7'/>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='w-7 h-7'/>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className='w-7 h-7'/>
          </a>
          </div>

        {/* Links */}
        {/* <div style={{ marginBottom: '20px'}}>
          <a
            href="#home"
            style={{
              color: '#fff',
              textDecoration: 'none',
              margin: '0 15px',
              fontSize: '16px',
            }}
          >
            Career
          </a>
          <a
            href="#about"
            style={{
              color: '#fff',
              textDecoration: 'none',
              margin: '0 15px',
              fontSize: '16px',
            }}
          >
            Internships
          </a>
          <a
            href="#services"
            style={{
              color: '#fff',
              textDecoration: 'none',
              margin: '0 15px',
              fontSize: '16px',
            }}
          >
            Ezi Products
          </a>
          <a
            href="#contact"
            style={{
              color: '#fff',
              textDecoration: 'none',
              margin: '0 15px',
              fontSize: '16px',
            }}
          >
            Terms & Conditions
          </a>

          <a
            href="#contact"
            style={{
              color: '#fff',
              textDecoration: 'none',
              margin: '0 15px',
              fontSize: '16px',
            }}
          >
            Bank
          </a>
        </div> */}

        {/* Copyright */}
        <p style={{ fontSize: '14px', color: '#bbb', paddingTop:'20px', paddingBottom:'10px' }}>
          &copy; {new Date().getFullYear()} Your Websites. All rights reserved by ubaid ullah.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
