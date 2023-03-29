import Link from 'next/link'
export default function HeroText(){
    return(
    <div className="flex flex-col items-center">
        <div className="mt-24 text-6xl sm:text-7xl lg:text-9xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gradient-blue to-gradient-purple lg:w-auto w-11/12">
            ChatGPT, but for books.
        </div>
        <div className="px-4 mt-10 text-xl font-normal leading-9 text-center text-gray-600 lg:mt-24 sm:px-10 lg:px-32 w-11/12">
            BookGPT is the ultimate solution for book lovers who want to keep up with the latest literary trends but don't have the time to read every book. Our AI-powered search reads the book for you, so you can get the answers you need in seconds. Plus, our interactive, minified version of the book makes it easy to read the most important parts in a fraction of the time.
        </div>
        {/* <div className="grid grid-cols-1 gap-3 mt-10 lg:gap-6 sm:grid-cols-2 lg:mt-24">
            <button className="w-64 p-2 text-xl text-black rounded-lg font-base bg-neutral-50">
                Get in touch
            </button>
            <button className="w-64 p-2 text-xl text-white rounded-lg font-base bg-gradient-to-r from-green-400 to-blue-500">
                <Link href="/catalog">Explore our Catalog</Link>

            </button>
        </div> */}
    </div>
    )
}