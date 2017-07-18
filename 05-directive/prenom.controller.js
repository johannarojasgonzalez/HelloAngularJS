// on met tout dans une fonction pour éviter d'avoir des variables globales comme module par ex
(function () {
  'use strict' // s'applique que sur ce fichier
  class PrenomCtrl {
    // ceci ne fonctionne pas IE11 , c'est trop recent donc ne pas supporté
    constructor() {
      this.prenoms = [];
    }

    addPrenom() {
      this.prenoms.push(this.prenom);
      this.prenom = '';
    }

    deletePrenom(index) {
      this.prenoms.splice(index, 1);
    }

    deleteLast() {
      var length = this.prenoms.length;
      if (length > 0) {
        this.prenoms.splice(length - 1, 1);
      }
    }
  }

  const module = angular.module('prenom.controller', [
    'alert.directive'
  ]);

  module.controller('PrenomCtrl', PrenomCtrl);
}());

