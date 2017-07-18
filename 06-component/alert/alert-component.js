// a partir de la v1.5 de AngularJS
(function () {
  'use strict'
  const module = angular.module('alert.component', []);
  module.component('afAlert', {
    bindings: {
      message: '=' // l'attribut message sera fourni par la variable du même nom
    },
    templateUrl: './alert/alert.template.html' //chemin par rapport au fichier index (different sur angular)

  });
}()); // ceci est un composant
