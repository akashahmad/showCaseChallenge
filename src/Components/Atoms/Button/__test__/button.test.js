import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import { render } from '@testing-library/react';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button></Button>, div);
});

it('Properly gets props', () => {
  const { getByTestId } = render(<Button name='Click me please'></Button>);
  expect(getByTestId('websiteButton')).toHaveTextContent('Click me please');
});
