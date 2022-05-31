import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkExtendedTable, extendedTableHandlers } from 'remark-extended-table';

const CreatePost = () => {
    const [postName, setPostName] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [postTags, setPostTags] = useState('');
    const [postCategory, setPostCategory] = useState('');
    const postAuthor = 'User';
    const postDateTime = new Date();

    const postData = { postName, postDescription, postTags, postCategory, postAuthor, postDateTime };

    console.log(postData);

    return (
        <div className="flex text-xl rounded-xl m-8">
            <textarea className='w-full h-screen bg-gray-800 text-white text-justify p-8' defaultValue={postDescription} onChange={(e) => setPostDescription(e?.target?.value)}></textarea>

            <div className="w-full h-screen bg-slate-200 p-8 overflow-auto">
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    remarkPlugins={[[remarkGfm, { singleTilde: false }], remarkGfm, remarkMath, rehypeKatex, remarkExtendedTable]}
                    children={postDescription} />
            </div>
        </div>
    );
};

export default CreatePost;