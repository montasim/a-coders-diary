import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../Components/SocialLogin';
import auth from '../../Hooks/Firebase.Init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Loading';
import { toast } from 'react-toastify';
import { AiOutlineEye } from 'react-icons/ai';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import signupImage from '../../Assets/Images/signup.jpg';

const Login = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [passowrd, setPassword] = useState('');
    let errorMessage = '';

    const createUser = event => {
        event.preventDefault();

        createUserWithEmailAndPassword(email, passowrd);

        event.target.reset();
    };

    if (loading) {
        return <Loading />;
    };

    if (error) {
        errorMessage = <p className='text-center text-red-500 text-lg'>{error?.message?.slice(17, -2)}</p>
    };

    if (user) {
        toast.success('Signup completed successfully. Verify your email to login');
    };

    return (
        <section className="relative flex flex-wrap lg:h-screen lg:items-center my-20 h-screen">
            <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                <div className="max-w-lg mx-auto text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Get started today!</h1>

                    <p className="mt-4 text-gray-500">
                        Find the best working solutions of your coding problem. Share your knowledge and help others. To get started, sign up for an account.
                    </p>
                </div>

                <form onSubmit={createUser} action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input onBlur={(e) => setEmail(e.target.value)}
                                type="email"
                                className="w-full p-4 pr-12 text-sm border-success rounded-lg shadow-sm"
                                placeholder="Enter email"
                            />

                            <span className="absolute inset-y-0 inline-flex items-center right-4">
                                <MdOutlineAlternateEmail />
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <div className="relative">
                            <input onBlur={(e) => setPassword(e.target.value)}
                                type="password"
                                className="w-full p-4 pr-12 text-sm border-success rounded-lg shadow-sm"
                                placeholder="Enter password"
                            />

                            <span className="absolute inset-y-0 inline-flex items-center right-4">
                                <AiOutlineEye className='text-lg' />
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            Already have a account? <Link className="underline" to="/login">Login</Link>
                        </p>

                        {
                            errorMessage
                        }

                        <button
                            type="submit"
                            className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-lg"
                        >
                            Signup
                        </button>
                    </div>
                </form>

                <SocialLogin />

            </div>

            <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
                <img
                    className="absolute inset-0 object-cover w-full h-full"
                    src={signupImage}
                    alt=""
                />
            </div>
        </section>
    );
};

export default Login;