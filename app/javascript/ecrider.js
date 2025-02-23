// 共通初期処理

function ecrider_init() {
  $(function() {
    component_init();
    
    $.datepicker.regional['ja'] = {
      closeText: '閉じる',
      prevText: '<前',
      nextText: '次>',
      currentText: '今日',
      monthNames: ['1月','2月','3月','4月','5月','6月',
        '7月','8月','9月','10月','11月','12月'],
      monthNamesShort: ['1月','2月','3月','4月','5月','6月',
        '7月','8月','9月','10月','11月','12月'],
      dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
      dayNamesShort: ['日','月','火','水','木','金','土'],
      dayNamesMin: ['日','月','火','水','木','金','土'],
      weekHeader: '週',
      dateFormat: 'yy/mm/dd',
      firstDay: 0,
      isRTL: false,
      showMonthAfterYear: true,
      yearSuffix: '年'};
    $.datepicker.setDefaults($.datepicker.regional['ja']);
    
  });
  $(document).off("fire_component_init");
  $(document).on("fire_component_init", function() {
    setTimeout(function() {
      component_init();
    }, 100);
  });

  productDialogAllCheck();
}

function component_init() {
  $(document).find(".datepicker").each(function() {
    if ($(this).hasClass("hasDatepicker")) {
      if ($(this).data("datepicker") != undefined) {
        $(this).datepicker("destroy");
      }
    }
    $(this).datepicker({
      buttonImage: '/images/ecrider/calendar_icon.gif',
      buttonImageOnly: true,
      showOn: "button",
      language: 'ja',
      autoclose: true,
      todayHighlight: true
    });
  });
}

function component_cleanup() {
  $(document).find(".datepicker").each(function() {
    $(this).datepicker("destroy");
    $(this).removeClass("hasDatepicker");
    $(this).siblings(".ui-datepicker-trigger").unbind();
    $(this).siblings(".ui-datepicker-trigger").remove();
    $(this).unbind();
  });
  //turboでdatepickerダイアログをキャッシュするキャッシュ復元時に処理継続ができない（辻褄が合わなくなる）ので、キャッシュ前に削除する
  $("#ui-datepicker-div").remove();
}

// 読み込み中表示
function showLoading() {
  $(this).prop('disabled', true);
  $('loading').show();
}

function productDialogAllCheck() {
  $(document).off('click', '.product_check_all');
  $(document).on('click', '.product_check_all', function(){
    var dialog_id = $(this).data('dialogId');
    var product_id = $(this).data('productId');
    $('#' + dialog_id + ' .sku_check_product_id_'+product_id).prop('checked', $(this).prop('checked'));
  });
  $(document).off('click', '.sku_check');
  $(document).on('click', '.sku_check', function(){
    var dialog_id = $(this).data('dialogId');
    var product_id = $(this).data('productId');
    var checked_flg = true;
    $('#' + dialog_id + ' .sku_check_product_id_'+product_id).each(function(){
      if (!$(this).prop('checked')) {
        checked_flg = false;
      }
    });
    $('#' + dialog_id + ' .product_check_all[data-product-id='+product_id+']').prop('checked', checked_flg);
  });

}

// turbo_render時のコールバック呼出の抑止設定
function blockingTurboRenderCallback(instance) {
  console.log("call blockingTurboRenderCallback");
  instance.deterrenceTurboRenderCallbackFlg = true;
}

// turbo_render時のコールバック呼出の抑止解除設定
function clearTurboRenderCallback(instance) {
  console.log("call clearTurboRenderCallback");
  instance.deterrenceTurboRenderCallbackFlg = false;
}


module.exports = {
  ecrider_init: ecrider_init,
  component_cleanup: component_cleanup,
  showLoading: showLoading,
  productDialogAllCheck: productDialogAllCheck,
  blockingTurboRenderCallback: blockingTurboRenderCallback,
  clearTurboRenderCallback: clearTurboRenderCallback
}