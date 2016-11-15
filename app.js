var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider.when("/login", {
		controller: "loginController",
		templateUrl: "login.html"
	});
    $routeProvider.when("/librarianView", {
        controller: "librarianController",
        templateUrl: "librarianView.html"
    });

    $routeProvider.when("/studentView", {
        controller: "studentController",
        templateUrl: "studentView.html"
    });
});

app.service('library',function(){
	return {
		user: "",
		librarian: false,
		books:  [{"Art": [
					{id: 1, title: "Management of Art Galleries", type: "art", presence: 1, borrowedBy: " "},
					{id: 2, title: "Paint the Revolution: Mexican Modernism", type: "art", presence: 1, borrowedBy: " "},
					{id: 3, title: "Monet: The Early Years", type: "art", presence: 1, borrowedBy: " "},
					{id: 4, title: "Abstract Expressionism", type: "art", presence: 1, borrowedBy: " "},
					{id: 5, title: "Beyond Caravaggio", type: "art", presence: 1, borrowedBy: " "},
				]},
				{"Science" : [
					{id: 6, title: "A Brief History ofTime" , type: "science", presence: 1, borrowedBy: " "},
					{id: 7, title: "The Selfish Gene", type: "science", presence: 1, borrowedBy: " "},
					{id: 8, title: "A Short History of Nearly Everything", type: "science", presence: 1, borrowedBy: " "},
					{id: 9, title: "Rise of the Rocket Girls", type: "science", presence: 1, borrowedBy: " "},
					{id: 10, title: "Euclid's Elements", type: "science", presence: 1, borrowedBy: " "},
				]},
				{"Sport": [
					{id: 11, title: "Alone on the Wall", type: "sport", presence: 1, borrowedBy: " "},
					{id: 12, title: "Mountaineering: Freedom of the Hills", type: "sport", presence: 1, borrowedBy: " "},
					{id: 13, title: "Vertical Mind", type: "sport", presence: 1, borrowedBy: " "},
					{id: 14, title: "Girl on the Rocks", type: "sport", presence: 1, borrowedBy: " "},
					{id: 15, title: "Climbing Free", type: "sport", presence: 1, borrowedBy: " "},
				]},
				{"Literature": [
					{id: 16, title: "Pride and Prejudice", type: "literature", presence: 1, borrowedBy: " "},
					{id: 17, title: "Sense and Sensibility", type: "literature", presence: 1, borrowedBy: " "},
					{id: 18, title: "The Wise Man's Fear", type: "literature", presence: 1, borrowedBy: " "},
					{id: 19, title: "1984", type: "literature", presence: 1, borrowedBy: " "},
					{id: 20, title: "Fahrenheit 451", type: "literature", presence: 1, borrowedBy: " "},
				]},
				{"Reference": [
					{id: 1, title: "Reference Book 1", type: "reference", presence: 1, borrowedBy: " "},
					{id: 2, title: "Reference Book 2", type: "reference", presence: 1, borrowedBy: " "},
					{id: 3, title: "Reference Book 3", type: "reference", presence: 1, borrowedBy: " "},
					{id: 4, title: "Reference Book 4", type: "reference", presence: 1, borrowedBy: " "},
					{id: 5, title: "Reference Book 5", type: "reference", presence: 1, borrowedBy: " "},
				]}]
		};

});

app.controller('indexController', ['$scope','library', function($scope,library) {
}]);

app.controller('loginController', ['$scope','$location','library',function($scope,$location,library) {
  $scope.login = function(user){
  	var myName = user.name;
  	var myPass = user.pass;

  	if(myName === "admin" && myPass === "admin"){
  	  	$location.path('/librarianView');
  	} else if(myName.charAt(0) === 'U' || name.charAt == 'u'){
  		$location.path('/studentView');
  	} else {
  		alert("Incorrect username/password");
  	}
  };

}]);

app.controller('librarianController', ['$scope','library', function($scope,library) {
	$scope.name = "librarianView";
	$scope.library = library;
	$scope.populateBooks = function(library){

	}

	$scope.addBook = function(book){
		//book.(title)(shelf)(ordinary)(reference)


	}
}]);

app.controller('studentController', ['$scope','library',function($scope,library) {
	$scope.name = "studentView";
  $scope.address = "Death Star";
	$scope.message2 = "Excellent! Thank you!";
}]);

