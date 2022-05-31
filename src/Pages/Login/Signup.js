import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../Components/SocialLogin';
import auth from '../../Hooks/Firebase.Init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Loading';
import { toast } from 'react-toastify';
import { AiOutlineEye } from 'react-icons/ai';
import { MdOutlineAlternateEmail } from 'react-icons/md';

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
        <section class="relative flex flex-wrap lg:h-screen lg:items-center my-20 h-screen">
            <div class="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                <div class="max-w-lg mx-auto text-center">
                    <h1 class="text-2xl font-bold sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Get started today!</h1>

                    <p class="mt-4 text-gray-500">
                        Find the best working solutions of your coding problem. Share your knowledge and help others. To get started, sign up for an account.
                    </p>
                </div>

                <form onSubmit={createUser} action="" class="max-w-md mx-auto mt-8 mb-0 space-y-4">
                    <div>
                        <label for="email" class="sr-only">Email</label>

                        <div class="relative">
                            <input onBlur={(e) => setEmail(e.target.value)}
                                type="email"
                                class="w-full p-4 pr-12 text-sm border-success rounded-lg shadow-sm"
                                placeholder="Enter email"
                            />

                            <span class="absolute inset-y-0 inline-flex items-center right-4">
                                <MdOutlineAlternateEmail />
                            </span>
                        </div>
                    </div>

                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <div class="relative">
                            <input onBlur={(e) => setPassword(e.target.value)}
                                type="password"
                                class="w-full p-4 pr-12 text-sm border-success rounded-lg shadow-sm"
                                placeholder="Enter password"
                            />

                            <span class="absolute inset-y-0 inline-flex items-center right-4">
                                <AiOutlineEye className='text-lg' />
                            </span>
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <p class="text-sm text-gray-500">
                            Already have a account? <Link class="underline" to="/login">Login</Link>
                        </p>

                        {
                            errorMessage
                        }

                        <button
                            type="submit"
                            class="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-lg"
                        >
                            Signup
                        </button>
                    </div>
                </form>

                <SocialLogin />

            </div>

            <div class="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
                <img
                    class="absolute inset-0 object-cover w-full h-full"
                    src="https://www.hyperui.dev/photos/team-1.jpeg"
                    alt=""
                />
            </div>
        </section>
    );
};

export default Login;