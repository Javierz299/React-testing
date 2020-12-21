import { render, screen } from '@testing-library/react';
import ReactDom from 'react-dom'
import App from './App';

it('renders w/o crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<App />,div);
  expect(div.innerHTML).toContain('Testing')
});
