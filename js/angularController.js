angular.module("app", []).controller("Angular", function($scope) {
  $scope.assignment = function() {
    alert("here");
  };

  $scope.additionOddNgArray = function(sumFirstOdd, sumFirstOdd1) {
    $scope.count = additionOdd(sumFirstOdd, sumFirstOdd1);
  };

  $scope.arithmeticNgMean1 = function(inputArithmetic1, inputArithmetic2) {
    $scope.resultArithmetic = arithmeticMean1(
      inputArithmetic1,
      inputArithmetic2
    );
  };

  $scope.factorialNgRecursive = function(inputRecursive) {
    $scope.resultRecursive = recursiveFactorial(inputRecursive);
  };

  $scope.factorialNgIterative = function(inputIterative) {
    $scope.resultIterative = factorialIt(inputIterative);
  };

  $scope.combinationsNgFactorial = function(inputcomf1, inputcomf2) {
    $scope.resultComFact = combinationsFact(inputcomf1, inputcomf2);
  };

  $scope.combinationsNg = function(inputcom1, inputcom2) {
    $scope.combinations = combinations1(inputcom1, inputcom2);
  };

