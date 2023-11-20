// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Button } from '@mantine/core';
import { AppShell } from './components/AppShell';

export const App = () => {
  return (
    <MantineProvider>
      <AppShell/>
    </MantineProvider>
  );
}