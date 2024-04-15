"use client"

import { Container, Flex, Text } from "@mantine/core"

export default function Home() {
  return (
    <Container
      size="md"
      w="100%"
      h="100%"
      className="border-2 border-blue-800 flex flex-row">
      <Flex
        h="100%"
        direction="column"
        className="sticky top-[60px]  border-2 border-purple-800 flex-auto w-96 ">
        <Text className="font-grotesk text-white  text-[66px] font-extrabold">
          👋 I'm Shohan!
        </Text>
        <Text className="font-grotesk text-white text-[36px] font-extrabold">
          <br /> A full-stack <br /> Software Engineer
        </Text>
      </Flex>
      <Flex
        direction="column"
        w="50%"
        h="100%"
        className="border-2 border-emerald-700 ">
        <Text className="font-grotesk text-white text-[66px] font-extrabold">
          👋 I'm Shohan!
        </Text>
        <Text className="font-grotesk text-white text-[36px] font-extrabold">
          <br /> A full-stack <br /> Software Engineer
        </Text>
        <Text className="font-grotesk text-white text-[66px] font-extrabold">
          👋 I'm Shohan!
        </Text>
        <Text className="font-grotesk text-white text-[36px] font-extrabold">
          <br /> A full-stack <br /> Software Engineer
        </Text>
        <Text className="font-grotesk text-white text-[66px] font-extrabold">
          👋 I'm Shohan!
        </Text>
        <Text className="font-grotesk text-white text-[36px] font-extrabold">
          <br /> A full-stack <br /> Software Engineer
        </Text>
        <Text className="font-grotesk text-white text-[66px] font-extrabold">
          👋 I'm Shohan!
        </Text>
        <Text className="font-grotesk text-white text-[36px] font-extrabold">
          <br /> A full-stack <br /> Software Engineer
        </Text>
      </Flex>
      {/* <Flex direction="column" className="border-2 border-blue-600 ">
        <Text className="font-grotesk text-white text-[66px] font-extrabold">
          👋 I'm Shohan!
        </Text>
        <Text className="font-grotesk text-white text-[36px] font-extrabold">
          <br /> A full-stack <br /> Software Engineer
        </Text>
      </Flex> */}
    </Container>
  )
}
