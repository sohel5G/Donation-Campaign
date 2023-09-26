import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../public/images/Logo.png'

const Header = () => {
    return (
        <header>
            <nav className='md:flex justify-between items-center py-7 container mx-auto px-10'>
                <div className='flex justify-center'>
                    <Link to={'/'}><img src={Logo} alt="Main Logo" /></Link>
                </div>
                <div className='py-5 md:py-0 mt-5 md:mt-0'>
                    <ul className='flex gap-5 md:gap-9 justify-center'>
                        <li> <NavLink className="font-semibold p-1" to={'/'}>Home</NavLink> </li>
                        <li> <NavLink className="font-semibold p-1" to={'/donationed'}>Donation</NavLink> </li>
                        <li> <NavLink className="font-semibold p-1" to={'/statistics'}>Statistics</NavLink> </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;