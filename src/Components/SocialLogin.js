import React from 'react';
import auth from '../Hooks/Firebase.Init';
import { useSignInWithGoogle, useSignInWithFacebook, useSignInWithGithub, useSignInWithMicrosoft, useSignInWithTwitter, useSignInWithYahoo } from 'react-firebase-hooks/auth';
import Loading from './Loading';
import { toast } from 'react-toastify';
import { BsGoogle, BsGithub, BsFacebook, BsMicrosoft, BsTwitter } from 'react-icons/bs';
import { FaYahoo } from 'react-icons/fa';

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
        toast(`Welcome ${googleUser?.displayName || googleUser?.user?.email?.split('@')[0]}`);
    };

    return (
        <div class="max-w-md mx-auto mt-8 space-y-4">
            <div class="divider">OR</div>

            {
                errorMessage
            }

            <div className="flex items-center justify-evenly">
                <button onClick={() => signInWithGoogle()}
                    class="px-4 py-4 text-sm font-medium text-white bg-primary rounded-lg"
                >
                    <BsGoogle className='text-xl' />
                </button>

                <button onClick={() => signInWithGithub()}
                    class="px-4 py-4 text-sm font-medium text-white bg-primary rounded-lg"
                >
                    <BsGithub className='text-xl' />
                </button>

                <button onClick={() => signInWithFacebook()}
                    class="px-4 py-4 text-sm font-medium text-white bg-primary rounded-lg"
                >
                    <BsFacebook className='text-xl' />
                </button>

                <button onClick={() => signInWithMicrosoft()}
                    class="px-4 py-4 text-sm font-medium text-white bg-primary rounded-lg"
                >
                    <BsMicrosoft className='text-xl' />
                </button>

                <button onClick={() => signInWithTwitter()}
                    class="px-4 py-4 text-sm font-medium text-white bg-primary rounded-lg"
                >
                    <BsTwitter className='text-xl' />
                </button>

                <button onClick={() => signInWithYahoo()}
                    class="px-4 py-4 text-sm font-medium text-white bg-primary rounded-lg"
                >
                    <FaYahoo className='text-xl' />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;