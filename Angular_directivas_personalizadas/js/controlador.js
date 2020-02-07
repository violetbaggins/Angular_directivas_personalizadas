/* ---------------------------------------------------------------------------------------------- */
/* DIRECTIVAS PERSONALIZADAS */
/* ---------------------------------------------------------------------------------------------- */

angular.module ('miApp', [])
    .directive('miDirectiva', function(){
        return {
            restrict: 'AEC',
            controller: 'miCtrl1',
/* <<<<PRIMER METODO PARA ISOLAR EL SCOPE>>>>>>>> */
       /*      scope: {datoatrib: '=dato'},
            template: '<h5> Mensaje de la directiva - {{mensaje}} - {{datoatrib}} </h5>' */

            /* <<<<SEGUNDO METODO PARA ISOLAR EL SCOPE>>>>>>>> */
            scope: {dato: '@'},
           /*  template: '<h5> Mensaje de la directiva - {{mensaje}} - {{dato}} </h5>', */
            templateUrl: 'archivo.html'
        }
    })
    .controller('miCtrl1', function($scope,){
        $scope.mensaje = 'soy el controlador 1'
        $scope.nombre1= 'Pedro'
        $scope.nombre2= 'Lucia'

        
    })
    .controller('miCtrl2', function($scope,){

        $scope.mensaje = 'soy el controlador 2'
        
    })

