const watchColorMap: Record<string, string> = {
  black: "#101010",
  brown: "#7a4f32",
  charcoal: "#303033",
  gold: "#c9a45d",
  "matte black": "#171717",
  navy: "#1d3557",
  olive: "#59613a",
  "rose gold": "#b76e79",
  silver: "#c8c8c8",
  white: "#f8f8f4",
};

export function getWatchColor(color: string) {
  return watchColorMap[color.toLowerCase()] ?? color;
}
