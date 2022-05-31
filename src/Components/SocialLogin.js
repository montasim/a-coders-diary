import React from 'react';
import auth from '../Hooks/Firebase.Init';
import { useSignInWithGoogle, useSignInWithFacebook, useSignInWithGithub, useSignInWithMicrosoft, useSignInWithTwitter, useSignInWithYahoo } from 'react-firebase-hooks/auth';
import Loading from './Loading';
import { toast } from 'react-toastify';

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

            <button onClick={() => signInWithGoogle()}
                class="w-full inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
            >
                Continue With Google
            </button>

            <button onClick={() => signInWithGithub()}
                class="w-full inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
            >
                Continue With Github
            </button>
        </div>
    );
};

export default SocialLogin;