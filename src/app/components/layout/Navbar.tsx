import { Container } from "@mantine/core"
import React from "react"

export default function Navbar() {
  return (
    <Container
      component="nav"
      h={50}
      size="md"
      className="  w-full border-solid border-2 border-red-700 mx-auto px-4 sm:flex sm:items-center sm:justify-between">
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
  )
}
