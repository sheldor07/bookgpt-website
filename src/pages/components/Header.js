import Link from "next/link";
import { Navbar, Button } from "flowbite-react";

export default function Header() {
  return (
 
    <Navbar
    fluid={true}
    rounded={true}
    className="bg-"
  >
    <Navbar.Brand href="/">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-6 mr-3 sm:h-9"
        alt="Flowbite Logo"
      />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
        GPT Book Club
      </span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link
        href="/"
        active={true}
      >
        Home
      </Navbar.Link>
      <Navbar.Link href="/about">
        About
      </Navbar.Link>
      <Navbar.Link href="/contact">
        Contact
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Share
      </Navbar.Link>
    </Navbar.Collapse>
    <div className="flex md:order-2">
    <Button>
      Notion Templates
    </Button>
    <Navbar.Toggle />
  </div>
  </Navbar>
  );
}
