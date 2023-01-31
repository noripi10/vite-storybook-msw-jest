import { rest } from 'msw';

export const handlers = [
  rest.get('/api/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 0,
          name: 'hoge',
        },
        {
          id: 1,
          name: 'fuga',
        },
      ])
    );
  }),
];
