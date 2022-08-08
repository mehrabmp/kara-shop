import { render, screen } from 'utils/test-utils';
import userEvent from '@testing-library/user-event';
import { TopBar } from '../TopBar';

test('should render TopBar component', () => {
  render(<TopBar />);
  const topBarItem = screen.getByRole('link', {
    name: /careers/i,
  });
  expect(topBarItem).toBeInTheDocument();
});

test('should open change locale menu when clicked on language', async () => {
  render(<TopBar />);
  const flag = screen.getByRole('img', {
    name: /en locale/i,
  });
  await userEvent.click(flag);
  const changeLocaleMenu = await screen.findByText(/german/i);
  expect(changeLocaleMenu).toBeInTheDocument();
});
