import Logo from '../images/logo.jpeg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import UserCard from './UserCard';

const Header = ({ footerRef }) => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false); // State for "Scroll to Top" button visibility
    const user = useSelector((store) => store.user);
    const location = useLocation();
    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
    const isVendorPage = location.pathname === '/vendor/home';
    const dropdownRef = useRef(null); // Reference for dropdown menu

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    // Handle scroll to show/hide "Scroll to Top" button
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToFooter = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='absolute w-full flex flex-wrap justify-between items-center px-4 py-2 z-10'>
            <img src={Logo} alt="logo" className='w-12 sm:w-16 m-2 z-20' />

            {!isAuthPage && !isVendorPage && (
                <div className="relative flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
                    {/* Dropdown menu for smaller screens and tablets */}
                    <div className="relative sm:hidden">
                        <button
                            className="font-bold px-3 py-2 bg-[#3ab44a] text-white rounded transition-colors"
                            onClick={toggleDropdown}
                        >
                            Menu
                        </button>
                        {isDropdownOpen && (
                            <ul
                                ref={dropdownRef} // Attach ref to the dropdown
                                className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-20"
                            >
                                <li
                                    className="block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer"
                                    onClick={() => {
                                        navigate('/');
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    Home
                                </li>
                                <li
                                    className="block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer"
                                    onClick={() => {
                                        navigate('/scrap-rate');
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    Check Scrap Rate
                                </li>
                                <li
                                    className="block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer"
                                    onClick={() => {
                                        navigate('/scrap-sell');
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    Sell Scrap
                                </li>
                                <li
                                    className="block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer"
                                    onClick={() => {
                                        scrollToFooter();
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    Contact Us
                                </li>
                            </ul>
                        )}
                    </div>

                    {/* Full navbar for larger screens */}
                    <ul className="hidden sm:flex space-x-4 text-[#3ab44a] text-xl md:text-2xl lg:text-3xl">
                        <li className="cursor-pointer hover:font-semibold" onClick={() => navigate('/')}>Home</li>
                        <li className="cursor-pointer hover:font-semibold" onClick={() => navigate('/scrap-rate')}>Scrap Rate</li>
                        <li className="cursor-pointer hover:font-semibold" onClick={() => navigate('/scrap-sell')}>Sell Scrap</li>
                        <li className="cursor-pointer hover:font-semibold" onClick={scrollToFooter}>Contact Us</li>
                    </ul>

                    {user ? (
                        <UserCard />
                    ) : (
                        <button
                            className="px-4 py-2 bg-[#3ab44a] text-white rounded hover:bg-gray-600 transition-colors md:text-xl"
                            onClick={() => navigate('/signup')}
                        >
                            Sign Up
                        </button>
                    )}
                </div>
            )}

            {isVendorPage &&
                <ul className="hidden sm:flex items-center space-x-4 text-[#3ab44a] text-xl md:text-2xl lg:text-3xl">
                    <li className="cursor-pointer hover:font-semibold">
                        My DashBoard
                    </li>
                    <li className="cursor-pointer hover:font-semibold">
                        <div className="flex items-center space-x-2">
                            <UserCard />
                        </div>
                    </li>
                </ul>

            }
            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    className="fixed bottom-20 right-4 p-4 bg-black text-white rounded-full shadow-md hover:bg-blue-600 transition-colors"
                    onClick={scrollToTop}
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default Header;
