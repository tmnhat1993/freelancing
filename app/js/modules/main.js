import Data from './data'

export default class MainScript {
  /* ============ CONSTRUCTOR ========== */
  constructor(){
    this.data = new Data();

    this.bindEvent();
  }

  /* ============ EVENTS ===========*/
  bindEvent(){
    $('.carousel').carousel({
      interval: 3000,
      keyboard: true,
      pause: 'hover',
    });
  }

  /* =========== METHODS ========== */

}