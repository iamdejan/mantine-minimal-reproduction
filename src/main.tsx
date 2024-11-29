import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import { MantineProvider } from '@mantine/core'
import theme from './theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <Home />
    </MantineProvider>
  </StrictMode>,
)
