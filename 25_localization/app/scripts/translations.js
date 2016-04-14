angular.module("gettext").run(['gettextCatalog', function (gettextCatalog) {
    gettextCatalog.setStrings('es', {"Hello {{ user.name }}":"Hola {{ user.name }}","{{ count }} book":["{{ count }} libro","{{ count }} libros"]});

}]);