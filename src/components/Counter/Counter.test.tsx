import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './';

describe('Counter', () => {
  let CounterElement: HTMLElement;
  beforeEach(() => {
    const { asFragment, container } = render(<Counter />);
    CounterElement = container;
    expect(asFragment()).toMatchSnapshot();
  });

  test('初期化', () => {
    const count = CounterElement.querySelector('strong');
    expect(count?.innerHTML).toBe('0');
  });

  test('インクリメント', async () => {
    const count = screen.getByTestId('count');
    const button = screen.getByRole('button', { name: 'count up' });
    const countOver2Init = screen.queryByText(/count is now:/);

    expect(countOver2Init).not.toBeInTheDocument();

    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);

    await waitFor(() => expect(count.innerHTML).toBe('3'));

    const countOver2 = screen.queryByText(/count is now:/);
    expect(countOver2).toBeInTheDocument();
  });

  test('デクリメント', async () => {
    const count = screen.getByTestId('count');
    const button = screen.getByRole('button', { name: 'count down' });
    const countOver2Init = screen.queryByText(/count is now:/);

    expect(countOver2Init).not.toBeInTheDocument();

    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);

    await waitFor(() => expect(count.innerHTML).toBe('-3'));

    const countOver2 = screen.queryByText(/count is now:/);
    expect(countOver2).not.toBeInTheDocument();
  });
});
