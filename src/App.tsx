import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyle from '@lib/styles/global';
import theme from '@lib/styles/common/theme';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // @NOTE: 무분별한 refetch를 막기 위해 false로 설정
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme['dark']}>
          <Routes />
          <GlobalStyle />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
