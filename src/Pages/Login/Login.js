import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading';
import SocialLogin from '../../Components/SocialLogin';
import auth from '../../Hooks/Firebase.Init';
import { AiOutlineEye } from 'react-icons/ai';
import { MdOutlineAlternateEmail } from 'react-icons/md';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let errorMessage = '';

    const login = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    if (loading) {
        return <Loading />;
    };

    if (error) {
        errorMessage = <p className='text-center text-red-500 text-lg'>{error?.message?.slice(17, -2)}</p>
    };

    if (user) {
        toast.success(`Welcome ${user?.displayName || user?.user?.email?.split('@')[0]}`);
    };

    return (
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 mt-10 mb-40 h-screen">
            <div className="max-w-lg mx-auto">
                <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary sm:text-3xl">Get started today</h1>

                <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
                    Find the best working solutions of your coding problem. Share your knowledge and help others. To get started, login.
                </p>

                <form onSubmit={login} className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
                    <p className="text-lg font-medium">Sign in to your account</p>

                    <div>
                        <label for="email" className="text-sm font-medium">Email</label>

                        <div className="relative mt-1">
                            <input onBlur={e => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                className="w-full p-4 pr-12 text-sm border-success rounded-lg shadow-sm"
                                placeholder="Enter email"
                            />

                            <span className="absolute inset-y-0 inline-flex items-center right-4">
                                <MdOutlineAlternateEmail />
                            </span>
                        </div>
                    </div>

                    <div>
                        <label for="password" className="text-sm font-medium">Password</label>

                        <div className="relative mt-1">
                            <input onBlur={e => setPassword(e.target.value)}
                                type="password"
                                id="password"
                                className="w-full p-4 pr-12 text-sm border-success rounded-lg shadow-sm"
                                placeholder="Enter password"
                            />

                            <span className="absolute inset-y-0 inline-flex items-center right-4">
                                <AiOutlineEye className='text-lg' />
                            </span>
                        </div>
                    </div>

                    {
                        errorMessage
                    }

                    <button type="submit" className="block w-full px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-lg">
                        Login
                    </button>

                    <p className="text-sm text-center text-gray-500">
                        Forgot Password? <Link className="underline" to="/reset-password">Reset Password</Link>
                    </p>

                    <p className="text-sm text-center text-gray-500">
                        New here? <Link className="underline" to="/signup">Sign up</Link>
                    </p>

                    <SocialLogin />
                </form>
            </div>
        </div>
    );
};

export default Login;