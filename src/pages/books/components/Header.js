export default function Header({gumroadUrl}) {
  return (
    <header className="flex items-center justify-between h-24 py-4 ">
      <div className="flex items-center ml-6">
        <a href="/">
          <img
            src="https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/logo.png"
            alt="Logo"
            className="w-16 h-16 rounded md:h-20 md:w-20"
          />
        </a>
        <a
          href="/"
          className="px-0 text-xl font-bold text-transparent transition-all lg:px-2 md:text-xl bg-clip-text bg-gradient-to-r from-gradient-blue to-gradient-purple"
        >
          Join GPT Book Club
        </a>
      </div>

      <div className="hidden md:block">
        <a
          href={gumroadUrl}
          className="mr-4 text-xl text-white transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gradient-blue hover:to-gradient-purple hover:bg-black"
        >
          Notion Template
        </a>
        <a
          href="/contact"
          className="mr-4 text-xl text-white transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gradient-blue hover:to-gradient-purple hover:bg-black"
        >
          Contact
        </a>
      </div>

      <div className="mr-6">
        <a
          href="/knowledge-hub"
          className="hidden px-4 py-2 text-xl text-white transition duration-500 ease-in-out transform bg-black rounded-md md:flex collapse md:visible bg-gradient-to-r from-gradient-blue to-gradient-purple hover:scale-150"
        >
          Explore More Books
        </a>
      </div>
    </header>
  );
}