import { initialize, mswDecorator } from 'msw-storybook-addon';

import { handlers } from '../src/__mocks__/msw/handlers';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: { handlers },
};

initialize();

export const decorators = [mswDecorator];
