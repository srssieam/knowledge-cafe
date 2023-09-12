
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] =useState([]);

  const handleAddToBookmark =(blog)=>{ 
    console.log('bookmark adding soon')
  }

  return (
    <>
     <Header></Header>
     <main className='md:flex gap-6 mt-7'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>  {/* sending this function as props to get bookmarked blog. */}
        <BookMarks></BookMarks>
     </main >
    </>
  )
}

export default App
