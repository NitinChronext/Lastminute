import 'intl';
import 'intl/locale-data/jsonp/de';
import 'intl/locale-data/jsonp/en';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IntlProvider } from 'react-intl';
const queryClient = new QueryClient();
import useCachedResources from './src/hooks/useCachedResources';
import AppStack from './src/AppStack';
import { ThemeProvider } from 'styled-components/native';
import { themes } from './src/themes/theme';
import { messages, useLocaleStore } from './src/stores/useLocaleStore';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const language = useLocaleStore(state => state.language);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <StatusBar />
          <IntlProvider locale={language} messages={messages[language]}>
            <ThemeProvider theme={themes.default}>
              <AppStack />
            </ThemeProvider>
          </IntlProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    );
  }
}
