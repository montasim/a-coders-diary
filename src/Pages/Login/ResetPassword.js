import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../Hooks/Firebase.Init';
import Loading from '../../Components/Loading';
import { toast } from 'react-toastify';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    let errorMessage = '';

    if (error) {
        errorMessage = <p className='text-center text-red-500 text-lg'>{error?.message?.slice(17, -2)}</p>
    };

    if (sending) {
        return <Loading />;
    };

    const resetPassword = async (event) => {
        event.preventDefault();

        await sendPasswordResetEmail(email);

        toast.success('Password reset email verification sent');

        event.target.reset();
    };

    return (
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">
                <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary sm:text-3xl">Reset your password</h1>

                <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
                    We will send you an email to reset your password.
                </p>

                <form onSubmit={resetPassword} className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
                    <p className="text-lg font-medium">Enter your email address</p>

                    <div>
                        <label htmlhtmlFor="email" className="text-sm font-medium">Email</label>

                        <div className="relative mt-1">
                            <input onBlur={(e) => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                className="w-full p-4 pr-12 text-sm border-info rounded-lg shadow-sm"
                                placeholder="Enter email"
                            />

                            <span className="absolute inset-y-0 inline-flex items-center right-4">
                                <MdOutlineAlternateEmail />
                            </span>
                        </div>
                    </div>

                    {
                        errorMessage
                    }

                    <button type="submit" className="block w-full px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary hover:bg-primary rounded-lg">
                        Reset Password
                    </button>

                    <Link to='/login' className="block w-full px-5 py-3 text-sm font-medium text-white text-center bg-secondary hover:bg-primary rounded-lg">
                        Cancel
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;