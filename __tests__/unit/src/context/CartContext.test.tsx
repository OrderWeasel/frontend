/**
 * @format
 */

import 'react-native';
import {Text} from 'react-native';
import React from 'react';
import {CartProvider} from '../../../../src/context/CartContext';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('CartProvider Tests', () => {
  it('renders correctly', () => {
    <CartProvider>
      <Text>Test</Text>
    </CartProvider>;
  });
});
