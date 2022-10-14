import { Meta, StoryObj } from "@storybook/react"
import { Text, TextProps } from "./Text"

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem Impsum"
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control:{
        type: 'radio'
      }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = { 
  args: {
    size: "sm"
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg"
  }
}

export const Component: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Testing with "p"</p>
    )
  },
  argTypes:{
    children:{
      table:{
        disable: true
      }
    }
  }
}
