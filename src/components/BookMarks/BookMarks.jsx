import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({bookmarks, readingTime}) => {
    console.log(bookmarks, 'i am from BookMarks')
    return (
        <div className='md:w-1/3'>
            <div className='p-6 mb-4 bg-slate-200 border-2 border-purple-700 rounded-lg'>
                <p className='text-purple-700 text-2xl font-bold text-center'>Spent time on read : {readingTime} min</p>
            </div>
            <div className="bg-slate-200 rounded-lg p-7">
            <h2 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>)
            }
        </div>
        </div>
    );
};
BookMarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default BookMarks;