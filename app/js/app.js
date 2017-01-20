var app = angular.module('TranslateApp', ['ngRoute', 'ngSanitize', 'pascalprecht.translate']);

app.config(['$routeProvider', '$translateProvider', function ($routeProvider, $translateProvider) {
	$routeProvider.when('/home',
		{
			controller: 'HomeCtrl',
			templateUrl: 'templates/home.html'
		})
		.when('/about/',
		{
			controller: 'AboutCtrl',
			templateUrl: 'templates/about.html'
		})
		.when('/contact/',
		{
			controller: 'ContactCtrl',
			templateUrl: 'templates/contact.html'
		})
		.otherwise({ redirectTo: '/home' });
    
        $translateProvider.preferredLanguage(navigator.language);
        $translateProvider.registerAvailableLanguageKeys(['en', 'fr', 'cn', 'bn'],{
            'en-*': 'en',
            'fr-*': 'fr',
            'cn-*': 'cn',
            'bn-*': 'bn'
        });

        $translateProvider.useStaticFilesLoader({
            prefix: 'data/',
            suffix: '.json'
        });

        $translateProvider.useSanitizeValueStrategy(null);
}]);

app.run(['$rootScope', function($rootScope){
    $rootScope.$on('$translateChangeSuccess', function(){
        console.log('Selected language applied');
    });
    
    $rootScope.$on('$translateChangeError', function(){
        alert('Error, selected language was not applied');
    });
}]);

app.controller('NavbarController', ['$scope', '$location', '$translate', function ($scope, $location, $translate) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
    
    //http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
    $scope.getParameterByName = function(name, url){
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    
    $translate.use($scope.getParameterByName('locale'));
    
    $scope.changeLanguage = function(lang){
        $translate.use(lang);
    }
}]);


app.controller('HomeCtrl', ['$scope', '$translate', function($scope, $translate) {
		
        
}]);

app.controller('AboutCtrl', ['$scope', '$translate', function($scope, $translate) {
		
        
}]);

app.controller('ContactCtrl', ['$scope','$translate', function($scope, $translate) {

}]);
