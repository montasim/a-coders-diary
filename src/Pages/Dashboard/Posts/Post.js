import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { _id, postName, postDescription, postTags, postCategory, postAuthor, postDateTime } = post;

    return (
        <tr>
            {/* <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th> */}
            <th>1</th>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className='w-74'>
                        <h3 class="font-bold">{postName?.slice(0, 32) + '...'}</h3>
                        <p class="text-sm opacity-50">{postDescription?.length > 60 ? postDescription?.slice(0, 60) : postDescription}</p>
                        <span class="badge badge-ghost badge-sm">{postTags}</span>
                    </div>
                </div>
            </td>
            <td>
                {postAuthor}
                <br />
                <span class="text-xs">{postDateTime?.slice(0, 10)}</span>
            </td>
            <td>
                <div class="flex items-center">
                    <Link to={`/dashboard/edit-post/${_id}`}
                        class="z-20 block p-2 text-blue-700 transition-all bg-blue-100 border-2 border-white rounded-full active:bg-blue-50 hover:scale-110 focus:outline-none focus:ring"
                        type="button"
                    >
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </Link>

                    <button
                        class="z-30 block p-2 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                        type="button"
                    >
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </td>
        </tr >
    );
};

export default Post;