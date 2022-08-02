import { render, screen } from 'utils/test-utils';
import { Header } from '../Header';

test('should render Header component', () => {
  render(<Header />);
  const logo = screen.getByRole('link', {
    name: /kara/i,
  });
  expect(logo).toBeInTheDocument();
  expect(logo).toHaveAttribute('href', '/');
});
