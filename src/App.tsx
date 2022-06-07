import { Header } from './components/Header';
import { JobsList } from './components/JobsList';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Header />
      <JobsList />
      <GlobalStyle />
    </>
  );
}
