    angular.module("Sda", []).controller("usersCtrl", function ($scope){
         $scope.hello = "Hello";
         $scope.look = function(){
          return $scope.limit < $scope.users.length
         };
         $scope.more = function(){
         $scope.limit = $scope.limit +10;
         };
         $scope.limit = 2;
         $scope.users = [
         {
             username: "Paweł",
             role: "admin"},
                 {
             username: "Dawid",
             role: "menager"},
                 {
             username: "Wojtek",
             role: "boss"},
                 {
             username: "Hela",
             role: "user"}
         ];
         }),controller("TabsCtrl", function($scope)
         $scope.current = 1;
         $scope.changeTab = function(tab){
         $scope.current = tab;};
         $scope.isCurrent = function(tab){
         return tab === $scope.current;}
         });
