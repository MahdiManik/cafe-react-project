import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types"

const Bookmarks = ({ bookmarks, readingTime }) => {
    
    return (
        <div className="w-1/3">
            <div className="bg-gray-300 p-4 mb-2 rounded-lg">
                <h3 className="text-2xl font-semibold ">Reading Time: {readingTime}</h3>
            </div>
            <div className="bg-gray-300 p-2 rounded-lg">
                <h3 className="text-2xl font-semibold">Bookmarks: {bookmarks.length}</h3>

                {

                    bookmarks.map((bookmark, i) => <Bookmark key={i} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>


    )
}


Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}


export default Bookmarks;