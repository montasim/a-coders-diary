import React from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';

const BlogPost = () => {
    return (
        <article class="p-6 bg-white sm:p-8 rounded-xl ring ring-indigo-50 lg:mx-10 sm:mx-2 my-6">
            <div class="flex items-start">
                <div
                    class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                    aria-hidden="true"
                >
                    <div class="flex items-center gap-1">
                        <span class="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                        <span class="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                        <span class="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                        <span class="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                        <span class="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                    </div>
                </div>

                <div class="sm:ml-8">
                    <strong
                        class="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
                    >
                        Topics Name
                    </strong>

                    <h2 class="mt-4 text-lg font-medium sm:text-xl">
                        <a href="" class="hover:underline"> Some Interesting Title </a>
                    </h2>

                    <p class="mt-1 text-sm text-gray-700">
                        Description - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nulla
                        amet voluptatum sit rerum, atque, quo culpa ut necessitatibus eius
                        suscipit eum accusamus, aperiam voluptas exercitationem facere aliquid
                        fuga. Sint.
                    </p>

                    <div class="mt-4 sm:flex sm:items-center sm:gap-2">
                        <div class="flex items-center text-gray-500">
                            <FiClock />
                            <p class="ml-1 text-xs font-medium">Post Time - Date - Time</p>
                        </div>

                        <span class="hidden sm:block" aria-hidden="true">&middot;</span>

                        <p class="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                            Tags: <a href="" class="hover:text-gray-700">JavaScript, </a>

                            <a href="" class="hover:text-gray-700">NodeJS</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex justify-end">
                <strong
                    class="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
                >
                    <FaUserEdit className='mr-2' />

                    <span class="text-[10px] font-medium sm:text-xs">Posted By - Name</span>
                </strong>
            </div>
        </article>
    );
};

export default BlogPost;