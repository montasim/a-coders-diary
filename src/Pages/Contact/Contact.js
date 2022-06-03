import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Components/Loading';
import { toast } from 'react-toastify';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import signupImage from '../../Assets/Images/signup.jpg';

const Contact = () => {
    const [suggestBy, setSuggestBy] = useState('');
    const [suggestions, setSuggestions] = useState('');
    const suggestTime = new Date();
    const suggestionsData = { suggestBy, suggestions, suggestTime };

    const giveSuggestions = async (event) => {
        event.preventDefault();

        toast.success('Thank you for your suggestions');

        event.target.reset();
    };

    return (
        <section className="relative flex flex-wrap lg:h-screen lg:items-center my-20 h-screen">
            <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                <div className="max-w-lg mx-auto text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Feel free to give suggestions </h1>

                    <p className="mt-4 text-gray-500">
                        Find the best working solutions of your coding problem. Share your knowledge and help others. Create an account and start contribute.
                    </p>
                </div>

                <form onSubmit={giveSuggestions} action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input onBlur={(e) => setSuggestBy(e.target.value)}
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
                        <label htmlFor="password" className="sr-only">Suggestions</label>
                        <div className="relative">
                            <textarea onBlur={(e) => setSuggestions(e.target.value)}
                                className="w-full h-40 p-4 pr-12 text-sm border-success rounded-lg shadow-sm"
                                placeholder="Write Suggestions"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-lg"
                        >
                            Give Suggestions
                        </button>
                    </div>
                </form>
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

export default Contact;