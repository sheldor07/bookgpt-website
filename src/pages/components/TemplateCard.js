import Link from "next/link";
import Image from "next/image";
export default function TemplateCard(props) {
  return (

      <div className="rounded hover:bg-[#1b1b1b] shadow-white">
        <div>
          <Image
            className="object-center"
            src={`https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/atomic-habits/preview.png`}
            width={500}
            height={500}
          />
        </div>

      </div>
  );
}
