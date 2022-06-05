import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsGoogle, BsGithub, BsFacebook, BsTwitter } from 'react-icons/bs';
import { useAuthState } from 'react-firebase-hooks/auth/dist/index.cjs';
import auth from '../../Hooks/Firebase.Init';
import Loading from '../../Components/Loading';
import { toast } from 'react-toastify';

const Profile = () => {
    const { _id } = useParams();
    const [userData, setUserData] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const currentUserEmail = user?.email || user?.user?.email;

    useEffect(() => {
        fetch(`https://a-coders-diary.herokuapp.com/users?userEmail=${currentUserEmail}`)
            .then(res => res.json())
            .then(data => setUserData(data));
    }, [currentUserEmail]);

    if (loading) {
        return <Loading />;
    };

    if (error) {
        toast.error(`${error?.message?.slice(17, -2)}`);
    };

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl m-20 p-6">
                <figure><img src={userData?.[0]?.userImg} alt="Album" /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div>
                            <h2 className="card-title">{userData?.[0]?.userName}</h2>
                            <p className='text-sm'>Member since {userData?.[0]?.userCreationTime?.slice(0, 10)}</p>
                        </div>

                        <div className="card-actions justify-end">
                            <button className="btn btn-sm bg-gradient-to-r from-primary to-secondary text-white text-sm border-0">Edit Profile</button>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quidem error quisquam doloribus, hic exercitationem similique necessitatibus placeat mollitia harum recusandae. Fuga ipsam eum doloribus reprehenderit ipsum reiciendis obcaecati natus!</p>
                    <div className="flex items-center gap-x-2 mt-4">
                        <button
                            className="p-2 text-sm font-medium text-white bg-primary rounded-lg"
                        >
                            <BsGoogle className='text-md' />
                        </button>

                        <button
                            className="p-2 text-sm font-medium text-white bg-primary rounded-lg"
                        >
                            <BsGithub className='text-md' />
                        </button>

                        <button
                            className="p-2 text-sm font-medium text-white bg-primary rounded-lg"
                        >
                            <BsFacebook className='text-md' />
                        </button>

                        <button
                            className="p-2 text-sm font-medium text-white bg-primary rounded-lg"
                        >
                            <BsTwitter className='text-md' />
                        </button>
                    </div>
                </div>
            </div>

            <section class="bg-gray-100">
                <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div class="lg:py-12 lg:col-span-2">
                            <p class="max-w-xl text-lg">
                                At the same time, the fact that we are wholly owned and totally independent from manufacturer and other group
                                control gives you confidence that we will only recommend what is right for you.
                            </p>

                            <div class="mt-8">
                                <a href="" class="text-2xl font-bold text-pink-600"> 0151 475 4450 </a>

                                <address class="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
                            </div>
                        </div>

                        <div class="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                            <form action="" class="space-y-4">
                                <div>
                                    <label class="sr-only" for="name">Name</label>
                                    <input class="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Name" type="text" id="name" />
                                </div>

                                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label class="sr-only" for="email">Email</label>
                                        <input
                                            class="w-full p-3 text-sm border-gray-200 rounded-lg"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <label class="sr-only" for="phone">Phone</label>
                                        <input
                                            class="w-full p-3 text-sm border-gray-200 rounded-lg"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                    <div>
                                        <input class="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Github link" type="text" id="name" />
                                    </div>

                                    <div>
                                        <input class="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="LinkedIn link" type="text" id="name" />
                                    </div>

                                    <div>
                                        <input class="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Facebook link" type="text" id="name" />
                                    </div>
                                </div>

                                <div>
                                    <label class="sr-only" for="message">Message</label>
                                    <textarea
                                        class="w-full p-3 text-sm border-gray-200 rounded-lg"
                                        placeholder="About yourself"
                                        rows="4"
                                        id="message"
                                    ></textarea>
                                </div>

                                <div class="mt-4">
                                    <button
                                        type="submit"
                                        class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                                    >
                                        <span class="font-medium"> Update Profile </span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5 ml-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;