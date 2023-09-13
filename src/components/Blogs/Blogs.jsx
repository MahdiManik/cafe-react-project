import { useState } from "react";
import { useEffect } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; // ES6

const Blogs = ({ handleAddToBookmarks, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])
    return (
        <>
            <div className="w-4/6" >
                <h3 className="text-2xl font-semibold rounded-lg mb-2 p-4 bg-gray-300">Blogs: {blogs.length}</h3>
                {
                    blogs.map(blog => (
                        <Blog
                            handleMarkAsRead={handleMarkAsRead}
                            handleAddToBookmarks={handleAddToBookmarks}
                            key={blog.id}
                            blog={blog}
                        ></Blog>
                    ))
                }
            </div>
        </>
    );
};


Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blogs;