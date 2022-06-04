import React from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkExtendedTable, extendedTableHandlers } from 'remark-extended-table';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { _id, postName, postDescription, postCategory, postAuthor, postAuthorImg, postDateTime } = post;

    return (
        <Link
            className="relative block p-8 overflow-hidden border border-gray-100 rounded-lg"
            to={`/post-details/${_id}`}
        >
            <span
                className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-primary via-blue-500 to-secondary"
            ></span>

            <div className="justify-between sm:flex">
                <div>
                    <h5 className="text-xl font-bold text-gray-900">
                        <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            remarkPlugins={[[remarkGfm, { singleTilde: false }], remarkGfm, remarkMath, rehypeKatex, remarkExtendedTable]}
                            children={`${postName.length > 50 ? postName?.slice(0, 50) + '...' : postName}`} />
                    </h5>
                    <p className="mt-1 text-xs font-medium text-gray-600">{postAuthor.split('@')[0]}</p>
                </div>

                <div className="flex-shrink-0 hidden ml-3 sm:block">
                    <img
                        className="object-cover w-12 h-12 rounded-lg shadow-sm"
                        src={postAuthorImg}
                        alt=""
                    />
                </div>
            </div>

            <div className="mt-4 sm:pr-8">
                <p className="text-sm text-gray-500">
                    <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        remarkPlugins={[[remarkGfm, { singleTilde: false }], remarkGfm, remarkMath, rehypeKatex, remarkExtendedTable]}
                        children={postDescription?.length > 210 ? postDescription?.slice(0, 210) + '...' : postDescription} />
                </p>
            </div>

            <dl className="flex mt-6">
                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">Category</dt>
                    <dd className="text-xs text-gray-500">{postCategory}</dd>
                </div>

                <div className="flex flex-col-reverse ml-3 sm:ml-6">
                    <dt className="text-sm font-medium text-gray-600">Published</dt>
                    <dd className="text-xs text-gray-500">{postDateTime.slice(0, 10)}</dd>
                </div>

                <div className="flex flex-col-reverse ml-3 sm:ml-6">
                    <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                    <dd className="text-xs text-gray-500">3 minute</dd>
                </div>
            </dl>
        </Link>
    );
};

export default Post;