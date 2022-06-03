import React from 'react';
import auth from '../Hooks/Firebase.Init';
import { useSignInWithGoogle, useSignInWithFacebook, useSignInWithGithub, useSignInWithMicrosoft, useSignInWithTwitter, useSignInWithYahoo } from 'react-firebase-hooks/auth';
import Loading from './Loading';
import { toast } from 'react-toastify';
import { BsGoogle, BsGithub, BsFacebook, BsMicrosoft, BsTwitter } from 'react-icons/bs';
import { FaYahoo } from 'react-icons/fa';
import defaultUserImage from '../Assets/Images/defaultUser.png';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithMicrosoft, microsoftUser, microsoftLoading, microsoftError] = useSignInWithMicrosoft(auth);
    const [signInWithTwitter, twitterUser, twitterLoading, twitterError] = useSignInWithTwitter(auth);
    const [signInWithYahoo, yahooUser, yahooLoading, yahooError] = useSignInWithYahoo(auth);
    let errorMessage = googleError || facebookError || githubError || microsoftError || twitterError || yahooError;

    if (googleError || facebookError || githubError || microsoftError || twitterError || yahooError) {
        errorMessage = <p className='text-center text-red-500 text-lg'>{errorMessage?.message?.slice(17, -2)}</p>
    };

    if (googleLoading || facebookLoading || githubLoading || microsoftLoading || twitterLoading || yahooLoading) {
        return <Loading />;
    };

    if (googleUser) {
        const userName = googleUser?.displayName || googleUser?.user?.email?.split('@')[0];
        const userEmail = googleUser?.user?.email;
        const userImg = googleUser?.user?.photoURL || googleUser?.user?.photoURL || defaultUserImage;
        const userCreationTime = new Date();
        const userData = { userName, userEmail, userImg, userCreationTime };

        fetch('https://a-coders-diary.herokuapp.com/create-user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(data => {
                if (data?.insertedId) {
                    toast.success(`Welcome ${googleUser?.displayName || googleUser?.user?.email?.split('@')[0]}`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                };
            })
            .catch((error) => {
                toast.error(`Error: ${error}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <div className="max-w-md mx-auto mt-8 space-y-4">
            <div className="divider">OR</div>

            {
                errorMessage
            }

            <div className="flex items-center justify-evenly">
                <button onClick={() => signInWithGoogle()}
                    className="px-4 py-4 text-sm font-medium text-white bg-primary rounded-lg"
                >
                    <BsGoogle className='text-xl' />
                </button>

                <button onClick={() => signInWithGithub()}
                    className="px-4 py-4 text-sm font-medium text-white bg-primary rounded-lg"
                >
                    <BsGithub className='text-xl' />
                </button>

                <button onClick={() => signInWithFacebook()}
                    className="px-4 py-4 text-sm font-medium text-white bg-primary rounded-lg"
                >
                    <BsFacebook className='text-xl' />
                </button>

                <button onClick={() => signInWithMicrosoft()}
                    className="px-4 py-4 text-sm font-medium text-white bg-primary rounded-lg"
                >
                    <BsMicrosoft className='text-xl' />
                </button>

                <button onClick={() => signInWithTwitter()}
                    className="px-4 py-4 text-sm font-medium text-white bg-primary rounded-lg"
                >
                    <BsTwitter className='text-xl' />
                </button>

                <button onClick={() => signInWithYahoo()}
                    className="px-4 py-4 text-sm font-medium text-white bg-primary rounded-lg"
                >
                    <FaYahoo className='text-xl' />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;