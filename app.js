var app = angular.module('TodoApp', []);
app.controller('titleCont',function($scope){
	$scope.title="My Todolist Application";
})

app.controller('todoItems',function($scope){
	$scope.header="Görevler";
	
	// Default görevler listesi
	$scope.tasks=[
		{"name":"Create","isDone":true},
		{"name":"Update","isDone":false},
		{"name":"Delete","isDone":true},
		{"name":"Recover","isDone":false}
	];

	// Yeni görev eklerken push() metodundan yararlanıyoruz
	$scope.newTask=function(task){
		$scope.tasks.push({
			"name":$scope.task, // input'tan gelen model
			"isDone":false // Default
		});
		alert("Görev başarıyla eklendi");
		$scope.task="";
	}

	$scope.DeleteTasks=function(){
		$scope.tasks = $scope.tasks.filter(function(item){	
			return !item.isDone; // Aslında burada false değerleri alarak filtrelemiş olduk
		});
	}

	//Görevler listesindeki eleman sayısı
	$scope.getTotaltask=function(){
		return $scope.tasks.length;
	}
});