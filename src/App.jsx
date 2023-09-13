import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"
import { useState } from "react"


function App() {
  const [bookmarks, setBookmarks] = useState([])


  const handleAddToBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }


  const [readingTime, setReadingTime] = useState(0);
  const handleMarkAsRead = time => {
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
  }


  return (
    <>

      <Header></Header>
      <div className="md:flex md:justify-between  container mx-auto mt-8 gap-6">
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}
        ></Bookmarks>
      </div>

    </>
  )
}

export default App
