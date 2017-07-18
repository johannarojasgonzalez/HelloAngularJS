(function () {
  'use strict'
  const module = angular.module('alert.directive', []);
  module.directive('afAlert', function () {
    return {
      restrict : 'E', // s'utilise en tan que nom d'element (une balise html)
      scope: {
        message: '=' // l'attribut message sera fourni par la variable du même nom
      },
      templateUrl: './alert/alert.template.html' //chemin par rapport au fichier index (different sur angular)
    }
  });
}()); // ceci est un composant
