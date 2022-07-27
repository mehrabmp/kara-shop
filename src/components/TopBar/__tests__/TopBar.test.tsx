import { render, screen } from 'utils/test-utils';
import { TopBar } from '../TopBar';

test('should render TopBar component', () => {
  render(<TopBar />);
  const topBarItem = screen.getByRole('link', {
    name: /careers/i,
  });
  expect(topBarItem).toBeInTheDocument();
  expect(topBarItem).toHaveAttribute('href', '/#');
});
