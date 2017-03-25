angular.module("Sda", []).controller("usersCtrl", function ($scope, $http) {
   $scope.loading = true;
   $http.get("https://jsonplaceholder.typicode.com/users").then(function (res){
   $scope.users = res.data;
   $scope.loading = false;
    });

    $scope.limit = 2;
    $scope.more = function () {
        $scope.limit = $scope.limit + 10;
    };

    $scope.shouldShowMoreButton = function () {
        return $scope.users && $scope.limit < $scope.users.length
    };

    $scope.remove = function (index) {
        $scope.users.splice(index, 1);
    };

    $scope.addUser = function () {
          $scope.users.push({
              username: $scope.newName,
              role: $scope.newRole
          });
          $scope.newName = "";
          $scope.newRole = "";
    };

}).controller("TabsCtrl", function ($scope) {
    $scope.current = 1;

    $scope.changeTab = function (tab) {
        $scope.current = tab;
    };

    $scope.isCurrent = function (tab) {
        return tab === $scope.current;
    }

});