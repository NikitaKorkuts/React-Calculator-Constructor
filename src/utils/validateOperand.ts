export const validateOperand = (operand: number) => {
  const afterPointDigitsCount = ~`${operand}`.indexOf('.') // eslint-disable-line no-bitwise
    ? `${operand}`.split('.')[1].length
    : 0;

  if (afterPointDigitsCount > 15) {
    return String(Number(operand.toFixed(15))).replace('.', ',');
  }
  return String(operand).replace('.', ',');
};
