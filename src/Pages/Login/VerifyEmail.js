import React from 'react';
import auth from '../../Hooks/Firebase.Init';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Loading';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const VerifyEmail = () => {
    const [user, loading, error] = useAuthState(auth);
    const [sendEmailVerification, sending, emailVerificationError] = useSendEmailVerification(auth);
    let errorMessage = '';

    if (loading || sending) {
        return <Loading />;
    };

    if (error || emailVerificationError) {
        errorMessage = <p className='text-center text-red-500 text-lg'>{error?.message?.slice(17, -2)}</p>
    };

    const verifyEmail = async () => {
        await sendEmailVerification(user?.email);

        toast.success('Email verification sent successfully!');
    };

    return (
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">
                <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary sm:text-3xl">Verify your email to continue</h1>

                <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
                    We will send you an email to verify your account.
                </p>

                <form onSubmit={verifyEmail} className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">

                    {
                        errorMessage
                    }

                    <button type="submit" className="block w-full px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary hover:bg-primary rounded-lg">
                        Verify Email
                    </button>

                    <Link to='/' className="block w-full px-5 py-3 text-sm text-center font-medium text-white bg-secondary hover:bg-primary rounded-lg">
                        Back to Home
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default VerifyEmail;