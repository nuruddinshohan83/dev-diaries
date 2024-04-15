import { Container } from "@mantine/core"
import React from "react"

export default function Navbar() {
  return (
    <nav className="bg-[#130F18]/50 backdrop-blur fixed top-0 right-1/2 translate-x-1/2 block w-full z-50 ">
      <Container
        component="nav"
        h={"60px"}
        size="sm"
        // border-solid border-2 border-red-700
        className="w-full px-4 flex items-center justify-between">
        <div className="w-full flex  items-center justify-between gap-4">
          <ul className="list-none flex w-1/3 gap-5 ">
            <li>
              <a
                className="text-white text-wrap font-bold no-underline"
                href="default.asp">
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white text-wrap font-bold no-underline"
                href="news.asp">
                News
              </a>
            </li>
            <li>
              <a
                className="text-white text-wrap font-bold no-underline"
                href="contact.asp">
                Contact
              </a>
            </li>
            <li>
              <a
                className="text-white text-wrap font-bold no-underline"
                href="about.asp">
                About
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}
