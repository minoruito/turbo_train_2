import * as Ecrider from "../ecrider.js"
import { EcriderController } from "../ecrider_stimulus.js"

export default class extends EcriderController {
  
  index() {
    console.log("[samples]index");
    var $this = $(this);
    
    //オブザーバー監視を設定
    //演習箇所
  }
  
  record_add() {
    console.log("[samples] => record_add()");
    let targetForm = $("#table_form");
    var firstTargetTr = targetForm.find("tr").first().clone();
    var trSize = targetForm.find("tr").length
    
    //1行目のtrのinputを初期化
    firstTargetTr.find("input").each(function() {
      let name = $(this).attr("name");
      if (name.indexOf("[title]") > 0) {
        $(this).attr("name", "header[details_attributes][" + trSize + "][title]");
        $(this).attr("id", "header_details_attributes_" +  trSize + "_title");
        $(this).val("");
      } else if (name.indexOf("[date2]") > 0) {
        $(this).attr("name", "header[details_attributes][" + trSize + "][date2]");
        $(this).attr("id", "header_details_attributes_" +  trSize + "_date2");
        $(this).val("");
      }
    });
    firstTargetTr.attr("data-index", trSize);
    
    targetForm.append($(firstTargetTr));
    
    firstTargetTr.addClass("new_record");
  }
  
  record_remove() {
    console.log("[samples] => record_remove()");
    let target = event.currentTarget;
    let targetTr = target.parentElement.parentElement;
    let index = $(targetTr).data("index");

    if (index > 0) {
      //既存レコードの場合
      if (!$(targetTr).hasClass("new_record")) {
        let targetForm = $(targetTr).siblings("#header_details_attributes_" + index + "__destroy").first();
        targetForm.val("true");
      }
      $(targetTr).remove();
      let targetForm = $("#table_division_values_form");
    }
  }
}
