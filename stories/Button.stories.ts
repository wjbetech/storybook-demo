import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { quotaSprinkles } from "@quotalab/style";


const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary','secondary', 'tertiary'],
      control: {
        type: 'radio',
      },
    },
    size: {
      options: ['small','medium', 'large'],
      control: {
        type: 'dropdown',
      },
    },
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Control: Story = {
  args: {
    primary: true,
    label: 'Control',
    size: "medium",
    color: "primary",
    backgroundColor: "primary",
    borderRadius: 4,
    disabled: false,
    onClick: () => alert('"Control" clicked!'),
    variant: "primary",
  },
}

export const Primary: Story = {
  args: {
    primary: false,
    label: 'Primary',
    size: "large",
    color: "primary",
    backgroundColor: "primary",
    borderRadius: 4,
    disabled: false,
    onClick: () => alert('"Primary" clicked!'),
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    primary: true,
    label: 'Secondary',
    size: "large",
    color: "secondary",
    backgroundColor: "secondary",
    borderRadius: 4,
    disabled: false,
    onClick: () => alert('"Secondary" clicked!'),
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    primary: true,
    label: 'Tertiary',
    size: "small",
    color: "tertiary",
    backgroundColor: "tertiary",
    borderRadius: 4,
    disabled: false,
    onClick: () => alert('"Tertiary" clicked!'),
    variant: "tertiary",
  },
};
