import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({bookmarks}) => {
    console.log(bookmarks, 'i am from BookMarks')
    return (
        <div className="md:w-1/3 bg-slate-200 rounded-lg p-7">
            <h2 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>)
            }
        </div>
    );
};
BookMarks.propTypes ={
    bookmarks: PropTypes.object
}
export default BookMarks;