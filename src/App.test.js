import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders conference name”', () => {
  const {getByText} = render(<App/>);
  const conferenceText = getByText("JBcnConf");
  expect(conferenceText).toBeInTheDocument();
});
