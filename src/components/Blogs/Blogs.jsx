import { useState } from "react";
import { useEffect } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            
    }, [])
    return (
        <>
            <div className="text text-4xl font-semibold " >
                <h3>Blogs: {blogs.length}</h3>
            </div>
        </>
    );
};

export default Blogs;