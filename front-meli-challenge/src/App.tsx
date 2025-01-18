import AppRoutes from './routes/Routes';
import "./App.css";
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
