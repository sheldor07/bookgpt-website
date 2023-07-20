
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookCard from '../components/BookCard'
import {supabase} from '../../utils/supabase'
import { useState } from 'react'
import {properCase} from "../../utils/proper-case"
export default function Catalog({books}) {
  return (
    
    <div className="container mx-auto text-center">
        <Header/>
      <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.id}showName={properCase(book.book_name)} name={book.book_name} />
        ))}
        
    </div>
      <Footer/>
      {
        <style global jsx>{
          `
          body{
            background-color: black;
          }
          `
        }</style>
      }
    </div>
  );
}
export async function getServerSideProps() {
  let books = {};
  await  supabase.from('book-database').select('*').then(({ data, error }) => {
    if(error){
      // console.log("error", error)
    }
      books = data
      // console.log("books got",data)
    })
  

  return {
    props: {
      books,
    },
  };
}
