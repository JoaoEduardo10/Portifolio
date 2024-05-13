/* eslint-disable storybook/story-exports */
import { Meta, StoryObj } from '@storybook/react';
import { MenuMobile } from '.';

const meta = {
  title: 'Component/menuMobile',
  component: MenuMobile,
  args: {
    handleShowMenu: () => alert('ok'),
  },
} satisfies Meta<typeof MenuMobile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MenuMobileStory: Story = {};
