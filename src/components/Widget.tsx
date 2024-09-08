import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChatTeardropDots } from '@phosphor-icons/react';
import { WidgetForm } from './WidgetForm';

export function Widget() {
  //absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end
  return (
    <Popover className='w-full h-screen flex items-center justify-center'>
      <PopoverPanel anchor="bottom start">
        <WidgetForm />
      </PopoverPanel>
      <PopoverButton className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
        <ChatTeardropDots className='w-6 h-6' />
        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className='pl-2'></span>
          Feedback
          </span>
      </PopoverButton>
    </Popover>
  )
}