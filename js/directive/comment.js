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