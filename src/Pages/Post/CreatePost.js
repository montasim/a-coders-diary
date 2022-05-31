import React, { useState } from 'react';

const CreatePost = () => {
    const [postName, setPostName] = useState('');
    const [postImage, setPostImage] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [postTags, setPostTags] = useState('');
    const [postCategory, setPostCategory] = useState('');
    const postAuthor = 'User';
    const postDateTime = new Date();

    const postData = { postName, postImage, postDescription, postTags, postCategory, postAuthor, postDateTime };

    console.log(postData);

    return (
        <div className='flex flex-col h-screen mx-8'>
            <h3 className='text-3xl text-secondary text-center mt-20'>Create A Blog Post Here</h3>
            <form className='m-auto'>
                <input onChange={e => setPostName(e.target.value)} type="text" placeholder="Post Title" class="input input-secondary w-full max-w-xl" />

                <input onChange={e => setPostImage(e.target.value)} type="text" placeholder="Post Image" class="input input-secondary w-full max-w-xl mt-4" />

                <textarea onChange={e => setPostDescription(e.target.value)} class="textarea textarea-secondary w-full max-w-xl my-4" placeholder="Post Description"></textarea>

                <input onChange={e => setPostTags(e.target.value)} type="text" placeholder="Post Tags" class="input input-secondary w-full max-w-xl" />

                <select onChange={e => setPostCategory(e.target.value)} class="select select-secondary w-full max-w-xl my-4">
                    <option>T-shirts</option>
                    <option>Mugs</option>
                </select>

                <br />

                <button type='submit' class="btn btn-secondary text-white btn-xs sm:btn-sm md:btn-lg lg:btn-md">Create A Post</button>
            </form>
        </div>
    );
};

export default CreatePost;