import { render, screen } from 'utils/test-utils';
import userEvent from '@testing-library/user-event';
import { Search } from '../Search';

const handler = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

test('should render Search component', () => {
  render(<Search onSearch={handler} />);
  const search = screen.getByRole('textbox', {
    name: /search on kara/i,
  });
  expect(search).toBeInTheDocument();
});

test('should show the typed text', async () => {
  render(<Search onSearch={handler} />);
  const search = screen.getByRole('textbox', {
    name: /search on kara/i,
  });
  await userEvent.type(search, 'black jeans');
  expect(search).toHaveValue('black jeans');
});

test('should call onSearch when submited', async () => {
  render(<Search onSearch={handler} />);
  const search = screen.getByRole('textbox', {
    name: /search on kara/i,
  });
  await userEvent.type(search, 'black jeans{enter}');
  expect(handler).toBeCalledTimes(1);
});

test('should call onSearch when search icon clicked', async () => {
  render(<Search onSearch={handler} />);
  const search = screen.getByRole('textbox', {
    name: /search on kara/i,
  });
  await userEvent.type(search, 'black jeans');
  const searchIcon = screen.getByTestId('search-icon');
  await userEvent.click(searchIcon);
  expect(handler).toBeCalledTimes(1);
});
