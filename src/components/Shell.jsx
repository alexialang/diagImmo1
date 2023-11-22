import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger } from "@mantine/core";
import { Main } from "./Main.jsx";
import { Header } from "./Header/Header.jsx";

export const Shell = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell header={{ height: 80 }} padding="md">
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Main />
      </AppShell.Main>
    </AppShell>
  );
};
