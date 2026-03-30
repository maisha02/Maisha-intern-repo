import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import UserList from '../components/UserList';

global.fetch = jest.fn();

test('fetches and displays data', async () => {
  fetch.mockResolvedValueOnce({
    json: async () => [{ name: 'Maisha' }]
  });

  const { getByText } = render(<UserList />);

  await waitFor(() => {
    expect(getByText('Maisha')).toBeTruthy();
  });
});