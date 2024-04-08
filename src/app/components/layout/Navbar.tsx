import React from "react"

export default function Navbar() {
  return (
    <nav
      className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
      aria-label="Global">
      <div className="flex items-center justify-between">
        <ul>
          <li>
            <a href="default.asp">Home</a>
          </li>
          <li>
            <a href="news.asp">News</a>
          </li>
          <li>
            <a href="contact.asp">Contact</a>
          </li>
          <li>
            <a href="about.asp">About</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
