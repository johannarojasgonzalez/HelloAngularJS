// on met tout dans une fonction pour éviter d'avoir des variables globales comme module par ex
(function () {
  'use strict' // s'applique que sur ce fichier
  class PrenomCtrl {
    // la fonction constucteur : ceci ne fonctionne pas IE11 , c'est trop recent donc ne pas supporté
    constructor(alertService) {
      this.prenoms = [];
      this.alertService = alertService; // le service est injecté
    }

    addPrenom() {
      this.prenoms.push(this.prenom);
      this.alertService.addMessage('Le contact ' + this.prenom + ' a bien été ajouté');
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
    'alert.module'
  ]);

  module.controller('PrenomCtrl', PrenomCtrl);
}());

