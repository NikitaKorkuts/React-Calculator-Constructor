export const getFontSize = (baseSize: number, textLength: number) => {
  if (textLength >= baseSize) {
    textLength = baseSize - 2;
  }

  return `${baseSize - textLength}px`;
};
