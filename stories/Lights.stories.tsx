import type { Meta, StoryObj } from "@storybook/react";

import Lights from "./Lights";

const meta: Meta<typeof Lights> = {
  title: "My Project/Lights",
  component: Lights,
  // enforce arg(prop) types
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["red", "orange", "green"]
    }
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Red: Story = {
  args: {
    variant: "red"
  }
}

export const Orange: Story = {
  args: {
    variant: "orange"
  }
}

export const Green: Story = {
  args: {
    variant: "green"
  }
}

export const TrafficLights: Story = {
  render: (args) => (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 10,
      border: "2px solid black",
      borderRadius: "4px",
      width: "max-content",
      padding: 10,
      backgroundColor: "#222222"
    }}>
      <Lights variant="red" />
      <Lights variant="orange" />
      <Lights variant="green" />
    </div>
  )
}