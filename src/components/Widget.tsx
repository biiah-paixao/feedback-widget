import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { setPrimaryColors } from '../styles/theme';
import { WidgetForm } from './WidgetForm';
import { ChatTeardropDots } from '@phosphor-icons/react';
import { lighten } from '../utils/lightenColor';

export interface IFeedbackWidget {
  // user?: string;
  // metadata?: object;
  // type?: TypeForm;
  // apiPath?: string;
  themeColor?: string;
  textColor?: string;
  // title?: null | string | React.ReactElement;
  // description?: null | string | React.ReactElement;
  // showOnInitial?: boolean;
  // customIcon?: React.ReactElement;
}

export function Widget({
  // user,
  // metadata,
  // type = "form",
  // discordWebhookUrl = "",
  themeColor = "#8257e6",
  textColor = "#ffffff",
  // title,
  // description,
  // showOnInitial = false,
  // customIcon,
}: IFeedbackWidget) {

  const lightenedColor = lighten(themeColor, 10); // escurece 20%
  setPrimaryColors({
    background: themeColor,
    hover: lightenedColor,
    text: textColor,
  })

  return (
    <Popover>
      <PopoverPanel className="text-on-brand-100" static anchor="top end">
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
