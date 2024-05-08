/* eslint-disable storybook/story-exports */
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta = {
  title: 'button/template-home',
  component: Button,
  args: {
    text: 'Test',
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TemplateHome: Story = {};
