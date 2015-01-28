    app.controller('CommentsCtrl', function($scope,  $rootScope, PostFactory, $routeParams){
        $rootScope.loading = true;
        
        $scope.newComment = {};
        
        var post = PostFactory.get($routeParams.id).then(function(post) {            
            $rootScope.loading = false;
            $scope.title = post.name;
            $scope.comments = post.comments;
        }, function(msg) {
            alert(msg);
        });
        
        $scope.addComment = function() {
            $scope.comments.push($scope.newComment);            
            post.add($scope.newComment).then(function() {
                
            }
            ,function() {
                alert('Erreur dans la sauvegarde du message !');
            });
            
            $scope.newComment = {};
        };
        
        $scope.selectComment = function() {
           alert('hi there');
        };
                
    });