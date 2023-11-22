// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { Shell } from "./components/Shell";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </MantineProvider>
  );
};
