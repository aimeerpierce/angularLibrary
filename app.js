var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider.when("/index", {
		controller: "indexController",
		templateUrl: "index.html"
	});
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
		totalBooks: 20,
		shelves:  [{ name: "Art",
					books: [
					{id: 1, title: "Management of Art Galleries", type: "art", presence: 1, borrowedBy: "n/a"},
					{id: 2, title: "Paint the Revolution: Mexican Modernism", type: "art", presence: 1, borrowedBy: "n/a"},
					{id: 3, title: "Monet: The Early Years", type: "art", presence: 1, borrowedBy: "n/a"},
					{id: 4, title: "Abstract Expressionism", type: "art", presence: 1, borrowedBy: "n/a"},
					{id: 5, title: "Beyond Caravaggio", type: "art", presence: 1, borrowedBy: "n/a"},
				]},
				{ name: "Science", books:[
					{id: 6, title: "A Brief History ofTime" , type: "science", presence: 1, borrowedBy: "n/a"},
					{id: 7, title: "The Selfish Gene", type: "science", presence: 1, borrowedBy: "n/a"},
					{id: 8, title: "A Short History of Nearly Everything", type: "science", presence: 1, borrowedBy: "n/a"},
					{id: 9, title: "Rise of the Rocket Girls", type: "science", presence: 1, borrowedBy: "n/a"},
					{id: 10, title: "Euclid's Elements", type: "science", presence: 1, borrowedBy: "n/a"},
				]},
				{name: "Sport", books: [
					{id: 11, title: "Alone on the Wall", type: "sport", presence: 1, borrowedBy: "n/a"},
					{id: 12, title: "Mountaineering: Freedom of the Hills", type: "sport", presence: 1, borrowedBy: "n/a"},
					{id: 13, title: "Vertical Mind", type: "sport", presence: 1, borrowedBy: "n/a"},
					{id: 14, title: "Girl on the Rocks", type: "sport", presence: 1, borrowedBy: "n/a"},
					{id: 15, title: "Climbing Free", type: "sport", presence: 1, borrowedBy: "n/a"},
				]},
				{name:"Literature", books: [
					{id: 16, title: "Pride and Prejudice", type: "literature", presence: 1, borrowedBy: "n/a"},
					{id: 17, title: "Sense and Sensibility", type: "literature", presence: 1, borrowedBy: "n/a"},
					{id: 18, title: "The Wise Man's Fear", type: "literature", presence: 1, borrowedBy: "n/a"},
					{id: 19, title: "1984", type: "literature", presence: 1, borrowedBy: "n/a"},
					{id: 20, title: "Fahrenheit 451", type: "literature", presence: 1, borrowedBy: "n/a"},
				]},
				{name:"Reference", books: [
					{id: 1, title: "Reference Book 1", type: "reference", presence: 1, borrowedBy: "n/a"},
					{id: 2, title: "Reference Book 2", type: "reference", presence: 1, borrowedBy: "n/a"},
					{id: 3, title: "Reference Book 3", type: "reference", presence: 1, borrowedBy: "n/a"},
					{id: 4, title: "Reference Book 4", type: "reference", presence: 1, borrowedBy: "n/a"},
					{id: 5, title: "Reference Book 5", type: "reference", presence: 1, borrowedBy: "n/a"},
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
	$scope.displayInfo = function(book){
		var status = " ";
		if(book.presence == 1){
			status = "Present";
		} else {
			status = "Checked Out";
		}
		alert("Title: "+book.title+ "; Type: "+book.type+"; Status: "+status+"; Borrowed By: "+book.borrowedBy+";");
	};

	$scope.addBook = function(book){
		//book.(title)(shelf)(ordinary)(reference)
		var myBook = {
			id: library.totalBooks+1,
			title: book.title,
			type: book.shelf,
			presence: 1,
			borrowedBy: "n/a"
		};
		var row = -1;
		if(book.shelf === "Art"){row = 0;}
		if(book.shelf === "Science"){row = 1;}
		if(book.shelf === "Sport"){row = 2;}
		if(book.shelf === "Literature"){row = 3;}
		if(row != -1){
			library.shelves[row].books.push(myBook);
			library.totalBooks++;
		}
	};
}]);

app.controller('studentController', ['$scope','library',function($scope,library) {
	$scope.name = "studentView";
  $scope.address = "Death Star";
	$scope.message2 = "Excellent! Thank you!";
}]);

