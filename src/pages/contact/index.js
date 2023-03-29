import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="mt-8 text-center text-7xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#7928CA] to-[#FF0080] mb-10">        Meet the Team
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="flex flex-col items-center text-white">
          <p className="p-20 text-lg font-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          </p>
          <div className="text-2xl font-bold mb-2">Contact Us:</div>
          <a href="https://twitter.com/GulatiYajat" target="_blank" className="text-lg font-semibold text-[#1DA1F2] hover:underline mb-2">
            <FaTwitter className="inline mr-2" />
            @GulatiYajat
          </a>
          <a href="https://twitter.com/bamitsmanas" target="_blank" className="text-lg font-semibold text-[#1DA1F2] hover:underline">
            <FaTwitter className="inline mr-2" />
            @bamitsmanas
          </a>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/team"
            className=""
          />
          <div className="text-3xl font-bold mt-4">Yajat Gulati</div>
        </div>
      </div>
      <Footer />
      <style global jsx>
        {`
          body {
            background-color: black;
          }
        `}
      </style>
    </div>
  );
}