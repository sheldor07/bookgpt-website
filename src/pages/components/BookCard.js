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
      <div className="rounded-lg hover:shadow-[#1b1b1b] bg-grey p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 border-white border-4 shadow-white">
        <div>
          <img
            className="object-center"
            src={`https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/${props.name}/preview.png`}
            width={500}
            height={500}
          />
        </div>


      </div>
    </Link>
  );
}
