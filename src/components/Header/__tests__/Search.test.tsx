import { render, screen } from 'utils/test-utils';
import userEvent from '@testing-library/user-event';
import { Search } from '../Search';

const handler = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

const typeInSearchInput = async (text: string) => {
  const search = screen.getByRole('textbox', {
    name: /search on kara/i,
  });
  await userEvent.type(search, text);
  return search;
};

test('should render Search component', () => {
  render(<Search onSearch={handler} />);
  const search = screen.getByRole('textbox', {
    name: /search on kara/i,
  });
  expect(search).toBeInTheDocument();
});

test('should show the typed text', async () => {
  render(<Search onSearch={handler} />);
  const search = await typeInSearchInput('black jeans');
  expect(search).toHaveValue('black jeans');
});

test('should change search icon to clear when typed', async () => {
  render(<Search onSearch={handler} />);
  await typeInSearchInput('black jeans');
  const clearIcon = screen.getByTestId('clear');
  expect(clearIcon).toBeInTheDocument();
});

test('should clear text when clicked on clear icon', async () => {
  render(<Search onSearch={handler} />);
  const search = await typeInSearchInput('black jeans');
  const clearIcon = screen.getByTestId('clear');
  await userEvent.click(clearIcon);
  expect(search).toHaveValue('');
});

test('should call onSearch when pressed enter', async () => {
  render(<Search onSearch={handler} />);
  await typeInSearchInput('black jeans{enter}');
  expect(handler).toBeCalledTimes(1);
});

test('should not call onSearch when submited empty', async () => {
  render(<Search onSearch={handler} />);
  await typeInSearchInput('{enter}');
  expect(handler).toBeCalledTimes(0);
});
