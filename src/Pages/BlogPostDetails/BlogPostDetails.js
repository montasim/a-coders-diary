import React from 'react';

const BlogPostDetails = () => {
    return (
        <section className='mx-8'>
            <div className="font-sans mb-6">
                <p className="text-base md:text-sm text-green-500 font-bold">&lt; <a href="#" className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">BACK TO BLOG</a></p>
                <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">Title</h1>
                <p className="text-sm md:text-base font-normal text-gray-600">Date - Time - Date</p>
            </div>

            <div>
                <p className="pb-6">Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum.</p>

                <ol>
                    <li className="py-3">Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.</li>
                    <li className="py-3">Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.</li>
                    <li className="py-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat tellus.</li>
                </ol>

                <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">Example of blockquote - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</blockquote>

                <p className="py-6">Example code block:</p>
                <pre className="bg-gray-900 rounded text-white font-mono text-base p-2 md:p-4">
                    <code className="break-words whitespace-pre-wrap">
                        &lt;header className="site-header outer"&gt;
                        &lt;div className="inner"&gt;
                        &lt;/div&gt;
                        &lt;/header&gt;
                    </code>
                </pre>

            </div>

            <div className="text-base md:text-sm text-gray-500 px-4 py-6">
                Tags: <a href="#" className="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a> . <a href="#" className="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a>
            </div>

            <hr className="border-b-2 border-gray-400 mb-8" />

            <div className="flex w-full items-center font-sans px-4 py-12">
                <img className="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                <div className="flex-1 px-2">
                    <p className="text-base font-bold text-base md:text-xl leading-none mb-2">Jo Bloggerson</p>
                    <p className="text-gray-600 text-xs md:text-base">Minimal Blog Tailwind CSS template by <a className="text-green-500 no-underline hover:underline" href="https://www.tailwindtoolbox.com">TailwindToolbox.com</a></p>
                </div>
                <div className="justify-end">
                    <button className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">Read More</button>
                </div>
            </div>

            <hr className="border-b-2 border-gray-400 mb-8" />

            <div className="font-sans flex justify-between content-center px-4 pb-12">
                <div className="text-left">
                    <span className="text-xs md:text-sm font-normal text-gray-600">&lt; Previous Post</span><br />
                    <p><a href="#" className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline">Blog title</a></p>
                </div>
                <div className="text-right">
                    <span className="text-xs md:text-sm font-normal text-gray-600">Next Post &gt;</span><br />
                    <p><a href="#" className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline">Blog title</a></p>
                </div>
            </div>
        </section>
    );
};

export default BlogPostDetails;