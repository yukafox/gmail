function loadTemplete (conteiner, blockName) {
    var template = $.get("blocks/" + blockName + "/" + blockName + ".hbs"),
        data = $.get("blocks/" + blockName + "/" + blockName + ".json");

    return $.when(template, data)
        .then (function (template, data) {
            var result = Handlebars.compile(template[0])(data[0]);
            $(conteiner).append(result);
        })

}
