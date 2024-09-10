export type Size = 'small' | 'medium' | 'large'

export type Theme = 'light' | 'dark'

export interface Settings {
  theme: Theme;
  isEnabledName: boolean;
  isEnabledEmail: boolean;
  discordWebhookUrl: string
}
