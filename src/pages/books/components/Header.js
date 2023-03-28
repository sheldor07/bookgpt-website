export default function Header() {
  return (
    <header className="flex items-center justify-between h-24 py-4 ">
      <div className="flex items-center ml-6">
        <img
          src="https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/logo.png"
          alt="Logo"
          className="w-20 h-20 rounded"
        />
        <a
          href="#"
          className="px-2 text-xl font-bold text-transparent transition-all bg-clip-text bg-gradient-to-r from-gradient-blue to-gradient-purple"
        >
          Join GPT Book Club
        </a>
      </div>

      <div className="hidden md:block">
        <a
          href="#"
          className="mr-4 text-xl text-white transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gradient-blue hover:to-gradient-purple hover:bg-black"
        >
          Notion Template
        </a>
        <a
          href="#"
          className="mr-4 text-xl text-white transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gradient-blue hover:to-gradient-purple hover:bg-black"
        >
          Contact
        </a>
      </div>

      <div className="mr-6">
        <a
          href="#"
          className="px-4 py-2 mr-4 text-xl text-white transition duration-500 ease-in-out transform bg-black rounded-md hover:bg-gradient-to-r hover:from-gradient-blue hover:to-gradient-purple hover:bg-blackhover:scale-110"
        >
          Explore More Books
        </a>
      </div>
    </header>
  );
}