import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { SWRConfig } from 'swr';

import { server } from '../../../jest.setup';

import { Users } from './';

const wraper = (ui: React.ReactNode) => render(<SWRConfig value={{ provider: () => new Map() }}>{ui}</SWRConfig>);

describe('User', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('ロード後にユーザー一覧が表示される', async () => {
    wraper(<Users />);
    await waitFor(() => {
      expect(screen.getByText(/hoge/)).toBeInTheDocument();
    });
    expect(screen.getByText(/fuga/)).toBeInTheDocument();
  });

  test('ロード失敗時にエラーメッセージが表示される', async () => {
    const ERROR_MESSAGE = 'ユーザー取得に失敗しました';
    server.use(
      rest.get('/api/users', (_, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: ERROR_MESSAGE }));
      })
    );
    wraper(<Users />);
    await waitFor(() => {
      expect(screen.getByText(/Request failed with status code 500/)).toBeInTheDocument();
    });
  });
});
