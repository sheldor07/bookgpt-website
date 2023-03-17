import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AtomicHabits from "../../../public/atomic-habits-preview.png"
import BookCard from '../components/BookCard'
export default function Catalog() {
   let books =['AtomicHabits','PsychologyOfMoney']
   let bookSummary=['']
  return (
    
    <div className="container mx-auto text-center">
        <Header/>
      <h1>Catalog</h1>
      <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {books.map(item => <BookCard name={item}image={item+"Preview"}/>)}
    </div>
      <Footer/>
    </div>
  );
}
