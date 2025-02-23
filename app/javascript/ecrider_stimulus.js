import { Controller } from "@hotwired/stimulus"
import * as Ecrider from "./ecrider.js"

var currentControllernameValue = null;
var currentActionnameValue = null;

export class EcriderController extends Controller {
  static values = {
    controllername: String,
    actionname: String,
    params: Object,
    callFrom: String,
    deterrenceTurboRenderCallbackFlg: Boolean
  }
  
  initialize() {
    console.log("initialize():" + this.controllernameValue);
  }

  connect() {
    var preview = document.documentElement.hasAttribute("data-turbo-preview");
    
    console.log("---------------------------");
    console.log("[EcriderController]connected():" + this.controllernameValue);
    console.log("[EcriderController]preview:"+preview);
        
    //Turboによって、キャッシュロードと実ロードで2回呼ばれるので、キャッシュロード時はスキップする
    if (preview) {
      return false;
    }

    //EC_RIDER_NEW_PACKAGE-20
    // document.documentElement.setAttribute("data-turbo-preview", true);

    Ecrider.ecrider_init();
    
    var callBackForced = false;
    try {
      callBackForced = this.paramsValue.callBackForced;
    } catch(e) {
    }
    
    var $this = $(this);
    var controllername = this.controllernameValue;
    var actionnameValue = this.actionnameValue;
    var defer = new $.Deferred().resolve();
    var self = this;
    defer.promise().done(function() {
      let url = new URL(window.location.href);
      let params = url.searchParams;
      console.log("currentControllernameValue:" + currentControllernameValue);
      console.log("currentActionnameValue:" + currentActionnameValue);
      console.log("controllername:" + controllername);
      console.log("actionnameValue:" + actionnameValue);
      console.log("clear param:" + params.get('clear'));
      //turbo:before-fetch-responseが先に発行された場合は、呼出を抑止する
      if (params.get('clear') == "true" || callBackForced == true || currentControllernameValue != controllername || currentActionnameValue != actionnameValue) {
        console.log("call:" + controllername + "/" + actionnameValue);
        currentControllernameValue = controllername;
        
        switch(actionnameValue) {
          case "create":
            actionnameValue = "new";
            break;
          case "update":
            actionnameValue = "edit";
            break;
        }
        
        currentActionnameValue = actionnameValue;
        console.log("after currentControllernameValue:" + currentControllernameValue);
        console.log("after currentActionnameValue:" + currentActionnameValue);
        self.callFromValue = "normal";
        $this.trigger(actionnameValue);
      } else {
        console.log("deterrence:" + controllername + "/" + actionnameValue);
        return false;
      }
    });
    
    //ターボで更新した場合もイベント呼出を行う。
    //documentでコールバックを登録するとリロードまで保持するので、毎回削除する
    $(document).off("turbo:before-stream-render");
    $(document).on("turbo:before-stream-render", function() {
      console.log("deterrenceTurboRenderCallbackFlg:" + self.deterrenceTurboRenderCallbackFlg);
      if (self.deterrenceTurboRenderCallbackFlg == true) {
        console.log("deterrence(turbo:before-stream-render):" + controllername + "/" + actionnameValue + " deterrenceTurboRenderCallbackFlg:" + self.deterrenceTurboRenderCallbackFlg);
      } else {
        console.log("currentControllernameValue:" + currentControllernameValue + " / " + controllername);
        console.log("currentActionnameValue:" + currentActionnameValue + " / " + actionnameValue);
        if (controllername != currentControllernameValue || actionnameValue != currentActionnameValue) {
          //同一URLをロードした時にこのイベントが呼ばれる為、clear=trueのパラメータは削除する
          console.log("turbo:before-stream-render call:" + controllername + "/" + actionnameValue);
          
          //同一URLをロードした時にこのイベントが呼ばれる為、clear=trueのパラメータは削除する
          var url = window.location.pathname;
          var params = window.location.search;
          params = params.replace("clear=true", "");
          
          if (params.length > 1) {
            url = url + params;
          }
          
          history.replaceState("", "", url);
          
          currentControllernameValue = controllername;
          
          switch (actionnameValue) {
            case "create":
              actionnameValue = "new";
              break;
            case "update":
              actionnameValue = "edit";
              break;
          }
          
          currentActionnameValue = actionnameValue;
          self.callFromValue = "before-stream-render";
          $(document).trigger('fire_component_init');
          $this.trigger(actionnameValue);
        } else {
          console.log("deterrence(turbo:before-stream-render):" + controllername + "/" + actionnameValue);
        }
      }
    });
    $(document).off("turbo:before-cache");
    $(document).on("turbo:before-cache", function() {
      Ecrider.component_cleanup();
    });
  }
  
  disconnect() {
    console.log("disconnect():" + this.controllernameValue);
  }

  index() {
    console.log("index()");
  }
  
  new() {
    console.log("new()");
  }

  create() {
    console.log("create()");
    this.new()
  }

  edit() {
    console.log("edit()");
  }

  update() {
    console.log("update()");
    this.edit()
  }

  show() {
    console.log("show()");
  }
}