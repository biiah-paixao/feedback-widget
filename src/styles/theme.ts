import { BRAND_300, BRAND_500, TEXT_ON_BRAND, SURFACE_PRIMARY, STROKE, SURFACE_SECONDARY, SURFACE_SECONDARY_HOVER, TEXT_PRIMARY, TEXT_SECONDARY } from '../constants/colors'
import type { Theme } from '../types/settings';

interface PrimaryColorsProps {
  background?: string;
  hover?: string;
  text?: string;
  theme: Theme
}

export const setPrimaryColors = ({ background, hover, text, theme }: PrimaryColorsProps) => {
  const root = document.documentElement.style
  root.setProperty(BRAND_500.name, background || BRAND_500.color)
  root.setProperty(BRAND_300.name, hover || background || BRAND_300.color)
  root.setProperty(TEXT_ON_BRAND.name, text || TEXT_PRIMARY.color[theme])

  root.setProperty(SURFACE_PRIMARY.name, SURFACE_PRIMARY.color[theme])
  root.setProperty(SURFACE_SECONDARY.name, SURFACE_SECONDARY.color[theme])
  root.setProperty(SURFACE_SECONDARY_HOVER.name, SURFACE_SECONDARY_HOVER.color[theme])
  root.setProperty(STROKE.name, STROKE.color[theme])
  root.setProperty(TEXT_PRIMARY.name, TEXT_PRIMARY.color[theme])
  root.setProperty(TEXT_SECONDARY.name, TEXT_SECONDARY.color[theme])
}
