import React, { useEffect, useState } from 'react';
import Tag from './Tag';

const Tags = () => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        fetch('https://a-coders-diary.herokuapp.com/tags')
            .then(res => res.json())
            .then(data => setTags(data));
    }, [tags]);

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Description</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tags?.length === 0 ?
                            <p class="text-center text-info text-xl my-20">Sorry! No tags to display. Add tag to display here.</p>
                            : tags.map((tag, index) => <Tag key={index} tag={tag} index={index} />)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Serial</th>
                            <th>Description</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default Tags;