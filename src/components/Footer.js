import Logo from '../images/logo.jpeg';

const Footer = () => {
    return (
        <div className="bg-[#3ab44a] flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 text-white">
            <div className="flex flex-col md:w-1/2 mb-4 md:mb-0">
                <p className='p-1 font-semibold'>Contact Us</p>
                <p className="ml-4">+91 8252587109</p>
                <p className="ml-4">team@sell&well.com</p>
                <p className='p-1 font-semibold'>Customer Support Available</p>
                <p className='p-1'>From 10AM - 7PM</p>
                <p className='p-1 font-semibold'>Find Us Here</p>
                <div className="flex gap-2 p-1">
                    <img src="https://th.bing.com/th?id=OIP.NUFU5mhqhqOr82Ge-CwjawHaHv&w=244&h=255&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2" alt="Instagram" className="w-6 h-6"></img>
                    <img src="https://th.bing.com/th?id=OIP.biG9UdrkNGTbvX1YvOvY4AHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2" alt="Twitter" className="w-6 h-6"></img>
                    <img src="https://th.bing.com/th?id=OIP.6uTQ7mOjYOD2sNKxUdnaNAHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2" alt="LinkedIn" className="w-6 h-6"></img>
                    <img src="https://th.bing.com/th?id=OIP.cOz92GK9w_2_VxUIWBL0ngHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Facebook" className="w-6 h-6"></img>
                </div>
            </div>
            <div className='flex flex-col md:w-1/2'>
                <img src={Logo} alt="Sell & Well Logo" className='w-1/4 mb-4 md:mb-0'></img>
                <p className='font-semibold'>Regd. Address</p>
                <p className="leading-relaxed">
                    BDA, AMBEDKAR INSTITUTE OF TECHNOLOGY, Outer Ring Rd, Near Gnana Bharati, 2<sup>nd</sup> Stage, Nagarbhavi, Bengaluru, Karnataka, 560056
                </p>
            </div>
        </div>
    );
};

export default Footer;
