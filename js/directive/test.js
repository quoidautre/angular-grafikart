app.directive('ngTest', function() {
    return {
        template : '<div>Salut à toi : {{username}}{{comments}}<div ng-transclude></div></div>',
        scope: {
            username : '='
        },
        transclude:true,
        restrict: 'A'
    }
});