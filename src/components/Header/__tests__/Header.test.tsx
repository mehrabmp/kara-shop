import { render, screen } from 'utils/test-utils';
import { Header } from '../Header';

test('should render Header component', () => {
  render(<Header />);
  const logo = screen.getByRole('img', {
    name: /logo/i,
  });
  expect(logo).toBeInTheDocument();
});
