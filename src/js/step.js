import { black } from "ansi-colors";
import { init_calc } from "./calc";

export function init_step() {
  $(".box-conteudo-form[data-step='0']").addClass("enter");

  $(document).on("click", ".btn", function() {
    let step = $(".box-btn").data("step");
    switch ($(this).data("btn")) {
      case "prox":
        if (step_page(step)) {
          if (step !== 0) {
            $(`.box-conteudo-form[data-step='${step}']`).submit();
          } else {
            next();
          }
        }
        break;
      case "back":
        back();
        break;
    }
  });
}

function step_page(index) {
  let error = true;
  switch (index) {
    case 1:
      break;
  }

  return error;
}

export function next() {
  let step = $(".box-btn").data("step");
  $(`.box-conteudo-form[data-step='${step}']`).removeClass("enter");

  step = step + 1;

  $(`.box-conteudo-form[data-step='${step}']`)
    .show()
    .addClass("enter");

  $(".box-btn").data("step", step);
  if (step > 0) {
    $(".btn.back").addClass("active");
    $(".btn[data-btn='prox']").html("CONTINUAR");
    $(".bar-status").addClass("active");
  }

  setTimeout(() => {
    $(`.bar-status ul li:eq(${step - 1})`).addClass("check");
  }, 350);

  if (step === 15) {
    $(".bar-status").removeClass("active");
    $(".box-btn.next-step").fadeOut();
    init_calc();
  }
}

function back() {
  let step = $(".box-btn").data("step");

  $(`.bar-status ul li:eq(${step - 1})`).removeClass("check");

  $(`.box-conteudo-form[data-step='${step}']`)
    .hide()
    .removeClass("enter");

  step = step - 1;

  $(`.box-conteudo-form[data-step='${step}']`)
    .fadeIn()
    .addClass("enter ");
  $(".box-btn").data("step", step);
  if (step === 0) {
    $(".btn.back").removeClass("active");
    $(".btn[data-btn='prox']").html("COMEÇAR");
    $(".bar-status").removeClass("active");
  }
}
