import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="mt-8 text-center text-7xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#7928CA] to-[#FF0080] mb-10">
        Meet the Team
      </div>
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div className="flex flex-col items-center m-5">
        <img
  src="https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/team"
  className="object-scale-down w-full rounded-xl"
/>
        </div>
        <div className="flex flex-col items-center text-white">
          <p className="p-5 text-lg text-center lg:text-left lg:p-20 font-base">
            Yajat and I (Manas) initiated GPT Book Club with a foundational
            concept: the implementation of an Atomic Habits GPT. <br></br>
            After a trial
            run and collecting user feedback, we enhanced our service and
            returned to our core value proposition - empowering users to digest
            books at an unprecedented speed. With our search functionality,
            users can find direct answers to questions they would have wanted to
            ask the book if it were a living entity - for instance, asking the
            Atomic Habit GPT, "How can I stop procrastinating?".<br></br> 
            Additionally,
            we have created Notion templates that serve as abridged versions of
            the books, containing key ideas from each one. 
            <br></br> GPT Book Club was
            founded on the belief that the knowledge embedded within these books
            is invaluable; however, due to limited time, reading them can be
            quite challenging. We are actively seeking collaboration for this
            project. If you are a book publisher or an author looking to
            differentiate yourself, look no further - the future of books is
            here.{" "}
          </p>
        </div>
      </div>
      <div className="mb-2 text-2xl font-bold text-center text-white">
        Contact Us:
      </div>
      <div className="flex items-center justify-center mb-2 space-x-4">
        <a
          href="https://twitter.com/GulatiYajat"
          target="_blank"
          className="text-lg font-semibold text-[#1DA1F2] hover:underline"
        >
          <FaTwitter className="inline mr-2" />
          @GulatiYajat
        </a>
        <a
          href="https://twitter.com/bamitsmanas"
          target="_blank"
          className="text-lg font-semibold text-[#1DA1F2] hover:underline"
        >
          <FaTwitter className="inline mr-2" />
          @bamitsmanas
        </a>
      </div>
      <Footer />
      <style jsx global>{`
        body {
          background-color: black;
        }
      `}</style>
    </div>
  );
}
