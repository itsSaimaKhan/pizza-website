import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-10 mb-0">
      <nav className="flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black outline-slate-900">
        <a className="hover:text-cyan-500 text-amber-500" href="#">
          Home
        </a>
        <a className="hover:text-cyan-500 text-amber-500" href="#">
          About
        </a>
        <a className="hover:text-cyan-500 text-amber-500" href="#">
          Delivery
        </a>
        <a className="hover:text-cyan-500 text-amber-500" href="#">
          Contact
        </a>
      </nav>

      <div className="flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105">
        <a href="https://linkedin.com" target="_blank" rel="nofollow noopener">
          <img
            src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
            alt="LinkedIn logo"
          />
        </a>
        <a href="https://facebook.com" target="_blank" rel="nofollow noopener">
          <img
            src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
            alt="Facebook logo"
          />
        </a>
        <a href="https://instagram.com" target="_blank" rel="nofollow noopener">
          <img
            src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
            alt="Instagram logo"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="nofollow noopener">
          <img
            src="https://img.icons8.com/fluent/30/000000/twitter.png"
            alt="Twitter logo"
          />
        </a>
      </div>

      <p className="text-center hover:text-cyan-600 text-amber-400 font-medium mb-8">
        2024 Saima Khan. All Rights Reserved.
      </p>
    </footer>
  );
}
