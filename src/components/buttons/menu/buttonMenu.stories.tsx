/* eslint-disable storybook/story-exports */
import { Meta, StoryObj } from '@storybook/react';
import { ButtonMenu } from '.';

const meta = {
  title: 'Component/buttonMenu',
  component: ButtonMenu,
  args: {
    handleShow: (show: boolean) => {
      console.log(show);
    },
    show: false,
  },
} satisfies Meta<typeof ButtonMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentButtonMenu: Story = {};
