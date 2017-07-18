class PrenomCtrl { /*ceci ne fonctionne pas IE11*/
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

angular.module('app', [])
  .controller('PrenomCtrl', PrenomCtrl);