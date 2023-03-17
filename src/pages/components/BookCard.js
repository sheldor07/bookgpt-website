import Link from 'next/link'
export default function BookCard(props){
    return(
        <div className="rounded shadow-lg">
        <img className="object-scale-down h-48 w-96" src={props.image} alt="Mountain" />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-white">{props.name}</div>
          <p className="text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Link href={{
              pathname: '/books/[bookName]',
              query: { bookName: props.name },
            }} className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            Try Demo
          </Link>
        </div>
      </div>
    )
  

}