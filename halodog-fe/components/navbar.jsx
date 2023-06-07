import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function NavBar(props) {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className='w-full bg-[#9914ad]'>
        <div className='justify-between px-4 mx-auto lg:px-40 md:items-center md:flex md:px-10'>
          <div>
            <div className='flex items-center justify-between py-3 md:py-5 md:block'>
              {/* LOGO */}
              <Link href='/'>
                <h2 className='text-2xl text-cyan-600 font-bold '>
                  <Image src='/logo.png' width={200} height={200} alt='logo' />
                </h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className='md:hidden'>
                <button
                  className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                  onClick={() => setNavbar(!navbar)}
                >
                  {/* {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )} */}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className='h-screen md:h-auto gap-2 items-center justify-center md:flex '>
                {/* <li
                  className={`${
                    props.menu === "dashboard"
                      ? "bg-white"
                      : "hover:bg-green-200"
                  } text-black font-bold py-2 px-4 rounded-full`}
                >
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Dashboard
                  </Link>
                </li> */}
                <li
                  className={`${
                    props.menu === "upload" ? "bg-white" : "hover:bg-green-200"
                  } text-white font-bold py-2 px-4 rounded-full`}
                >
                  <Link href='../diseases' onClick={() => setNavbar(!navbar)}>
                    Diseases
                  </Link>
                </li>
                <li
                  className={`${
                    props.menu === "history" ? "bg-white" : "hover:bg-green-200"
                  } text-white font-bold py-2 px-4 rounded-full`}
                >
                  <Link
                    href='animals/predict'
                    onClick={() => setNavbar(!navbar)}
                  >
                    Predict
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
