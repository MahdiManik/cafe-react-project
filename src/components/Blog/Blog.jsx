import PropTypes from 'prop-types'; // ES6
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
    console.log(blog);
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='space-y-6'>
            <img className=' w-full rounded-lg' src={cover} alt={`cover image of the ${title} `} />
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center gap-4'>
                    <div>
                        <img className='w-14 h-14' src={author_img} alt="" />
                    </div>
                    <div>
                        <h4 className='text-lg font-semibold'>{author}</h4>
                        <p className='text-sm text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <p className='text-sm text-gray-500 pl-2'>{reading_time}  min read</p>
                    <button className='text-gray-500'
                        onClick={() => handleAddToBookmarks(blog)}>
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p>
                {
                    hashtags.map(has => <span key={has} className='text-lg text-gray-500'> <a href="">#{has}</a></span>)
                }
            </p>
            <div className='pb-28'>
                <button className='text-violet-700 text-base font-normal'
                    onClick={() =>handleMarkAsRead(reading_time)}
                >Mark as read</button>
            </div>
        </div>

    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;