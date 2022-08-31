import { render, screen } from 'utils/test-utils';
import userEvent from '@testing-library/user-event';
import { lightTheme } from 'styles/Theme';
import { Button } from '../Button';

test('should render button', () => {
  render(<Button label="test" />);
  const button = screen.getByRole('button', { name: /test/i });
  expect(button).toBeInTheDocument();
  expect(button).toHaveStyle({ backgroundColor: lightTheme.colors.primary100 });
});

test('should render button with given variant', () => {
  render(<Button label="test" variant="secondary" />);
  const button = screen.getByRole('button', { name: /test/i });
  expect(button).toHaveStyle({ backgroundColor: lightTheme.colors.neutral10 });
});

test('should render button with full width if passed block prop', () => {
  render(<Button label="test" full />);
  const button = screen.getByRole('button', { name: /test/i });
  expect(button).toHaveStyle({ width: '100%' });
});

test('should call onClick when clicked', async () => {
  const handler = jest.fn();
  render(<Button label="test" onClick={handler} />);
  const button = screen.getByRole('button', { name: /test/i });
  await userEvent.click(button);
  expect(handler).toHaveBeenCalledTimes(1);
});
