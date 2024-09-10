import { BRAND_300, BRAND_500, TEXT_ON_BRAND } from '../constants/colors'

export type Theme = 'dark' | 'light' | 'system'

export const setTheme = (theme: Theme) => {
  const root = document.documentElement.classList
  if (
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    root.add('dark')
  } else {
    root.remove('dark')
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setPrimaryColors = ({ background, hover, text }: any) => {
  const root = document.documentElement.style
  root.setProperty(BRAND_500.name, background || BRAND_500.color)
  root.setProperty(BRAND_300.name, hover || background || BRAND_300.color)
  root.setProperty(TEXT_ON_BRAND.name, text || TEXT_ON_BRAND.color)
}
