import { PopoverButton } from '@headlessui/react'
import { X } from '@phosphor-icons/react'

export function CloseButton() {
  return (
    <PopoverButton className="top-5 right-5 absolute text-text-secondary hover:text-text-primary" title='Fecar formuário'>
      <X weight='bold' className='w-4 h-4' />
    </PopoverButton>
  )
}