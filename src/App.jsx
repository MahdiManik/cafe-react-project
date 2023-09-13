import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"

function App() {


  return (
    <>
      <Header></Header>
      <div className="md:flex md: justify-between  container mx-auto mt-8">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>


    </>
  )
}

export default App
