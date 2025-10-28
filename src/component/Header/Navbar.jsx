
import logo from '../../assets/assets/logo.png';

import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const links = <>
    <nav className='flex gap-4 '>
      <NavLink  to='/'>Home</NavLink>
      <NavLink  to='/Apps'>Apps</NavLink>
      <NavLink  to='/Installation'>Installation</NavLink>
  </nav>
  </>
  return (
    <div className='bg-white shadow-sm '>
      <div className="navbar   w-11/12 m-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
              {links}
            </ul>
          </div>
          <a href='/' className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent flex items-center gap-2 font-bold text-xl'><img src={logo} alt="Brand logo" className='w-10 h-10' />Apps Galaxy</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal w-70px px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/CodeXMehedi" className='btn text-sm text-white bg-linear-to-r  from-[#632EE3] to-[#9F62F2]' ><span><i class=" fa-brands fa-github"></i></span>Contribute</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;