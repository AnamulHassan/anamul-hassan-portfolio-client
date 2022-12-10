import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="100"
      data-aos-anchor-placement="top-bottom"
      className=" mt-12 overflow-x-hidden mx-auto w-10/12 lg:w-10/12"
    >
      <div className="">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-3  gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div className="text-[#8891b0]">
              <p className="font-medium tracking-wide text-[#ccd7f7]">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-[#ccd7f7]">Apples</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    eCommerce
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Entertainment
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-[#ccd7f7]">Cherry</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Educational
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:max-w-md lg:col-span-2">
            <span className="text-base font-medium tracking-wide text-#ccd7f7]">
              Subscribe for updates
            </span>
            <form className="flex flex-col mt-4 md:flex-row">
              <input
                placeholder="Email"
                required
                type="email"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 border text-[#64feda] border-[#64feda] rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="px-4 py-1 border border-[#64feda] rounded  font-semibold text-white duration-300  hover:bg-[#64feda] hover:bg-opacity-10"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm ">
              Bacon ipsum dolor amet short ribs pig sausage prosciuto chicken
              spare ribs salami.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm">
            &copy; Copyright {new Date().getFullYear()} portfolio. All rights
            reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              target="_blank"
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <span className="flex justify-center duration-300 bg-[#8891b0] items-center h-10 w-10 rounded-full hover:bg-[#ccd7f7]">
                <FaTwitter className="text-[#0a1930] text-xl" />
              </span>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <span className="flex justify-center duration-300 bg-[#8891b0] items-center h-10 w-10 rounded-full hover:bg-[#ccd7f7]">
                <FaInstagram className="text-[#0a1930] text-xl" />
              </span>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <span className="flex justify-center duration-300 bg-[#8891b0] items-center h-10 w-10 rounded-full hover:bg-[#ccd7f7]">
                <FaFacebookF className="text-[#0a1930] text-xl" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
