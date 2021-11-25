import tabs from './modules/tabs';
import cards from './modules/cards';
import timer from './modules/timer';
import modal from './modules/modal';
import slider from './modules/slider';
import calc from './modules/calc';
import forms from './modules/forms';
import {openModal} from './modules/modal';

window.addEventListener("DOMContentLoaded", () => {

 const ModalTimerId = setTimeout(() => openModal('.modal', ModalTimerId), 500000);

 tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
 cards();
 timer('.timer', '2022-06-11');
 modal('[data-modal]', '.modal', ModalTimerId);
 slider({
  container: '.offer__slider',
  nextArrow: '.offer__slider-next',
  previousArrow: '.offer__slider-prev',
  slide: '.offer__slide',
  totalCounter: '#total',
  currentCounter: '#current',
  wrapper: '.offer__slider-wrapper',
  field: '.offer__slider-inner'
 });
 calc();
 forms('form', ModalTimerId);

});
