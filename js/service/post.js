    app.factory('PostFactory', function($http, $q, $timeout) {
        var factory = {            
            posts: false, 
            find: function(options){
                var deferred = $q.defer();
                
                if (factory.posts !== false) {
                    deferred.resolve(factory.posts);    
                } else {
                    $http.get('js/service/posts.json')
                    .success(function(data,status) {
                    factory.posts = data;
                    
                    $timeout(function(){
                        deferred.resolve(factory.posts);    
                    },500);                    
                    
                    })
                    .error(function(data,status) {
                        deferred.reject("Fichier json non présent ! (data: " + data + ", status: " +status+")");
                    }); 
                }
                return deferred.promise;
            }, 
            get: function(id) {
                var post = {};
                var deferred = $q.defer();
                
                var posts = factory.find().then(function(posts) {
                    angular.forEach(posts ,function(value,key) {
                        if (value.id == id) {
                            post = value;
                        }
                    });                
                    deferred.resolve(post);    
                }, function(msg) {
                     deferred.reject("Erreur de connexion... : " + msg);
                });                
                return deferred.promise;
            },
            add: function(comment) {
                var deferred = $q.defer();
                
                deferred.resolve();    
                return deferred.promise;
            }
        }
        return factory;
    });