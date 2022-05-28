import React from 'react';

const CreatePost = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center lg:mx-8 sm:mx-4'>
            <h3 className='text-2xl text-secondary my-12'>Create A Blog Post Here</h3>

            <div className='grid'>
                <form className='grid-cols-8 items-center justify-center'>
                    <input type="text" placeholder="Post Title" class="input input-secondary w-full max-w-xl" />

                    <textarea class="textarea textarea-secondary w-full max-w-xl my-4" placeholder="Post Description"></textarea>

                    <input type="text" placeholder="Post Tags" class="input input-secondary w-full max-w-xl" />

                    <select class="select select-secondary w-full max-w-xl my-4">
                        <option>T-shirts</option>
                        <option>Mugs</option>
                    </select>

                    <br />

                    <button type='submit' class="btn btn-secondary text-white btn-xs sm:btn-sm md:btn-lg lg:btn-md">Responsive</button>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;