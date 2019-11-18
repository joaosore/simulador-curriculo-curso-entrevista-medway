import validate from "jquery-validation";
import { next } from "./step";

export function init_validate() {
  $(".box-conteudo-form[data-step='1']").validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true
      },
      instituicao: {
        required: true
      },
      "especialidade[]": {
        required: true
      }
    },
    submitHandler: function() {
      next();
    }
  });

  $(".box-conteudo-form[data-step='2']").validate({
    rules: {
      curriculo: {
        required: true
      }
    },
    submitHandler: function() {
      next();
    }
  });

  $(".box-conteudo-form[data-step='3']").validate({
    rules: {
      monitoria: {
        required: true
      }
    },
    submitHandler: function() {
      next();
    }
  });

  $(".box-conteudo-form[data-step='4']").validate({
    rules: {
      bolsa: {
        required: true
      }
    },
    submitHandler: function() {
      next();
    }
  });

  $(".box-conteudo-form[data-step='5']").validate({
    rules: {
      publicacoes: {
        required: true
      }
    },
    submitHandler: function() {
      next();
    }
  });

  $(".box-conteudo-form[data-step='6']").validate({
    rules: {
      trabalhos: {
        required: true
      }
    },
    submitHandler: function() {
      next();
    }
  });

  $(".box-conteudo-form[data-step='7']").validate({
    rules: {
      estagios: {
        required: true
      }
    },
    submitHandler: function() {
      next();
    }
  });

  $(".box-conteudo-form[data-step='8']").validate({
    rules: {
      extensoes: {
        required: true
      }
    },
    submitHandler: function() {
      next();
    }
  });

  $(".box-conteudo-form[data-step='9']").validate({
    rules: {
      congressos: {
        required: true
      }
    },
    submitHandler: function() {
      next();
    }
  });

  $(".box-conteudo-form[data-step='10']").validate({
    rules: {
      cursos: {
        required: true
      }
    },
    submitHandler: function() {
      next();
    }
  });

  $(".box-conteudo-form[data-step='11']").validate({
    rules: {
      suporte: {
        required: true
      }
    },
    submitHandler: function() {
      next();
    }
  });

  $(".box-conteudo-form[data-step='12']").validate({
    rules: {
      academico: {
        required: true
      }
    },
    submitHandler: function() {
      next();
    }
  });

  $(".box-conteudo-form[data-step='13']").validate({
    rules: {
      progresso: {
        required: true
      }
    },
    submitHandler: function() {
      next();
    }
  });

  $(".box-conteudo-form[data-step='14']").validate({
    rules: {
      premios: {
        required: true
      }
    },
    submitHandler: function() {
      next();
    }
  });

  $(document).on("change", "#formulario-flutuante select", function() {
    if ($(this).val().length > 0) {
      $("#loja-error").hide();
      $(this).removeClass("error");
      $(this).addClass("valid");
    }
  });
}
