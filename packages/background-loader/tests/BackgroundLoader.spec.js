import { render } from '@testing-library/svelte'
import  from '..';

describe('', () => {
  test('should render component correctly', () => {
    const { getByText } = render()

    expect(getByText('Default ')).toBeInTheDocument()
  })

    // TODO: Test CustomEvent from eventDispatcher. Currently no known solutions using testing-library (https://github.com/testing-library/native-testing-library/issues/58).
});
