import type { Meta, StoryObj } from "@storybook/react";
import DropWithCheckbox from "./DropWithCheckbox";

const meta = {
  title: "Example/DropWithCheckbox",
  component: DropWithCheckbox,
  parameters: {
    layout: "",
  },
} satisfies Meta<typeof DropWithCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {

};
