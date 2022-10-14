import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface TextInputRootProps {
  children: ReactNode
}

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="py-4 px-3 rounded gap-3 flex h-12 items-center bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  )
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400" >
      {props.children}
    </Slot>
  )
}

function TextInput(props: TextInputProps) {
  return (
    <input
      className="bg-transparent w-full flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  )

}

export const Input = {
  Root: TextInputRoot,
  TextInput: TextInput,
  Icon: TextInputIcon
}