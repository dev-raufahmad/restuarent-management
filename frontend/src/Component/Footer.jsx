import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f8f8f8] text-gray-600">

      {/* Main Footer */}
      <div className="border-t border-gray-200 px-8 md:px-16 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="text-5xl text-black">
                ♧
              </div>

              <h1 className="text-4xl font-serif text-black">
                QuickDine
              </h1>
            </div>

            <p className="text-lg leading-8 max-w-sm">
              Connecting discerning palates with the world's most exceptional
              culinary experiences.
            </p>
          </div>


          {/* Company */}
          <div>
            <h2 className="text-black font-semibold tracking-wider mb-7">
              COMPANY
            </h2>

            <div className="flex flex-col gap-6 text-lg">
              <a
                href="#"
                className="hover:text-black hover:scale-105 transition-all duration-300 origin-left"
              >
                About Us
              </a>

              <a
                href="#"
                className="hover:text-black hover:scale-105 transition-all duration-300 origin-left"
              >
                Partner with Us
              </a>

              <a
                href="#"
                className="hover:text-black hover:scale-105 transition-all duration-300 origin-left"
              >
                Careers
              </a>
            </div>
          </div>


          {/* Legal */}
          <div>
            <h2 className="text-black font-semibold tracking-wider mb-7">
              LEGAL
            </h2>

            <div className="flex flex-col gap-6 text-lg">
              <a
                href="#"
                className="hover:text-black hover:scale-105 transition-all duration-300 origin-left"
              >
                Terms of Service
              </a>

              <a
                href="#"
                className="hover:text-black hover:scale-105 transition-all duration-300 origin-left"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="hover:text-black hover:scale-105 transition-all duration-300 origin-left"
              >
                Cookies
              </a>
            </div>
          </div>


          {/* Contact */}
          <div>
            <h2 className="text-black font-semibold tracking-wider mb-7">
              CONTACT
            </h2>

            <a
              href="mailto:support@example.com"
              className="text-lg hover:text-black hover:scale-105 transition-all duration-300 inline-block"
            >
              support@example.com
            </a>

            {/* Social Icons */}
            <div className="flex gap-7 mt-8">

              {/* Globe */}
              <button className="text-gray-500 hover:text-black hover:scale-125 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18" />
                  <path d="M12 3a14 14 0 0 1 0 18" />
                  <path d="M12 3a14 14 0 0 0 0 18" />
                </svg>
              </button>

              {/* Share */}
              <button className="text-gray-500 hover:text-black hover:scale-125 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="18" cy="5" r="2" />
                  <circle cx="6" cy="12" r="2" />
                  <circle cx="18" cy="19" r="2" />
                  <path d="m8 13 8 5" />
                  <path d="m16 6-8 5" />
                </svg>
              </button>

              {/* Email */}
              <button className="text-gray-500 hover:text-black hover:scale-125 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </button>

            </div>
          </div>

        </div>
      </div>


      {/* Bottom Footer */}
      <div className="border-t border-gray-200 px-8 md:px-16 py-10 flex flex-col md:flex-row justify-between items-center gap-5">

        <p className="text-lg">
          © 2026 QuickDine. All rights reserved.
        </p>

        <div className="flex gap-10 text-lg">
          <a
            href="#"
            className="hover:text-black hover:scale-105 transition-all duration-300"
          >
            Terms
          </a>

          <a
            href="#"
            className="hover:text-black hover:scale-105 transition-all duration-300"
          >
            Privacy
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;