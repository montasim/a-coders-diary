import React from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';

const BlogPost = ({ post }) => {
    const { postName, postDescription, postTags, postCategory, postAuthor, postDateTime } = post;

    return (
        <article className="p-6 bg-white sm:p-8 rounded-xl ring ring-success lg:mx-10 mx-4 my-6">
            <div className="flex items-start">
                <div
                    className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-primary"
                    aria-hidden="true"
                >
                    <div className="flex items-center gap-1">
                        <span className="h-8 w-0.5 rounded-full bg-gradient-to-r from-primary to-secondary"></span>
                        <span className="h-6 w-0.5 rounded-full bg-gradient-to-r from-primary to-secondary"></span>
                        <span className="h-4 w-0.5 rounded-full bg-gradient-to-r from-primary to-secondary"></span>
                        <span className="h-6 w-0.5 rounded-full bg-gradient-to-r from-primary to-secondary"></span>
                        <span className="h-8 w-0.5 rounded-full bg-gradient-to-r from-primary to-secondary"></span>
                    </div>
                </div>

                <div className="sm:ml-8">
                    <strong
                        className="rounded bg-gradient-to-r from-primary to-secondary px-3 py-1.5 text-[10px] font-medium text-white"
                    >
                        {postCategory}
                    </strong>

                    <h2 className="mt-4 text-lg font-medium sm:text-xl">
                        <a href="" className="hover:underline"> {postName} </a>
                    </h2>

                    <p className="mt-1 text-sm text-info">
                        {postDescription}
                    </p>

                    <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                        <div className="flex items-center text-gray-500">
                            <FiClock />
                            <p className="ml-1 text-xs font-medium">Posted on - {postDateTime?.slice(0, 10)}</p>
                        </div>

                        <span className="h-3 w-0.5 rounded-full bg-gradient-to-r from-primary to-secondary"></span>

                        <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                            Tags: {postTags}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <strong
                    className="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-gradient-to-r from-primary to-secondary py-1.5 px-3 text-white"
                >
                    <FaUserEdit className='mr-2' />

                    <span className="text-[10px] font-medium sm:text-xs">Posted By - {postAuthor}</span>
                </strong>
            </div>
        </article>
    );
};

export default BlogPost;