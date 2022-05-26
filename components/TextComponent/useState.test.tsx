import { render, waitFor } from '@testing-library/react-native';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';

describe('useState', () => {
  it('useState', () => {
    function MyComponent() {
      const [string] = useState('My Name is Goud...');
      return <Text testID="name">{string}</Text>;
    }
    const { getByTestId } = render(<MyComponent></MyComponent>);
    expect(getByTestId('name').props.children).toBe('My Name is Goud...');
  });
  it('useState called async', async () => {
    function MyComponent() {
      const [text, setNewText] = useState('');
      useEffect(() => {
        (async () => {
          setNewText(await Promise.resolve('My Name is Goud...'));
        })();
      }, []);
      return <Text testID="name">{text}</Text>;
    }
    const { getByTestId } = await waitFor(() => render(<MyComponent></MyComponent>));
    expect(getByTestId('name').props.children).toBe('My Name is Goud...');
  });
});
