// les components a partir de la v1.5 de AngularJS
(function () {
  'use strict'
  const module = angular.module('alert.component', []);

  class AlertCtrl {
    constructor(alertService) {
      this.messages = alertService.messages;
    }

    deleteMessage(index) {
      this.messages.splice(index, 1);
    }
  }

  module.component('afAlert', {
    controller: AlertCtrl,
    templateUrl: './alert/alert.template.html' //chemin par rapport au fichier index (different sur angular)

  });
}());