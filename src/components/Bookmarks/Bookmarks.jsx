import { useState } from "react";


const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState([])
    return (
        <div className="text-3xl  ">
            <h3>Bookmarks: {bookmarks.length}</h3>
        </div>
    );
};

export default Bookmarks;