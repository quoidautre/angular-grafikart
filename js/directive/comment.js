app.directive('ngComment', function() {
    return { 
        scope: {
            comment: '=',
            /* attribut "selection" dans : <ng-comment comment="comment" selection="selectComment()"> */
            /* "select" dans : <div ng-click="select()"> */
            select: '&selection' 
        },
        restrict: 'E',
        templateUrl: 'partials/_comment.html'
    }
});

app.directive('ngTabs', function() {
    return { 
        scope: {},
        restrict: 'E',
        transclude: true,
        templateUrl: 'partials/directive/tabs.html',
        controller:  function($scope) {
            $scope.tabs= [];
            this.add = function(tab) {
                if ($scope.tabs.length == 0) {
                   $scope.selectTab(tab);
                }
                $scope.tabs.push(tab);
            },
            $scope.selectTab = function(tab) {
                angular.forEach($scope.tabs, function(activeTab) {
                    activeTab.selected = false;
                });
                tab.selected  = true;
            }
            /*this.clic = function(title) {                alert(clic);            }*/
        }        
    }
});

app.directive('ngTab', function() {
    return { 
        scope: {
            title: '@'
        },
        restrict: 'E',
        transclude: true,
        templateUrl: 'partials/directive/tab.html',
        require:  '^ngTabs',
        link: function(scope, element, attrs, tabsCtrl) {
            tabsCtrl.add(scope);
            /*element.clic(function() {
                tabsCtrl.clic(scope.title);
            });*/
        }
    }
});