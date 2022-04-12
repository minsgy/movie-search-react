import { RecoilRoot } from 'recoil';
// import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyle from '@styles/global';
import { QueryClient, QueryClientProvider } from 'react-query';
const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {/* <ThemeProvider> */}
        <Routes />
        <GlobalStyle />
        {/* </ThemeProvider> */}
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
