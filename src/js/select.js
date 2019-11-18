import { selectize } from "selectize";

const curriculo = ["<6,0", "6,0 - 7,4", "7,5 - 8,9", ">8,9"];
const especialidade = [
  "Anestesiologia",
  "Clínica Médica",
  "Cirurgia Geral",
  "Dermatologia",
  "Ginecologia e Obstetrícia",
  "Infectologia",
  "Medicina de Família e Comunidade",
  "Medicina de Emergência",
  "Medicina Intensiva",
  "Neurocirurgia",
  "Neurologia",
  "Oftalmologia",
  "Ortopedia e Traumatologia",
  "Otorrinolaringologia",
  "Patologia",
  "Pediatria",
  "Psiquiatria",
  "Radiologia e Diagnóstico por Imagem"
];
const monitoria = ["Nenhuma", "1 monitoria", "2 monitorias"];
const bolsa = ["Nenhuma", "1 bolsa", "2 bolsas"];
const areas = [
  "Anatomia",
  "Anestesiologia",
  "Clínica Médica ou subespecialidades: Cardiologia, Hematologia, Pneumologia, etc",
  "Cirurgia Geral ou subespecialidades: Trauma, Gastrocirurgia, Vascular, Urologia, etc",
  "Dermatologia",
  "Fisiologia",
  "Ginecologia e Obstetrícia",
  "Infectologia",
  "Medicina de Família e Comunidade",
  "Medicina de Emergência",
  "Medicina Intensiva",
  "Neurocirurgia",
  "Neurologia",
  "Oftalmologia",
  "Ortopedia e Traumatologia",
  "Otorrinolaringologia",
  "Patologia",
  "Pediatria ou subespecialidades: Neonatologia, Cirurgia Pediátrica, etc.",
  "Psiquiatria",
  "Radiologia e Diagnóstico por Imagem",
  "Semiologia"
];
const publicacoes = [
  "Nenhuma",
  "1 publicação",
  "2 publicações",
  "3 publicações",
  "4 publicações"
];

const trabalhos = [
  "Nenhuma",
  "1 trabalho",
  "2 trabalhos",
  "3 trabalhos",
  "4 trabalhos"
];

const estagios = ["Nenhuma", "1 estágio", "2 estágios"];

const extensoes = [
  "Nenhuma",
  "1 atividade",
  "2 atividades",
  "3 atividades",
  "4 atividades"
];

const congressos = [
  "Nenhuma",
  "1 congresso",
  "2 congressos",
  "3 congressos",
  "4 congressos"
];

const premios = ["Não", "Sim"];

const cursos = ["Nenhuma", "1 curso"];

const suporte = ["Nenhum", "só ACLS", "ACLS + PALS ou ATLS"];

const academico = ["Não participou", "Participou"];

const progresso = ["Não participou", "Participou"];

export function init_select() {
  init_especialidade();
  init_curriculo();
  init_monitoria();
  init_bolsa();
  init_publicacao();
  init_trabalhos();
  init_estagios();
  init_extensoes();
  init_congressos();
  init_cursos();
  init_suporte();
  init_academico();
  init_progresso();
  init_premios();

  if ($(window).width() > 991) {
    $("#especialidade, .areas").selectize({
      plugins: ["remove_button"],
      delimiter: ",",
      persist: false,
      create: function(input) {
        return {
          value: input,
          text: input
        };
      }
    });
  }
}

function init_especialidade() {
  $("#especialidade").append(option(especialidade));
  $(".areas").append(option(areas));
}

export function init_curriculo() {
  $("#curriculo").append(option(curriculo));
}

export function init_monitoria() {
  $("#monitoria").append(option(monitoria));
  $(".areas")
    .parent()
    .fadeOut();
  $(document).on("change", "#monitoria", function() {
    if ($(this).val() === "1 monitoria" || $(this).val() === "2 monitorias") {
      $(this)
        .parent()
        .parent()
        .find(".areas")
        .parent()
        .fadeIn();
    } else {
      $(this)
        .parent()
        .parent()
        .find(".areas")
        .parent()
        .fadeOut();
    }
  });
}

export function init_bolsa() {
  $("#bolsa").append(option(bolsa));
}

function init_publicacao() {
  $("#publicacoes").append(option(publicacoes));
  $(".areas")
    .parent()
    .fadeOut();
  $(document).on("change", "#publicacoes", function() {
    if (
      $(this).val() === "1 publicação" ||
      $(this).val() === "2 publicações" ||
      $(this).val() === "3 publicações" ||
      $(this).val() === "4 publicações"
    ) {
      $(this)
        .parent()
        .parent()
        .find(".areas")
        .parent()
        .fadeIn();
    } else {
      $(this)
        .parent()
        .parent()
        .find(".areas")
        .parent()
        .fadeOut();
    }
  });
}

function init_trabalhos() {
  $("#trabalhos").append(option(trabalhos));
  $(".areas")
    .parent()
    .fadeOut();
  $(document).on("change", "#trabalhos", function() {
    if (
      $(this).val() === "1 trabalho" ||
      $(this).val() === "2 trabalhos" ||
      $(this).val() === "3 trabalhos" ||
      $(this).val() === "4 trabalhos"
    ) {
      $(this)
        .parent()
        .parent()
        .find(".areas")
        .parent()
        .fadeIn();
    } else {
      $(this)
        .parent()
        .parent()
        .find(".areas")
        .parent()
        .fadeOut();
    }
  });
}

function init_estagios() {
  $("#estagios").append(option(estagios));
  $(".areas")
    .parent()
    .fadeOut();
  $(document).on("change", "#estagios", function() {
    if ($(this).val() === "1 estágio" || $(this).val() === "2 estágios") {
      $(this)
        .parent()
        .parent()
        .find(".areas")
        .parent()
        .fadeIn();
    } else {
      $(this)
        .parent()
        .parent()
        .find(".areas")
        .parent()
        .fadeOut();
    }
  });
}

function init_extensoes() {
  $("#extensoes").append(option(extensoes));
}

function init_congressos() {
  $("#congressos").append(option(congressos));
}

function init_cursos() {
  $("#cursos").append(option(cursos));
}

function init_suporte() {
  $("#suporte").append(option(suporte));
}

function init_academico() {
  $("#academico").append(option(academico));
}

function init_progresso() {
  $("#progresso").append(option(progresso));
}

function init_premios() {
  $("#premios").append(option(premios));
}
function option(arr) {
  let opt = "";
  arr.map(function(value) {
    opt += `<option value="${value}">${value}</option>`;
  });
  return opt;
}
