
import PropTypes from 'prop-types';

const BookMark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='p-4 m-4 rounded-lg bg-white'>
            <h1>{title}</h1>
        </div>
    );
};

BookMark.propTypes ={
    bookmark: PropTypes.object
}
export default BookMark;