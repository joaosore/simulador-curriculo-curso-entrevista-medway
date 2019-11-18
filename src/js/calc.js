let sp = 0;
let br = 0;

export function init_calc() {
  var name = $("#name").val();
  var email = $("#email").val();
  var instituicao = $("#instituicao").val();
  var especialidade = $("#especialidade").val();
  var curriculo = $("#curriculo").val();
  var monitoria = $("#monitoria").val();
  var monitoria_areas = $("#monitoria_areas").val();
  var bolsa = $("#bolsa").val();
  var publicacoes = $("#publicacoes").val();
  var publicacoes_areas = $("#publicacoes_areas").val();
  var trabalhos = $("#trabalhos").val();
  var trabalhos_areas = $("#trabalhos_areas").val();
  var estagios = $("#estagios").val();
  var estagios_areas = $("#estagios_areas").val();
  var extensoes = $("#extensoes").val();
  var congressos = $("#congressos").val();
  var cursos = $("#cursos").val();
  var suporte = $("#suporte").val();
  var academico = $("#academico").val();
  var progresso = $("#progresso").val();
  var premios = $("#premios").val();

  const dados = {
    name: name,
    email: email,
    instituicao: instituicao,
    especialidade: especialidade,
    curriculo: curriculo,
    monitoria: monitoria,
    monitoria_areas: monitoria_areas,
    bolsa: bolsa,
    publicacoes: publicacoes,
    publicacoes_areas: publicacoes_areas,
    trabalhos: trabalhos,
    trabalhos_areas: trabalhos_areas,
    estagios: estagios,
    estagios_areas: estagios_areas,
    extensoes: extensoes,
    congressos: congressos,
    cursos: cursos,
    suporte: suporte,
    academico: academico,
    progresso: progresso,
    premios: premios
  };

  init_curriculo(curriculo);
  init_monitoria(monitoria);
  init_bolsa(bolsa);
  init_publicacoes(publicacoes);
  init_trabalhos(trabalhos);
  init_estagios(estagios);
  init_extensoes(extensoes);
  init_congressos(congressos);
  init_cursos(cursos);
  init_suporte(suporte);
  init_academico(academico);
  init_progresso(progresso);
  init_premios(premios);

  rd(dados);

  $(".placar .sp").html(parseFloat(sp.toFixed(2)) + "<span>/10</span>");
  $(".placar .br").html(parseFloat(br.toFixed(2)) + "<span>/10</span>");
}

function rd(dados) {
  $.ajax({
    type: "GET",
    url:
      "https://app.rdstation.com.br/api/1.2/conversions.json?token_rdstation=c563b3f05f59736e762abdce76235dff&identificador=simulador-curriculo&_is=6&redirect_to=http%3A%2F%2Fmedway.com.br&c_utmz=&traffic_source=&client_id=&name=" +
      dados.name +
      "&email=" +
      dados.email +
      "&custom_fields%5B329748%5D=" +
      dados.instituicao +
      "&custom_fields%5B692473%5D=" +
      dados.especialidade +
      "&custom_fields%5B692474%5D=" +
      dados.curriculo +
      "&custom_fields%5B692475%5D=" +
      dados.monitoria +
      "&custom_fields%5B692476%5D=" +
      dados.monitoria_areas +
      "&custom_fields%5B692477%5D=" +
      dados.bolsa +
      "&custom_fields%5B692478%5D=" +
      dados.publicacoes +
      "&custom_fields%5B692479%5D=" +
      dados.publicacoes_areas +
      "&custom_fields%5B692480%5D=" +
      dados.trabalhos +
      "&custom_fields%5B692481%5D=" +
      dados.trabalhos_areas +
      "&custom_fields%5B692482%5D=" +
      dados.estagios +
      "&custom_fields%5B692483%5D=" +
      dados.estagios_areas +
      "&custom_fields%5B692484%5D=" +
      dados.extensoes +
      "&custom_fields%5B692485%5D=" +
      dados.cursos +
      "&custom_fields%5B692487%5D=" +
      dados.suporte +
      "&custom_fields%5B692488%5D=" +
      dados.academico +
      "&custom_fields%5B692489%5D=" +
      dados.progresso +
      "&custom_fields%5B692490%5D=" +
      dados.premios +
      "&custom_fields%5B692503%5D=" +
      dados.congressos +
      "&custom_fields%5B692508%5D=" +
      parseFloat(sp.toFixed(2)) +
      "&custom_fields%5B692509%5D=" +
      parseFloat(br.toFixed(2)),
    beforeSend: function() {},
    complete: function(response) {},
    success: function(response) {},
    error: function() {}
  });
}

