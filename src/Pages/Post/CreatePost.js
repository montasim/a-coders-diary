import React from 'react';

const CreatePost = () => {
    return (
        <div className='flex flex-col h-screen mx-8'>
            <h3 className='text-3xl text-secondary text-center mt-20'>Create A Blog Post Here</h3>
            <form className='m-auto'>
                <input type="text" placeholder="Post Title" class="input input-secondary w-full max-w-xl" />

                <input type="text" placeholder="Post Image" class="input input-secondary w-full max-w-xl mt-4" />

                <textarea class="textarea textarea-secondary w-full max-w-xl my-4" placeholder="Post Description"></textarea>

                <input type="text" placeholder="Post Tags" class="input input-secondary w-full max-w-xl" />

                <select class="select select-secondary w-full max-w-xl my-4">
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