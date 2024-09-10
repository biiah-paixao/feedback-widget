import { createContext, ReactNode } from "react";
import type { Settings, Theme } from '../types/settings';

interface FeedgetContextData {
  theme: Theme;
  isEnabledName: boolean;
  isEnabledEmail: boolean;
  discordWebhookUrl: string;
}

interface FeedgetProviderProps {
  children: ReactNode;
  settings: Settings;
}

export const FeedgetContext = createContext({} as FeedgetContextData)

export function FeedgetProvider({ children, settings }: FeedgetProviderProps) {
  return (
    <FeedgetContext.Provider value={settings}>
      {children}
    </FeedgetContext.Provider>
  )
}