import React from 'react';

const SocialLogin = () => {
    return (
        <div class="max-w-md mx-auto mt-8 space-y-4">
            <div class="divider">OR</div>

            <button
                class="w-full inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
            >
                Continue With Google
            </button>

            <button
                class="w-full inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
            >
                Continue With Github
            </button>
        </div>
    );
};

export default SocialLogin;