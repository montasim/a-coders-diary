import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkExtendedTable, extendedTableHandlers } from 'remark-extended-table';
import { FiClock } from 'react-icons/fi';
import { useAuthState } from 'react-firebase-hooks/auth/dist/index.cjs';
import auth from '../../Hooks/Firebase.Init';
import Loading from '../../Components/Loading';
import { toast } from 'react-toastify';

const BlogPostDetails = () => {
    const { _id } = useParams();
    const [postDetails, setPostDetails] = useState([]);
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const currentUserEmail = user?.email || user?.user?.email;

    useEffect(() => {
        fetch(`https://a-coders-diary.herokuapp.com/post-details/${_id}`)
            .then(res => res.json())
            .then(data => setPostDetails(data));
    }, [postDetails, _id]);

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

    const { postName, postDescription, postCategory, postAuthor, postAuthorImg, postDateTime } = postDetails;

    return (
        <section className='mx-8'>
            <div className="font-sans mb-6">
                <p className="text-base md:text-sm text-primary font-bold">&lt; <Link to="/" className="text-base md:text-sm text-primary font-bold no-underline hover:underline">BACK TO BLOG</Link></p>
                <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
                    <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        remarkPlugins={[[remarkGfm, { singleTilde: false }], remarkGfm, remarkMath, rehypeKatex, remarkExtendedTable]}
                        children={postCategory + ' : ' + postName} />
                </h1>
                <div className="badge badge-primary my-2">{postCategory}</div>
                <p className="text-base font-normal text-gray-600 flex items-center">
                    <FiClock className='mr-2' />
                    <small>{postDateTime?.slice(0, 10)}</small>
                </p>
            </div>

            <div>
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    remarkPlugins={[[remarkGfm, { singleTilde: false }], remarkGfm, remarkMath, rehypeKatex, remarkExtendedTable]}
                    children={postDescription} />
            </div>

            <hr className="border-b-2 border-gray-400 mb-8 mt-16" />

            <div className="flex w-full items-center font-sans">
                <img className="w-10 h-10 rounded-full mr-4" src={postAuthorImg} alt="Avatar of Author" />
                <div className="flex-1 px-2">
                    <p className="font-bold text-sm leading-none mb-2">{postAuthor?.split('@')[0]}</p>
                    <p className="text-gray-600 text-xs">Member since {userData?.[0]?.userCreationTime?.slice(0, 10)}</p>
                </div>
                <div className="justify-end">
                    <button onClick={() => navigate(`/author-details/${postAuthor}`)} className="bg-transparent hover:bg-primary border border-primary text-xs text-primary hover:text-white font-bold py-2 px-4 rounded-full">About Author</button>
                </div>
            </div>

            <hr className="border-b-2 border-gray-400 mt-8 mb-16" />

            <div className="font-sans flex justify-between content-center px-4 pb-12">
                <div className="text-left">
                    <span className="text-xs md:text-sm font-normal text-gray-600">&lt; Previous Post</span><br />
                    <p><a href="#" className="break-normal text-base md:text-sm text-primary font-bold no-underline hover:underline">Blog title</a></p>
                </div>
                <div className="text-right">
                    <span className="text-xs md:text-sm font-normal text-gray-600">Next Post &gt;</span><br />
                    <p><a href="#" className="break-normal text-base md:text-sm text-primary font-bold no-underline hover:underline">Blog title</a></p>
                </div>
            </div>
        </section>
    );
};

export default BlogPostDetails;