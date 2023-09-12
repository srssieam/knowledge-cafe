import { FiBookmark } from 'react-icons/fi';
import PropTypes from 'prop-types';
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title,cover, author, author_img, reading_time, posted_date, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt="" className='rounded-xl w-full'/>
            <div className='flex justify-between items-center my-6'>
                <div className='flex gap-2 items-center'>
                    <img src={author_img} alt="" className='w-14 h-14 rounded-[50%]'/>
                    <p><span className='font-bold text-2xl'>{author}</span><br /><span className='text-gray-700'>{posted_date}</span></p>
                </div>
                <div className='flex gap-2'>
                    <p className='text-gray-600'>{reading_time} min read </p>
                    <button onClick={()=>handleAddToBookmark(blog)} className='text-2xl'><FiBookmark></FiBookmark></button>  {/* sending blog data in handleAddtoBookmark function */}
                </div>
            </div>
            <h1 className='text-4xl font-bold my-6'>{title}</h1>
            <p>{
                    hashtags.map((tag, idx)=>{
                        return (
                        <a href="" key={idx} className='mr-4 text-gray-600'>#{tag}</a>
                        )
                    })
                }
            </p>
            <button onClick={()=> handleMarkAsRead(blog.reading_time)} className='font-bold text-blue-700 underline my-9'>Mark as read</button>
            <hr className='border-1'/>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;