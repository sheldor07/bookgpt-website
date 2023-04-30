import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container w-full mx-auto">
        <div className="px-4 py-6 text-white md:flex md:items-center md:justify-between">
          <span className="text-sm sm:text-center">
            © 2023 GPT Book Club. All Rights Reserved.
          </span>

          <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://yajatgulati.com"
              className="underline"
            >
              Yajat Gulati
            </a>
            <span className="mx-2">|</span>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.manasbam.com"
              className="underline"
            >
              Manas Bam
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
