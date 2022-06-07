import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders submit link', () => {
  render(<Button >SUBMIT A LINK</Button>);
  const linkElement = screen.getByText("SUBMIT A LINK");
  expect(linkElement).toBeInTheDocument();
});