function init_curriculo(el) {
  switch (el) {
    case "<6,0":
      sp = sp + 0.5;
      br = br + 0.5;
      break;
    case "6,0 - 7,4":
      sp = sp + 1.0;
      br = br + 1.0;
      break;
    case "7,5 - 8,9":
      sp = sp + 1.5;
      br = br + 1.5;
      break;
    case ">8,9":
      sp = sp + 2.0;
      br = br + 2.0;
      break;
  }
}

function init_monitoria(el) {
  switch (el) {
    case "Nenhuma":
      sp = sp + 0.0;
      br = br + 0.0;
      break;
    case "1 monitoria":
      sp = sp + 0.25;
      br = br + 0.4;
      break;
    case "2 monitorias":
      sp = sp + 0.5;
      br = br + 0.8;
      break;
  }
}

function init_bolsa(el) {
  switch (el) {
    case "Nenhuma":
      sp = sp + 0.0;
      br = br + 0.0;
      break;
    case "1 bolsa":
      sp = sp + 0.25;
      br = br + 0.4;
      break;
    case "2 bolsas":
      sp = sp + 0.5;
      br = br + 0.8;
      break;
  }
}

function init_publicacoes(el) {
  switch (el) {
    case "Nenhuma":
      sp = sp + 0.0;
      br = br + 0.0;
      break;
    case "1 publicação":
      sp = sp + 0.25;
      br = br + 0.3;
      break;
    case "2 publicações":
      sp = sp + 0.5;
      br = br + 0.6;
      break;
    case "3 publicações":
      sp = sp + 0.75;
      br = br + 0.9;
      break;
    case "4 publicações":
      sp = sp + 1.0;
      br = br + 1.2;
      break;
  }
}

function init_trabalhos(el) {
  switch (el) {
    case "Nenhuma":
      sp = sp + 0.0;
      br = br + 0.0;
      break;
    case "1 trabalho":
      sp = sp + 0.25;
      br = br + 0.3;
      break;
    case "2 trabalhos":
      sp = sp + 0.5;
      br = br + 0.6;
      break;
    case "3 trabalhos":
      sp = sp + 0.75;
      br = br + 0.9;
      break;
    case "4 trabalhos":
      sp = sp + 1.0;
      br = br + 1.2;
      break;
  }
}

function init_estagios(el) {
  switch (el) {
    case "Nenhuma":
      sp = sp + 0.0;
      br = br + 0.0;
      break;
    case "1 estágio":
      sp = sp + 0.4;
      br = br + 0.3;
      break;
    case "2 estágios":
      sp = sp + 0.8;
      br = br + 0.6;
      break;
  }
}

function init_extensoes(el) {
  switch (el) {
    case "Nenhuma":
      sp = sp + 0.0;
      br = br + 0.0;
      break;
    case "1 atividade":
      sp = sp + 0.25;
      br = br + 0.2;
      break;
    case "2 atividades":
      sp = sp + 0.5;
      br = br + 0.4;
      break;
    case "3 atividades":
      sp = sp + 0.75;
      br = br + 0.6;
      break;
    case "4 atividades":
      sp = sp + 1.0;
      br = br + 0.8;
      break;
  }
}

function init_congressos(el) {
  switch (el) {
    case "Nenhuma":
      sp = sp + 0.0;
      br = br + 0.0;
      break;
    case "1 congresso":
      sp = sp + 0.25;
      br = br + 0.2;
      break;
    case "2 congressos":
      sp = sp + 0.5;
      br = br + 0.4;
      break;
    case "3 congressos":
      sp = sp + 0.75;
      br = br + 0.6;
      break;
    case "4 congressos":
      sp = sp + 1.0;
      br = br + 0.8;
      break;
  }
}

function init_cursos(el) {
  switch (el) {
    case "Nenhuma":
      sp = sp + 0.0;
      br = br + 0.0;
      break;
    case "1 curso":
      sp = sp + 0.5;
      br = br + 0.5;
      break;
  }
}

function init_suporte(el) {
  switch (el) {
    case "Nenhuma":
      sp = sp + 0.0;
      br = br + 0.0;
      break;
    case "só ACLS":
      sp = sp + 0.75;
      br = br + 0.5;
      break;
    case "ACLS + PALS ou ATLS":
      sp = sp + 1.0;
      br = br + 0.75;
      break;
  }
}

function init_academico(el) {
  switch (el) {
    case "Não participou":
      sp = sp + 0.0;
      br = br + 0.0;
      break;
    case "Participou":
      sp = sp + 0.2;
      br = br + 0.25;
      break;
  }
}

function init_progresso(el) {
  switch (el) {
    case "Não participou":
      sp = sp + 0.0;
      br = br + 0.0;
      break;
    case "Participou":
      sp = sp + 0.2;
      br = br + 0.2;
      break;
  }
}

function init_premios(el) {
  switch (el) {
    case "Não":
      sp = sp + 0.0;
      br = br + 0.0;
      break;
    case "Sim":
      sp = sp + 0.3;
      br = br + 0.1;
      break;
  }
}
