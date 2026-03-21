import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri'; 
import logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <footer className="w-full bg-[#001529] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-gray-800">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            
            <img className='w-8 h-8' src={logo} alt="" />
            <span className="text-white font-bold text-xl tracking-tight">
              AppNexus
            </span>
          </div>

          {/* Simple Social Links */}
          <div className="flex items-center gap-6">
            <span className="text-gray-400 font-medium hidden sm:block">Social Links</span>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white text-xl transition-colors">
                <RiTwitterXFill />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xl transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xl transition-colors">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © 2025 - All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;