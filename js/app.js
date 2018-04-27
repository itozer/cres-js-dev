import { ready, createH1 } from './modules/DOM';
import { presentValue as bequestPresentValue, taxBenefits as bequestTaxBenefits } from './modules/Bequest';
import { presentValue as giftAnnuityPresentValue, taxBenefits as giftAnnuityTaxBenefits } from './modules/GiftAnnuity';
import { presentValue as unitrustPresentValue, taxBenefits as unitrustTaxBenefits } from './modules/Unitrust';

ready(() => {
  const wrapper = document.getElementById('wrapper');

  wrapper.appendChild(createH1(`Bequest present value is ${bequestPresentValue()}`));
  wrapper.appendChild(createH1(`Bequest tax benefits are ${bequestTaxBenefits()}`));

  wrapper.appendChild(document.createElement('br'));
  wrapper.appendChild(document.createElement('br'));

  wrapper.appendChild(createH1('Gift Annuity present value is ' + giftAnnuityPresentValue()));
  wrapper.appendChild(createH1('Gift Annuity tax benefits are ' + giftAnnuityTaxBenefits()));
});
