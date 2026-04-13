import React from 'react';
import { IoMdHome } from 'react-icons/io';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav className='w-full mx-auto  mb-5  bg-white shadow-xl  py-5 px-10 '>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-3xl font-bold '><span className='text-[#244D3F]'>Keen</span><span className='text-[#1F2937]'>Keeper</span></h2>
                </div>



                <div className='flex items-center gap-5'>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'btn bg-green-500  p-4 text-white' : 'flex items-center gap-1'}> <IoMdHome /> Home </NavLink>
                    <NavLink to="/timeline" className={({ isActive }) => isActive ? 'btn bg-green-500  p-4 text-white' : 'flex items-center gap-1'}> Timeline </NavLink>
                    <NavLink to="/stats" className={({ isActive }) => isActive ? 'btn bg-green-500  p-4 text-white' : 'flex items-center gap-1'}> Stats </NavLink>
                </div>



            </div>


        </nav>
    );
};

export default Navbar;