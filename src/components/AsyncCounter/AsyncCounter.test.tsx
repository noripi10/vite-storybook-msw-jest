import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
// import userEvent from '@testing-library/user-event';

import { AsyncCounter } from './';

// const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

describe('AsyncCounter', () => {
  beforeEach(() => {
    const { asFragment } = render(<AsyncCounter />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('初期化', () => {
    const count = screen.getByTestId('async_count');
    expect(count.innerHTML).toBe('0');
  });

  test('インクリメント', async () => {
    jest.useFakeTimers();
    const button = screen.getByText('count up');
    fireEvent.click(button);
    act(() => {
      jest.runAllTimers();
    });
    const count = screen.getByTestId('async_count');
    expect(count.innerHTML).toBe('1');
    jest.useRealTimers();
  });

  test('デクリメント', async () => {
    jest.useFakeTimers();
    const button = screen.getByText('count down');
    fireEvent.click(button);
    act(() => {
      jest.runAllTimers();
    });
    const count = screen.getByTestId('async_count');
    expect(count.innerHTML).toBe('-1');
    jest.useRealTimers();
  });

  test('押下時のボタン非活性', () => {
    const button = screen.getByRole('button', { name: 'count up' });
    fireEvent.click(button);
    expect(button).toBeDisabled();
  });

  test('押下後のボタン活性', () => {
    jest.useFakeTimers();
    const button = screen.getByRole('button', { name: 'count up' });
    fireEvent.click(button);
    act(() => {
      jest.runAllTimers();
    });
    expect(button).toBeEnabled();
    jest.useRealTimers();
  });

  test('押下時にロードが表示', () => {
    const button = screen.getByRole('button', { name: 'count up' });
    fireEvent.click(button);
    expect(screen.getByText('loading...')).toBeEnabled();
  });

  test('押下後にロードが非表示', () => {
    jest.useFakeTimers();
    const button = screen.getByRole('button', { name: 'count up' });
    fireEvent.click(button);
    act(() => {
      jest.runAllTimers();
    });
    expect(screen.queryByText('loading...')).not.toBeInTheDocument();
    jest.useRealTimers();
  });
});
