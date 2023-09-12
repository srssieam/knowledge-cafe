
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
     <Header></Header>
     <main className='md:flex gap-6 mt-7'>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
     </main >
    </>
  )
}

export default App
