import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { setPrimaryColors } from '../styles/theme';
import { WidgetForm } from './WidgetForm';
import { ChatTeardropDots } from '@phosphor-icons/react';
import { lighten } from '../utils/lightenColor';
import clsx from 'clsx';
import { FeedgetProvider } from '../contexts/FeedgetContext';
import type { Size, Theme } from '../types/settings';

export interface IFeedbackWidget {
  themeColor?: string;
  textColor?: string;
  size?: Size;
  theme?: Theme;
  isEnabledName?: boolean;
  isEnabledEmail?: boolean;
  discordWebhookUrl: string;
}

export function Widget({
  themeColor = "#8257e6",
  textColor,
  size="small",
  theme="dark",
  isEnabledName=false,
  isEnabledEmail=false,
  discordWebhookUrl = "",
}: IFeedbackWidget) {

  const lightenedColor = lighten(themeColor, 10); // escurece 20%
  setPrimaryColors({
    background: themeColor,
    hover: lightenedColor,
    text: textColor,
    theme
  })

  const buttonSize = clsx({
    'px-2 h-9': size === 'small',
    'px-3 h-12': size === 'medium',
    'px-3 h-14': size === 'large'
  })

  const iconSize = clsx({
    'size-5': size === 'small',
    'size-6': size === 'medium',
    'size-8': size === 'large'
  })

  const buttonTextSize = clsx({
    'text-sm': size === 'small',
    'text-base': size === 'medium',
    'size-lg': size === 'large'
  })

  return (
    <FeedgetProvider settings={{
      theme,
      isEnabledName,
      isEnabledEmail,
      discordWebhookUrl
    }}>
      <Popover className="text-on-brand-100 z-[100]">
        <PopoverPanel static anchor="top end" className=" text-on-brand-100" >
          <WidgetForm />
        </PopoverPanel>
        <PopoverButton 
          className={`bg-brand-500 rounded-full flex items-center group ${buttonSize}`}
        >
          <ChatTeardropDots className={iconSize} />
          <span className={`max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear ${buttonTextSize}`}>
            <span className='pl-2'></span>
            Feedback
          </span>
        </PopoverButton>
      </Popover>
    </FeedgetProvider>
  )
}
