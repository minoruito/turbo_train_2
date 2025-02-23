// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import jquery from "jquery"
window.$ = window.jQuery = jquery

require("moment/dist/moment")
require("moment/dist/locale/ja")
require("jquery-ui/dist/jquery-ui.min")

import * as Ecrider from "./ecrider.js"

import "./controllers"