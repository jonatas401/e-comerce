// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/e-comerce$0.0.1/templates/cadastro.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><title>UseVibe - Cadastro</title><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous><script src=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js integrity=sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx crossorigin=anonymous></script><link rel=stylesheet href=styles/style.css><style>\n        body {\n            color: #fff;\n        }\n        .cad{\n            width:30%;\n            margin-left:35%;\n        }\n        .cad1{\n            width:60%;\n            margin-left:20%;\n        }\n    </style></head><body><div class=container><h1> Cadastre-se </h1> <form action=/save method=post> <input name=id" +
    marko_attr("value", "" + data.id) +
    " type=hidden> <div class=col><label for=nome>Nome: </label><div class=input-group-prepend><input" +
    marko_attr("value", data.nome) +
    " class=\"form-control cad\" name=nome placeholder=\"Digite seu nome\" required></div> </div> <div class=col><label for=email>Email: </label><div class=input-group><div class=input-group-prepend><span style=\"position:absolute; right:61%;\" class=\"input-group-text \" id=inputGroupPrepend2>@</span></div><input class=\"input-group-text cad\"" +
    marko_attr("value", data.email) +
    " name=email placeholder=\"Digite o email\" required></div> </div> <div class=col><label for=senha class>Senha: </label> <div class=input-group-prepend><input type=password class=\"form-control cad\" name=senha value placeholder=\"Digite uma senha\" required></div></div><div class=col><label for=numero class>Telefone para contao: </label> <div class=input-group-prepend><input type=text name=numero class=\"form-control cad\" value placeholder=\"Digite seu telefone\" required></div></div><div class=col></div><label for=endereco class>Endereço: </label> <div class=from-group><label for=cep>CEP</label><input name=cep class=\"form-control cad1\" type=text id=cep maxlength=9 onblur=pesquisaCep(this.value) required><small>00000-000</small></div><div class=from-group><label for=logradoro>Logradouro</label><input name=logradouro class=\"form-control cad1\" type=text id=Logradouro value><small></small></div><div class=from-group><label for=bairro>Bairro</label><input name=bairro class=\"form-control cad1\" type=text id=Bairro required><small></small></div><div class=from-group><label for=cidade>Cidade</label><input name=localidade class=\"form-control cad1\" type=text id=Localidade></div><div class=from-group style=margin-bottom:10px;><label for=uf>UF</label><input name=uf class=\"form-control cad1\" style=\"width:10%; margin-left:45%;\" type=text id=uf><small>estado</small></div><button type=submit class=\"btn btn-light\">Inserir</button><a class=\"btn btn-danger\" href=/ >Cancelar</a></form></div><div class=toast role=alert aria-live=assertive aria-atomic=true style=\"position: absolute;top:10px; right:50px;\"><div class=toast-header><img src=... class=\"rounded mr-2\" alt=...><strong class=mr-auto>alerta</strong><small>now</small><button type=button class=\"ml-2 mb-1 close  btn btn-danger\" data-dismiss=toast aria-label=Close><span aria-hidden=true>&times;</span></button></div><div class=toast-body>" +
    marko_escapeXml(data.error_messages) +
    marko_escapeXml(data.success_messages) +
    "</div></div>");

  marko_forOf(data.error_messages, function(message, index) {
    out.w("<script> \n                console.log('email em uso')\n                $(document).ready(function(){\n                    $('.toast').toast('show',)\n                })\n                console.log(message)\n                </script>");
  });

  marko_forOf(data.success_messages, function(message, index) {
    out.w("<script> \n        \n        $(document).ready(function(){\n            $('.toast').toast('show')\n        })\n    \n    </script>");
  });

  out.w("<script>\n\n            function pesquisaCep(cep){\n                console.log(cep)\n                let ajax = new XMLHttpRequest();\n\n                ajax.open('GET', 'https://viacep.com.br/ws/'+cep+'/json/')\n\n                //console.log(ajax)\n                ajax.onreadystatechange = ()=>{\n                    //console.log(ajax.readyState)\n                    \n                    if(ajax.readyState == 4 && ajax.status == 200){\n                    let res = ajax.responseText\n                    let ajaxOBJ = JSON.parse(res);\n\n                    console.log(ajaxOBJ)\n\n                    document.getElementById('Logradouro').value = ajaxOBJ.logradouro;\n                    document.getElementById('Bairro').value = ajaxOBJ.bairro;\n                    document.getElementById('Localidade').value = ajaxOBJ.localidade;\n                    document.getElementById('uf').value = ajaxOBJ.uf;\n                    }\n                }\n\n                ajax.send()\n            }\n\n            /*function estados(){\n\n                const ufSelect = document.querySelector('select[name=uf]')\n\n                fetch(\"https://servicodados.ibge.gov.br/api/v1/localidades/estados\")\n                .then((res)=>{\n                    return res.json()\n                }).then((data)=>{\n                    for(const state of data){\n                        ufSelect.innerHTML += `<option value='${state.id}'>${state.nome}<option>`\n                    }\n                })\n\n\n                }\n             \n            estados() */\n              \n    \n</script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "61");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/e-comerce$0.0.1/templates/cadastro.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
