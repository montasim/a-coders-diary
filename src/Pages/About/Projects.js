import React from 'react';

const Projects = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center py-10 bg-gray-900'>
            <a
                href="https://red-onion-e3d33.web.app/"
                className="flex flex-col justify-between p-8 transition-shadow bg-gray-900 rounded-sm shadow-2xl group hover:shadow-lg"
            >
                <div>
                    <h5 className="text-5xl font-bold text-secondary">Red Onion</h5>
                    <div className="pt-2 mt-4 border-t-2 border-indigo-100">
                        <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">Restaurant management system.</p>
                    </div>
                </div>

                <div className="inline-flex items-center mt-16 text-secondary">
                    <p className="text-lg font-medium">Live site link</p>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 ml-3 transition-transform transform group-hover:translate-x-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </a>

            <a
                href="https://posdash-37746.web.app/"
                className="flex flex-col justify-between p-8 transition-shadow bg-gray-900 rounded-sm shadow-2xl group hover:shadow-lg"
            >
                <div>
                    <h5 className="text-5xl font-bold text-secondary">POSDash</h5>
                    <div className="pt-2 mt-4 border-t-2 border-indigo-100">
                        <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">A simple warehouse management system.</p>
                    </div>
                </div>

                <div className="inline-flex items-center mt-16 text-secondary">
                    <p className="text-lg font-medium">Live site link</p>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 ml-3 transition-transform transform group-hover:translate-x-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </a>

            <a
                href="https://montasim.github.io/phone-hunter/"
                className="flex flex-col justify-between p-8 transition-shadow bg-gray-900 rounded-sm shadow-2xl group hover:shadow-lg"
            >
                <div>
                    <h5 className="text-5xl font-bold text-secondary">Phone Hunter</h5>
                    <div className="pt-2 mt-4 border-t-2 border-indigo-100">
                        <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">Search your favorite phone.</p>
                    </div>
                </div>

                <div className="inline-flex items-center mt-16 text-secondary">
                    <p className="text-lg font-medium">Live site link</p>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 ml-3 transition-transform transform group-hover:translate-x-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </a>
        </div>
    );
};

export default Projects;