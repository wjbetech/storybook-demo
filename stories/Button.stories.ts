import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    size: "medium",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    size: "medium",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary',
    size: "medium",
    variant: "outline",
  },
};
