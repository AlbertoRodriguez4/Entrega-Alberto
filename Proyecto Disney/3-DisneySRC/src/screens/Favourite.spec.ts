import React from 'react';
import { render } from '@testing-library/react-native';
import Favourite from './Favourite';

describe('Favourite component', () => {
  test('renders "Favourite" text three times', () => {
    const { getAllByText } = render(<Favourite />);
    const favouriteTexts = getAllByText('Favourite');
    expect(favouriteTexts).toHaveLength(3);
  });
});
