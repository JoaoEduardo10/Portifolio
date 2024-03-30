/* eslint-disable storybook/story-exports */
import { Meta, StoryObj } from '@storybook/react';
import { Navigation } from '.';
import { navItensMock } from '../heading/navItensMock';

const meta = {
  title: 'Component/navigation',
  component: Navigation,
  args: {
    navItens: navItensMock,
  },
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ComponentNavigation: Story = {};
