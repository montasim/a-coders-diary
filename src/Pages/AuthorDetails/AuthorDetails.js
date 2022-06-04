import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsGoogle, BsGithub, BsFacebook, BsTwitter } from 'react-icons/bs';

const AuthorDetails = () => {
    const { authorEmail } = useParams();
    const [authorDetails, setAuthorDetails] = useState([]);

    useEffect(() => {
        fetch(`https://a-coders-diary.herokuapp.com/users?userEmail=${authorEmail}`)
            .then(res => res.json())
            .then(data => setAuthorDetails(data));
    }, [authorEmail]);

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-20 p-6">
            <figure><img src={authorDetails[0]?.userImg} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{authorDetails[0]?.userName}</h2>
                <p className='text-sm'>Member since {authorDetails[0]?.userCreationTime?.slice(0, 10)}</p>
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
    );
};

export default AuthorDetails;