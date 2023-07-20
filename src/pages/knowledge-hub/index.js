import Header from "../books/components/Header"
import Footer from "../components/Footer"
import BookTemplate from './components/book-card'
import { supabase } from "../../utils/supabase";
import { properCase } from "../../utils/proper-case";


export default function Templates({booksData}) {

    let books = booksData.map((book) => {
        let bookObject = {};
        bookObject['img'] = `https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/${book.book_name}/notion-mockup-1.png`;
        bookObject['price'] = book.price == 0 ? 'Free' : "$" + book.price;
        bookObject['title'] = "The Most Awesome " + properCase(book.book_name) + " Guide in the Universe";
        bookObject['description'] = book.gumroad_description;
        bookObject['gumroadUrl'] = book.gumroad_url;
        return bookObject;
    });
    return (
        <div>
            <Header />
            <div className="py-2 mt-10 text-5xl font-extrabold text-center text-transparent lg:mt-20 lg:text-7xl bg-clip-text bg-gradient-to-r from-gradient-blue to-gradient-purple">Get your guide here</div>
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
                {
                    books.map(({ img, price, title, description, gumroadUrl }) =>
                    <a href={gumroadUrl} target="_blank" rel="noopener noreferrer">
                        <BookTemplate key={title} img={img} price={price} title={title} description={description} />
                    </a>
                    )
                }
                </div>
            </div>
            <Footer />
            <style global jsx>
                {`
                body{
                    background-color: black;
                }
                `}
            </style>
        </div>
    )
}

export async function getServerSideProps() {
    let booksData = {};
    await  supabase.from('book-database').select('*').then(({ data, error }) => {
      if(error){
        // console.log("error", error)
      }
      booksData = data
        // console.log("books got",data)
      })
    
  
    return {
      props: {
        booksData,
      },
    };
  }
  