import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from '../../components/shared/SearchBar';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('SearchBar Component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (jest.requireMock('react-router-dom') as any).useNavigate.mockReturnValue(mockNavigate);
  });

  test('renders correctly', () => {
    render(
      <Router>
        <SearchBar />
      </Router>
    );

    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('No dejes de buscar')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('updates the query state when typing in the input', () => {
    render(
      <Router>
        <SearchBar />
      </Router>
    );

    const input = screen.getByPlaceholderText('No dejes de buscar');

    fireEvent.change(input, { target: { value: 'celular' } });
    expect(input).toHaveValue('celular');
  });

  test('navigates to the correct URL when the form is submitted', () => {
    render(
      <Router>
        <SearchBar />
      </Router>
    );

    const input = screen.getByPlaceholderText('No dejes de buscar');
    const form = screen.getByTestId('search-form');

    fireEvent.change(input, { target: { value: 'televisor' } });
    fireEvent.submit(form);

    expect(mockNavigate).toHaveBeenCalledWith('/items?search=televisor');
  });

  test('navigates to the home page when the logo is clicked', () => {
    render(
      <Router>
        <SearchBar />
      </Router>
    );

    const logo = screen.getByAltText('logo');

    fireEvent.click(logo);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
