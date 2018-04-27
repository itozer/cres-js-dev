import { round } from './Calculator';

const presentValue = () => {
  const giftValue = 10000;
  return round((Math.random() + 1) * giftValue, 2);
};

const taxBenefits = () => Math.round(presentValue() * 0.32, 2);

export { taxBenefits, presentValue };
