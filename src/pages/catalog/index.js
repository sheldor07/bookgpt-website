
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookCard from '../components/BookCard'
import {supabase} from '../../utils/supabase'
import { useState } from 'react'
export default function Catalog() {
  const [firstLoad, setFirstLoad] = useState(true)
  const [books, setBooks] = useState([])
  async function getBooks(){
   await  supabase.from('book-database').select('*').then(({ data, error }) => {
    if(error){
      console.log("error", error)
    }
      setBooks(data)
      console.log("books got",data)
    })
  }
  if(firstLoad){
    getBooks()
    setFirstLoad(false)
  }
  return (
    
    <div className="container mx-auto text-center">
        <Header/>
      <h1>Catalog</h1>
      <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {books.map((book) => (
          <BookCard  key={book.id} name={book.bookName} />
        ))}
    </div>
      <Footer/>
    </div>
  );
}
