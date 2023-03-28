import Link from "next/link";
import Image from "next/image";
export default function BookCard(props) {
  return (
    <Link
      href={{
        pathname: "/[bookName]",
        query: { bookName: props.name },
      }}
    >
      <div className="rounded hover:bg-[#1b1b1b] shadow-white">
        <div>
          <Image
            className="object-center"
            src={`https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/${props.name}/preview.png`}
            width={500}
            height={500}
          />
        </div>

        <div className="px-6 py-4">
          <div className="mb-2 text-2xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#7928CA] to-[#FF0080] ">
            {props.showName + ` GPT`}
            <p>
              <span className="text-base font-normal text-gray-600 ">
                {props.book_description}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
