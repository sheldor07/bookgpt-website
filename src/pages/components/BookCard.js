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
      <div className="flex items-center p-5 transition duration-300 ease-in-out border-4 border-white rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 shadow-white hover:shadow-lg">
        <div>
          <img
            className="object-fit"
            src={`https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/${props.name}/preview.png`}
            width={500}
            height={500}
          />
        </div>
      </div>
    </Link>
  );
}
