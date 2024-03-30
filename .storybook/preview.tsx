import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/styles/globals.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh' }} className="conteiner-bg-black">
        <Story />
      </div>
    ),
  ],
};

export default preview;
