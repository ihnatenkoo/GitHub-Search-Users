export const checkTextValue = (text: string | null | undefined): string => {
  if (text) return text;
  return 'No info';
};
