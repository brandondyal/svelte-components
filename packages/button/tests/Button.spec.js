import { render } from '@testing-library/svelte'
import Button from '..';

describe('Button', () => {
  test('should render component correctly', () => {
    const { getByText } = render(Button)

    expect(getByText('Default Button')).toBeInTheDocument()
  })

    // TODO: Test CustomEvent from eventDispatcher. Currently no known solutions using testing-library (https://github.com/testing-library/native-testing-library/issues/58).
});
