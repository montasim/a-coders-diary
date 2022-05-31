import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAlternateEmail } from 'react-icons/md';

const ResetPassword = () => {
    return (
        <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div class="max-w-lg mx-auto">
                <h1 class="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary sm:text-3xl">Reset your password</h1>

                <p class="max-w-md mx-auto mt-4 text-center text-gray-500">
                    We will send you an email to reset your password.
                </p>

                <form action="" class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
                    <p class="text-lg font-medium">Enter your email address</p>

                    <div>
                        <label for="email" class="text-sm font-medium">Email</label>

                        <div class="relative mt-1">
                            <input
                                type="email"
                                id="email"
                                class="w-full p-4 pr-12 text-sm border-info rounded-lg shadow-sm"
                                placeholder="Enter email"
                            />

                            <span class="absolute inset-y-0 inline-flex items-center right-4">
                                <MdOutlineAlternateEmail />
                            </span>
                        </div>
                    </div>

                    <button type="submit" class="block w-full px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary hover:bg-primary rounded-lg">
                        Reset Password
                    </button>

                    <Link to='/login' class="block w-full px-5 py-3 text-sm font-medium text-white text-center bg-secondary hover:bg-primary rounded-lg">
                        Cancel
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;