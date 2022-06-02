import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    console.log("posts", posts);

    return (
        <section>
            {
                posts.map((post, index) => <Post key={index} post={post} />)
            }
        </section>
    );
};

export default Posts;