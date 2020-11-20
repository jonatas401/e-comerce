// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projeto$1.0.0/view/main.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>E-commerce</title><link rel=stylesheet href=css/style.css><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous><script src=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js integrity=sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx crossorigin=anonymous></script></head><body><div class=navbarr><h1 class=logo>E-commerce</h1><ul id=navegacao><li id=home><a href=index.html>Home</a></li><li id=brasil><a href>favoritos</a></li><li id=internacional><a href=categorias.html>categorias</a></li><li><a href>lojas</a></li><li id=foto><a href=contatos.html>contatos</a></li></ul></div><div id=principal><div class=\"news fundo \"><h3 class=a>procurar produt</h3><nav class=\"navbar navbar-light bg-light\"><form class=form-inline><input class=\"form-control mr-sm-2\" type=search placeholder=Search aria-label=Search><button class=\"btn btn-outline-success my-2 my-sm-0\" type=submit>Search</button></form></nav></div><div class=\"mundo fundo \"><h1 class=a>Mundo</h1><ul><li><a href><img class=foto2 src=assets/cidade.jpg alt><h3>destaques</h3><h3>produto</h3><br></a><a class=\"btn btn-info\" href>ver todos</a></li><li><a href><img class=foto2 src=assets/cidade.jpg alt><h3>produto</h3><br></a><a class=\"btn btn-info\" href>ver todos</a></li></ul></div><div class=\"recentes fundo \"><h1 class=a>Recentes</h1><ul><li><a href><img class=foto2 src=assets/mundo.jpg alt><h3>produto</h3><br></a><a class=\"btn btn-info\" href>ver todos</a></li><li><a href><img class=foto2 src=assets/mundo.jpg alt><h3>produto</h3><br></a><a class=\"btn btn-info\" href>ver todos</a></li></ul></div><div id=rodape><h3>todos os direitos reservados <br> &copy; algumas coisa ltda</h3></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "62");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/projeto$1.0.0/view/main.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };