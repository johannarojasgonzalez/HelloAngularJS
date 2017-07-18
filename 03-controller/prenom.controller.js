angular.module('app', [])
  .controller('PrenomCtrl', ['$scope', function ($scope) {
    $scope.prenoms = [];
    $scope.addPrenom = function () {
      $scope.prenoms.push($scope.prenom);
      $scope.prenom = '';
    }
    $scope.deletePrenom = function (index) {
      $scope.prenoms.splice(index, 1);
    }
    $scope.deleteLast = function () {
      var length = $scope.prenoms.length;
      if (length > 0) {
        $scope.prenoms.splice(length - 1, 1);
      }
    }
  }]);