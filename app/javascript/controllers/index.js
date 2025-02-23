// Import and register all your controllers from the importmap via controllers/**/*_controller
import { application } from "./application"

import SamplesController from "./samples_controller"
application.register("samples", SamplesController)
