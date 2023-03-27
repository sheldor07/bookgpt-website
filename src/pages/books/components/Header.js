export default function Header(){
    return(
        <header class="flex justify-between items-center py-4">
            <div class="ml-6 flex items-center">
              <img
                src="https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/logo.jpeg"
                alt="Logo"
                class="h-8 mr-4 rounded"
              />
              <a href="#" class="text-gray-600 hover:text-gray-900">
                Join GPT Book Club
              </a>
            </div>
            <div class="hidden md:block">
              <a href="#" class="text-gray-600 hover:text-gray-900 mr-4">
                Notion Template
              </a>
              <a href="#" class="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </div>
            <div class="mr-6">
              <a
                href="#"
                class="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 active:"
              >
                Explore More Books
              </a>
            </div>
          </header>
    )
}