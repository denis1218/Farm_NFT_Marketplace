import Main from './pages/Main'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeModeProvider } from './shared/hooks/useThemeMode'
import { WorkListProvider } from './shared/hooks/useWorkList'
import { SnackbarProvider } from 'notistack'
import { Provider } from 'react-redux'
import { store } from './state/store'
import { client } from './utils/ConnectWalletConfig'
import { WagmiConfig } from 'wagmi'

const queryClient = new QueryClient()

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeModeProvider>
          <WorkListProvider>
            <SnackbarProvider>
              <WagmiConfig client={client}>
                <Main />
              </WagmiConfig>
            </SnackbarProvider>
          </WorkListProvider>
        </ThemeModeProvider>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
