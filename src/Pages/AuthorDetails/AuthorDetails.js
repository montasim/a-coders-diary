import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsGoogle, BsGithub, BsFacebook, BsTwitter } from 'react-icons/bs';

const AuthorDetails = () => {
    const { _id } = useParams();
    const [authorDetails, setAuthorDetails] = useState([]);

    useEffect(() => {
        fetch(`https://a-coders-diary.herokuapp.com/author-details/${_id}`)
            .then(res => res.json())
            .then(data => setAuthorDetails(data));
    }, [authorDetails, _id]);

    return (
        <div class="card lg:card-side bg-base-100 shadow-xl m-20 p-6">
            <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">Author Name</h2>
                <p>Author Rank</p>
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