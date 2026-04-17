import React from 'react';
import { GoGraph } from 'react-icons/go';
import { IoMdHome } from 'react-icons/io';
import { IoTimeOutline } from 'react-icons/io5';
import { NavLink } from 'react-router';

const NavItems = () => {
    const navItems = [
        { to: "/", icon: <IoMdHome className="text-sm sm:text-base" />, label: "Home" },
        { to: "/timeline", icon: <IoTimeOutline className="text-sm sm:text-base" />, label: "Timeline" },
        { to: "/stats", icon: <GoGraph className="text-sm sm:text-base" />, label: "Stats" }
    ];

    return (
        <div className='flex items-center gap-4 sm:gap-8'>
            {navItems.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                        `transition-all duration-300 ease-in-out rounded-3xl ${isActive
                            ? 'bg-green-800 text-white shadow-lg flex items-center gap-1'
                            : 'flex items-center gap-1 hover:bg-green-100 hover:scale-105 hover:shadow-md'
                        } px-3 py-1.5 sm:px-5 sm:py-2`
                    }
                >
                    {item.icon}
                    <span className="text-sm sm:text-base">{item.label}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default NavItems;



