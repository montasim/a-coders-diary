import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';

const BlogPosts = () => {
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
                posts.map((post, index) => <BlogPost key={index} post={post} />)
            }
        </section>
    );
};

export default BlogPosts;