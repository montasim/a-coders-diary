import React, { useState } from 'react';
import auth from '../../Hooks/Firebase.Init';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkExtendedTable, extendedTableHandlers } from 'remark-extended-table';
import { useAuthState } from 'react-firebase-hooks/auth';

const CreatePost = () => {
    const [user, loading, error] = useAuthState(auth);
    const [postName, setPostName] = useState('');
    const [postDescription, setPostDescription] = useState('Write your post description here');
    const [postTags, setPostTags] = useState('');
    const [postCategory, setPostCategory] = useState('');
    const postAuthor = user?.user?.email || user?.email;
    const postDateTime = new Date();

    const postData = { postName, postDescription, postTags, postCategory, postAuthor, postDateTime };

    const createPost = event => {
        event.preventDefault();

        event.target.reset();
    };

    return (
        <form onSubmit={createPost} className='rounded-xl m-12 text-info'>
            <input onBlur={e => setPostName(e.target.value)} type='text' className='input input-primary input-md w-full' placeholder='Write your post title here' required></input>

            <div className="flex flex-col lg:flex-row text-lg my-4">
                <textarea className='w-full h-64 lg:h-96 bg-primary text-white text-justify p-8' defaultValue={postDescription} onChange={(e) => setPostDescription(e?.target?.value)} required></textarea>

                <div className="w-full h-64 lg:h-96 bg-slate-200 p-8 overflow-auto">
                    <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        remarkPlugins={[[remarkGfm, { singleTilde: false }], remarkGfm, remarkMath, rehypeKatex, remarkExtendedTable]}
                        children={postDescription} />
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <select onBlur={e => setPostCategory(e.target.value)} className="select select-primary w-64 mb-4 required">
                    <option disabled defaultValue>Choose post category</option>
                    <option>T-shirts</option>
                    <option>Mugs</option>
                </select>

                <input onBlur={e => setPostTags(e.target.value)} type='text' className='input input-primary input-md w-64' placeholder='Write your post tags here' required></input>
            </div>

            <div className='flex justify-center items-center'>
                <button type='submit'
                    className="mt-8 px-4 py-4 text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary hover:bg-primary rounded-lg w-full lg:w-64"
                >
                    Create Post
                </button>
            </div>
        </form>
    );
};

export default CreatePost;