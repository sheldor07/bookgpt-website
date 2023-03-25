import { useState } from 'react'
import  Link  from 'next/link'
function NavLink({to, children}) {
  return <a href={to} className={`mx-4`}>
      {children}
  </a>
}

function MobileNav({open, setOpen}) {
  return (
      <div className={`absolute top-0 left-0 h-screen w-screen bg-black transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
          <div className="flex items-center justify-center h-20 bg-black filter drop-shadow-md"> {/*logo container*/}
              <a className="text-xl font-semibold" href="/">LOGO</a>
          </div>
          <div className="flex flex-col ml-4">
              <a className="my-4 text-xl font-medium text-white" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                  home
              </a>
              <a className="my-4 text-xl font-normal text-white" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                  about
              </a>
              <a className="my-4 text-xl font-normal text-white" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                  meet the team
              </a>
              <a className="my-4 text-xl font-normal text-white" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
              <button className='p-2 font-bold text-black bg-white rounded-full'>templates</button>
              </a>
              
          </div>  
      </div>
  )
}

export default function Navbar() {

  const [open, setOpen] = useState(false)
  return (
      <nav className="flex items-center h-20 px-4 py-4 bg-black filter drop-shadow-md">
          <MobileNav open={open} setOpen={setOpen}/>
          <div className="flex items-center w-7/12">
              {/* logo */}
              <img className="w-12 h-12 mr-4" src="/logo.png" alt="logo" />
              <a className="text-xl font-semibold text-white" href="/">GPT Book Club</a>
          </div>
          <div className="flex items-center justify-end w-5/12">

              <div className="relative z-50 flex flex-col items-center justify-between w-8 h-8 md:hidden" onClick={() => {
                  setOpen(!open)
              }}>
                  {/* hamburger button */}
                  <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                  <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                  <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
              </div>

              <div className="hidden md:flex">
                  <Link className="p-4 text-lg text-gray-700 rounded hover:bg-gray-100 d:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"href="/">
                    home
                  </Link>
                  <Link className="p-4 text-lg text-gray-700 rounded hover:bg-gray-100 d:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"href="/about">
                      about
                  </Link>
                  <Link className="p-4 text-lg text-gray-700 rounded hover:bg-gray-100 d:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"href="/contact">
                      meet the team
                  </Link>
                  <Link className="p-2"href="/templates">
                    <button className='p-2 text-lg font-bold text-black bg-white rounded-full'>get your 📚 now</button>
                     
                  </Link>
              </div>
          </div>
      </nav>
  )
}