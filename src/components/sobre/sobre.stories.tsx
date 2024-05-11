/* eslint-disable storybook/story-exports */
import { Meta, StoryObj } from '@storybook/react';
import { Sobre } from '.';

const meta = {
  title: 'Component/sobre',
  component: Sobre,
} satisfies Meta<typeof Sobre>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SobreStory: Story = {};
