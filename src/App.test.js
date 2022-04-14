import { render, screen } from '@testing-library/react';
import App from './App';
import { sumando } from './suma';
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders learn react link', () => {
  expect(sumando(2, 4)).toEqual(3);
});
