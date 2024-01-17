import { AppShell, MantineProvider } from "@mantine/core";
import { Header } from "./Header/Header";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { Footer } from "./Footer/Footer";
import { useDisclosure } from "@mantine/hooks";
import classes from "./shell.module.css";

const RootLayout = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider>
      <AppShell
        header={{ height: 80 }}
        navbar={{
          width: 300,
          breakpoint: "md",
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
          <div>
            {children}
            <Footer />
          </div>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
};

export default RootLayout;
