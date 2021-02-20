import { render } from '@testing-library/svelte'
import Button from '..';

describe('Button', () => {
  test('should render component correctly', () => {
    const { getByText } = render(Button)

    expect(getByText('Default Button')).toBeInTheDocument()
  })
});
