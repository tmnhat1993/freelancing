import Data from './data'

export default class MainScript {
  /* ============ CONSTRUCTOR ========== */
  constructor(){
    this.data = new Data();
    this.quill

    this.bindEvent();
  }

  /* ============ EVENTS ===========*/
  bindEvent(){
    $('.carousel').carousel({
      interval: 3000,
      keyboard: true,
      pause: 'hover',
    });

    $('.selectpicker').selectpicker({
      width: 'fit',
    });

    $('.selectpicker-basic').selectpicker({
      width: '100%',
    });


    $('#phone_country_code').selectpicker({
      width: 'auto',
      liveSearch: 'true',
    });

    this.quill = new Quill('#extra-job-info-editor', {
      theme: 'snow'
    });
  }

  /* =========== METHODS ========== */

}