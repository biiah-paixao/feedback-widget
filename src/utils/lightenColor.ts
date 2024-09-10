export function lighten(color: string, percent: number) {
  const num = parseInt(color.slice(1), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = ((num >> 8) & 0x00ff) + amt,
    B = (num & 0x0000ff) + amt;

  return (
    "#" +
    (0x1000000 +
      (R < 255 ? (R > 255 ? 255 : R) : 255) * 0x10000 +
      (G < 255 ? (G > 255 ? 255 : G) : 255) * 0x100 +
      (B < 255 ? (B > 255 ? 255 : B) : 255))
      .toString(16)
      .slice(1)
  );
}