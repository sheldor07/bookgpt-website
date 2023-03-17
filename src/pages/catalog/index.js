import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookCard from '../components/BookCard'
import {supabase} from '../../utils/supabase'
import { useState } from 'react'
export default async function Catalog() {
  const books = await supabase.from('book-database').select("bookName") 

  return (
    
    <div className="container mx-auto text-center">
        <Header/>
      <h1>Catalog</h1>
      <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {books.map(item => <BookCard name={item}/>)}
    </div>
      <Footer/>
    </div>
  );
}
