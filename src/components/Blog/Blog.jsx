import { FiBookmark } from 'react-icons/fi';
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
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
                    <button className='text-2xl'><FiBookmark></FiBookmark></button>
                </div>
            </div>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p>{
                    hashtags.map((tag, idx)=>{
                        return (
                        <a href="" key={idx} className='mr-4 text-gray-600'>#{tag}</a>
                        )
                    })
                }
            </p>
        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired
}
export default Blog;