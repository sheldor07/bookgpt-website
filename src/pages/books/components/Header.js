export default function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex items-center ml-6">
        <img
          src="https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/logo.png"
          alt="Logo"
          className="w-20 h-20 rounded"
        />
        <a
          href="#"
          className="px-2 text-xl text-black transition-all hover:text-white hover:bg-black hover:p-2 hover:rounded-full"
        >
          Join GPT Book Club
        </a>
      </div>

      <div className="hidden md:block">
        <a
          href="#"
          className="mr-4 text-xl text-gray-900 transition-all hover:text-gray-600"
        >
          Notion Template
        </a>
        <a
          href="#"
          className="text-xl text-gray-900 transition-all hover:text-gray-600"
        >
          Contact
        </a>
      </div>

      <div className="mr-6">
        <a
          href="#"
          className="px-4 py-2 text-xl text-white transition-all transform bg-black rounded-md hover:bg-gray-900 hover:scale-110"
        >
          Explore More Books
        </a>
      </div>
    </header>
  );
}