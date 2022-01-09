export const objHasTruthyValue = (obj: object): boolean => {
  return obj && !!Object.values(obj).filter(Boolean).length;
};
