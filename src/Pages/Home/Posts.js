import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://a-coders-diary.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <section>
            {
                posts?.length === 0 ?
                    <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                        <div class="card-body text-center text-info text-xl">
                            <p>Sorry! No post to display.</p>
                        </div>
                    </div>
                    : posts.map((post, index) => <Post key={index} post={post} />)
            }
        </section >
    );
};

export default Posts;