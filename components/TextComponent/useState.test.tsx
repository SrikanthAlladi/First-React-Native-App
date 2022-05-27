import {render, waitFor} from '@testing-library/react-native';
import {TextComponent} from '../TextComponent';

describe('useState', () => {
  it('useState', () => {
    const {getByTestId} = render(<TextComponent></TextComponent>);
    expect(getByTestId('asdf').props.children).toBe('My Name is Goud...');
  });
  it('useState called async', async () => {
    const {getByTestId} = await waitFor(() =>
      render(<TextComponent></TextComponent>),
    );
    expect(getByTestId('asdf').props.children).toBe('My Name is Goud...');
  });
});
