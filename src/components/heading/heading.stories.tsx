/* eslint-disable storybook/story-exports */
import { Meta, StoryObj } from '@storybook/react';
import { Heading } from '.';

const meta = {
  title: 'Component/heading',
  component: Heading,
  args: {
    text: 'Desenvolvedor',
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ComponetHeading: Story = {};
