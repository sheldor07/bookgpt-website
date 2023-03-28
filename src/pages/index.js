import Link from "next/link"
import Image from "next/image"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroText from "./components/HeroText"
import {supabase} from "../utils/supabase"
import BookCard from "./components/BookCard"
import {properCase} from "../utils/proper-case"
export default function Home({books}) {
  return (
    <div className="overflow-auto " >
      <Header/>
      <div className="">
     <HeroText/>
     <div className="mx-5 mt-24 lg:mx-24">
      <div className="p-1 pb-20 lg:text-left text-center text-7xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#7928CA] to-[#FF0080]">Explore our book catalog</div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.id} book_description = {book.catalog_description}showName={properCase(book.book_name)} name={book.book_name} />
        ))}
        
      </div>
      
     
       </div>
      <Footer className="dark"/>
      </div>
   
      {
        <style global jsx>{
          `
          body{
            background-color: black;
          }
          `
        }</style>
      }
    
   </div>)
}
export async function getServerSideProps() {
  let books = {};
  await  supabase.from('book-database').select('*').then(({ data, error }) => {
    if(error){
      console.log("error", error)
    }
      books = data
      console.log("books got",data)
    })
  

  return {
    props: {
      books,
    },
  };
}
