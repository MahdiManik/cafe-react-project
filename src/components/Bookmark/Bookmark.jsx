
import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {

    const {title} = bookmark

  return (
    <div className='bg-white p-4 m-4 rounded-lg'>
        <div className='text-lg font-semibold'>{title}</div>
    </div>
  )
}

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark