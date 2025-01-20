import { render, screen, waitFor, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SearchResults } from '../../pages/SearchResults';
import { QueryClient, QueryClientProvider } from 'react-query';
import { getSearchItems } from '../../services/api';
import { mockData } from '../../__mocks__/dataMock';

const queryClient = new QueryClient();

jest.mock('../../services/api', () => ({
  getSearchItems: jest.fn(),
}));

const mockedGetSearchItems = getSearchItems as jest.Mock;

beforeEach(() => {
  mockedGetSearchItems.mockReset();
});

test('renders SearchResults component with loading state', async () => {
  render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SearchResults />
      </QueryClientProvider>
    </BrowserRouter>
  );

  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});

test('renders SearchResults component when data is loaded', async () => {

  mockedGetSearchItems.mockResolvedValue(mockData);

  await act(async () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <SearchResults />
        </QueryClientProvider>
      </BrowserRouter>
    );
  });

  await waitFor(() => screen.getByText('Product 1'));
  expect(screen.getByText('Product 1')).toBeInTheDocument();
  expect(screen.getByText('Product 2')).toBeInTheDocument();
});

test('renders error state when data fails to load', async () => {

  mockedGetSearchItems.mockRejectedValue(new Error('Error al cargar datos'));

  await act(async () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <SearchResults />
        </QueryClientProvider>
      </BrowserRouter>
    );
  });


  await waitFor(() => screen.getByText('Error al cargar resultados'));
  expect(screen.getByText('Error al cargar resultados')).toBeInTheDocument();
});
