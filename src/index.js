import "bootstrap";
import { init_loader } from "./js/loader";
import { init_step } from "./js/step";
import { init_CheckBox } from "./js/check-box";

import { init_validate } from "./js/validade";
import { init_select } from "./js/select";

function init() {
  init_loader();
  init_step();
  init_validate();
  init_select();
}
init();
