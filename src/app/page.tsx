"use client"
import { AppShell, Burger, Group, Text, TextInput, Title } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

export default function Home() {
  const [opened, { toggle }] = useDisclosure()
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  )
}
