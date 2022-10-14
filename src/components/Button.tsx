import { ReactNode } from 'react';
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}


export function Button({ children, asChild }: ButtonProps) {

  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={clsx(
        "py-4 px-3 rounded text-black bg-cyan-500 text-sm font-semibold w-full transition ease-in-out delay-150 hover:scale-110 hover:bg-cyan-300 duration-300",
      )}>
      {children}
    </Comp>
  )
}