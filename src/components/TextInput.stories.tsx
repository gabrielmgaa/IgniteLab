import { Meta, StoryObj } from "@storybook/react"
import { Input, TextInputRootProps } from "./TextInput"
import { Envelope } from "phosphor-react"

export default {
  title: "Components/TextInput",
  component: Input.Root,
  args: {
    children: [
        <Input.Icon>
          <Envelope />
        </Input.Icon>,
        <Input.TextInput placeholder="Type you best e-mail adress"/>
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }

} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <Input.TextInput placeholder="Type you best e-mail adress"/>
    )
  }
}


