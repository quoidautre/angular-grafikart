app.directive('time', function(dateFilter, $interval) {
    return { 
        scope: {},
        restrict: 'E',
        template: '{{time}}',
        link : function(scope, element, attrs,interval) {
            
            element.on('$destroy', function(){
              $interval.cancel(interval);
            });
            
            interval: $interval(function() {
                scope.time= dateFilter(new Date(),"dd/mm/yyyy HH:mm:ss");
                console.log("Time changed !");
            },1000)
        }
    }
});

app.directive('datepicker', function() {
    return {
        scope: {
            options : '=datepickerOptions'
        },
        restrict: 'C',
        link : function(scope, element, attrs) {
            console.log(scope);
            $(element).pickadate(scope.options);
        }
    }
});
