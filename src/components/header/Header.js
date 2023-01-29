import React, { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import "./Header.css";
import { AuthState } from '../../context/AuthProvider';

const Header = () => {
    const { user, logOut, setLoading } = AuthState();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
            })
    }


    //state for hamburger menu
    const [isOpen, setIsopen] = useState(false);

    const handleToggle = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

    //nav menu active style
    let activeStyle = {
        color: "#0d9488",

    };
    return (
        <header className='shadow-lg shadow-gray-100'>

            <nav className="pl-6 pr-4 md:pr-0 md:pl-0  py-4 md:py-1 bg-white border-b border-gray-100 darkBlack:bg-gray-900  darkBlack:border-gray-700">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link to="/" className="flex items-center">

                        <span className="self-center text-xl font-semibold whitespace-nowrap darkBlack:text-white">Power Hack</span>
                    </Link>

                    <div className="responsive_menu">
                        <button
                            onClick={handleToggle}
                            className="hamburger_icon text-darkBlack">
                            <GiHamburgerMenu />
                        </button>
                        <div

                            className={`side_nav ${isOpen == true ? 'active' : ''}`}

                        >
                            <button
                                className="close_btn "
                                onClick={handleToggle}
                            >
                                <AiFillCloseCircle />
                            </button>
                            <ul className="mobile_menu">

                                <li>
                                    <a
                                        href="/"
                                        className=" list_item text-white px-3 py-2 me-2 rounded  text-capitalize "

                                    >Home</a>
                                </li>


                                {
                                    user?.email ? (
                                        <>

                                            <li>

                                                <button
                                                    className="py-2.5 
                                                    bg-teal-500
                                                    hover:bg-teal-700  hover:text-white px-7   text-white rounded-lg"
                                                    onClick={handleLogOut}
                                                >Log Out</button>

                                            </li>

                                        </>
                                    ) :
                                        (
                                            <>

                                                <li>
                                                    <a href="/login">
                                                        <button className="py-2.5 
                                                    bg-teal-500
                                                    hover:bg-teal-700  hover:text-white px-7   text-white rounded-lg">Login</button>
                                                    </a>
                                                </li>
                                            </>
                                        )
                                }


                            </ul>
                        </div>
                    </div>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                        <ul className="flex items-center flex-col px-4 py-3 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white darkBlack:bg-gray-800 md:darkBlack:bg-gray-900 darkBlack:border-gray-700">
                            <li>
                                <NavLink to="/"
                                    className="block   rounded md:bg-transparent text-darkBlackBlack md:p-0 md:darkBlack:text-white darkBlack:bg-blue-600 md:darkBlack:bg-transparent" aria-current="page"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >Home</NavLink>
                            </li>


                            {
                                user?.email ? (
                                    <>

                                        <li>
                                            <button
                                                className="py-2.5 
                                                    bg-teal-500
                                                    hover:bg-teal-700  hover:text-white px-7   text-white rounded-lg"
                                                onClick={handleLogOut}
                                            >Log Out</button>
                                        </li>
                                    </>
                                ) : (
                                    <li>
                                        <NavLink to="/login">
                                            <button className="py-2.5 
                                                    bg-teal-500
                                                    hover:bg-teal-700  hover:text-white px-7   text-white rounded-lg">
                                                Login
                                            </button>
                                        </NavLink>
                                    </li>
                                )
                            }



                        </ul>


                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header
