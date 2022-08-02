import { render, screen } from 'utils/test-utils';
import { PrimaryLayout } from '../PrimaryLayout';

const MockPrimaryLayout = () => (
  <PrimaryLayout>
    <h1>test</h1>
  </PrimaryLayout>
);

test('should render PrimaryLayout component with given children', () => {
  render(<MockPrimaryLayout />);
  const title = screen.getByRole('heading', {
    name: /test/i,
  });
  expect(title).toBeInTheDocument();
});
