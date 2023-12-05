import { Main } from "../Main/Main";
import { Header } from "../Header/Header";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import classes from "./shell.module.css";

export const Shell = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{
        width: 300,
        breakpoint: "xs",
        collapsed: { mobile: !opened, desktop: true },
      }}
      classNames={{ main: classes.main }}
    >
      <AppShell.Header>
        <Header toggle={toggle} opened={opened} />
      </AppShell.Header>
      <AppShell.Navbar>
        <MobileMenu onClose={() => toggle(false)} />
      </AppShell.Navbar>
      <AppShell.Main>
        <Main />
      </AppShell.Main>
    </AppShell>
  );
};
