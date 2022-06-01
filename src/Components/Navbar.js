import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RiUserShared2Fill } from 'react-icons/ri';
import { TiThMenu } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import auth from '../Hooks/Firebase.Init';
import Loading from './Loading';
import defaultUserImage from '../Assets/Images/defaultUser.png';
import { toast } from 'react-toastify';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    console.log(user);

    if (loading) {
        return <Loading />;
    };

    if (error) {
        toast.error(`${error?.message?.slice(17, -2)}`);
    };

    const logout = () => {
        signOut(auth);

        toast(`See you soon ${user?.displayName || user?.email?.split('@')[0] || user?.user?.email?.split('@')[0]}`);
    };

    const navbarMenu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        {
            user && <li><Link to='/create-post'>Create Post</Link></li>
        }
    </>;

    return (
        <div className='navbar bg-base-100 lg:mx-4'>
            <div className='navbar-start'>
                <div className='dropdown'>
                    <label tabIndex='0' className='btn btn-ghost lg:hidden'>
                        <TiThMenu className='text-2xl bg-clip-text bg-gradient-to-r from-primary to-secondary' />
                    </label>
                    <ul tabIndex='0' className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-primary to-secondary rounded-box w-52 text-white uppercase font-medium'>
                        {
                            navbarMenu
                        }
                    </ul>
                </div>
                <Link to='/' className='btn btn-ghost normal-case text-xl'>
                    <h3 className='lg:text-2xl sm:text-xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold'>A Coders Diary</h3>
                </Link>
            </div>
            <div className='navbar-center hidden lg:flex'>
                <ul className='menu menu-horizontal p-0 text-primary bg-clip-text bg-gradient-to-r from-primary to-secondary uppercase font-medium'>
                    {
                        navbarMenu
                    }
                </ul>
            </div>
            <div className='navbar-end lg:mr-8'>
                {
                    user ?
                        <div className="avatar dropdown dropdown-hover dropdown-end">
                            <strong class="inline-flex items-center px-5 py-1.5 rounded-full">
                                <span class="text-md font-medium mr-2">
                                    {user?.email?.split('@')[0]}
                                </span>

                                <div className="lg:w-12 md:w-10 w-8 mask mask-hexagon">
                                    <img src={user?.photoURL || user?.user?.photoURL || defaultUserImage} alt={`${user?.displayName || user?.user?.email?.split('@')[0]}}`} />
                                </div>
                            </strong>

                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-gradient-to-r from-primary to-secondary uppercase text-white text-sm rounded-box w-52">
                                <li><Link to='/profile'>Profile</Link></li>
                                <li onClick={() => logout()}><Link to='/'>Logout</Link></li>
                            </ul>
                        </div>
                        :
                        <Link to='/login' className='lg:px-4 px-2 lg:py-4 py-2 text-sm font-medium text-white bg-secondary hover:bg-primary rounded-lg flex justify-center items-center'>
                            <RiUserShared2Fill className='lg:text-lg sm:text-sm mr-3' />
                            Login
                        </Link>
                }
            </div>
        </div >
    );
};

export default Navbar;