/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

*/
$(document).ready(function() {

var categoryArray = [];
var categoryObj = {}


    
  /*for ( var i = 0, len = localStorage.length; i < len; ++i ) {
   
     
  var newMyObjectJSON = localStorage.getItem(localStorage.key( i ));
  categoryObj = JSON.parse(newMyObjectJSON);
    categoryArray.push(categoryObj.category );
  }*/
populateDropDown('#myList','Category');



$(".sub-item").click(function(){
  //  $(this).toggleClass("completed");
  alert("test")
});

/*$("span").click(function(event){

    $(this).parent().fadeOut(500, function(){
    $(this).remove()
  })
  event.stopPropagation();
});*/

$("#category").keypress(function(event){
  if (event.which===13) {
    var newCategory = $(this).val();
    $("ul").append("<li>" +newCategory+ "</li>")
        }
        event.stopPropagation();
});


$('#addNew').click(function(event) {
    event.preventDefault();
    

$('#name').val(""); 
$('#water').val(""); 
$('#light').val(""); 
$('#temperature').val(""); 
$('#fertilizer').val(""); 
$('#notes').val(""); 
$(this).prop('disabled', true);


      //current key doesnt exist, do stuff
   
  });


$('#saveChanges').click(function(event) {
    event.preventDefault();
    
var category = $('#myList').val(); 
var name = $('#name').val(); 
var water = $('#water').val();
var light = $('#light').val();
var temperature = $('#temperature').val();
var fertilizer = $('#fertilizer').val();
var notes = $('#notes').val();



 var careInstruction = {
        category: category,
        name: name,
        water: water,
        light: light,
        temperature: temperature,
        fertilizer:fertilizer,
        notes: notes
    };
    var careInstructionJson = JSON.stringify(careInstruction);
    localStorage.setItem(name, careInstructionJson);
    var careInstructionJson = localStorage.getItem(name);
    var newMyObject = JSON.parse(careInstructionJson);
    alert(newMyObject.name + " is " + newMyObject.water + newMyObject.light);


//$('#water').val(""); 
//$('#light').val(""); 
//$('#temperature').val(""); 
//$('#fertilizer').val(""); 
//$('#notes').val(""); 
$('#addNew').prop('disabled', false);


      //current key doesnt exist, do stuff
   
  });


$('#delete').click(function(event) {
    event.preventDefault();
    

//$('#name').val(""); 
//$('#water').val(""); 
//$('#light').val(""); 
//$('#temperature').val(""); 
//$('#fertilizer').val(""); 
//$('#notes').val(""); 
$('#addNew').prop('disabled', false);


      //current key doesnt exist, do stuff
   
  });

$('.plant-name').click(function(event) {
    event.preventDefault();
    $(".sub-name").empty();


    var category = $(this).text()

    var plantArray = []

  for (var i = 0; i < localStorage.length; i++) {

  if (localStorage.key(i) !=='Category'){
    
  var plantObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
  for (var key in plantObj){
      if (plantObj.category === category){
        plantArray.push(plantObj.name)

   }

     }
  }

  }

  
  plantArray = plantArray.filter((v, i, a) => a.indexOf(v) === i); 

for (var i = 0; i<plantArray.length; i++){
  var $subItemPlantName =  $(this).append('<li class="sub-name" style="text-indent: 8px"><a href="#">' + plantArray[i] + '</a></li>');
      
};
  // $subItemPlantName.css("color", "#000000");
   //$subItemPlantName.css("color", "#3CB371");
  // $subItemPlantName.css("position", "absolute");
});
    
//});




});

var populateDropDown = function(dropDown,localStorageKey){
var categoryArray = [];
var categoryObj = {}

 categoryObj = JSON.parse(localStorage.getItem(localStorageKey));

for (var key in categoryObj){
  categoryArray.push(categoryObj[key])
}  
 
 $.each(categoryArray, function(val, text) {
            $(dropDown).append( $('<option></option>').val(val).html(text) )
            var $plantName =  $('#category-list').append($('<li class="plant-name">').val(val).html(text));
            $plantName.css("font-weight","Bold");
            $plantName.css("font-size", "14px");
          });

};





//localStorage interaction function
//get 
/*
var getItem = function(key) {
  return window.localStorage.getItem(key);
}

//create
var createItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//update
var updateItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//delete
var deleteItem = function(key) {
  return window.localStorage.removeItem(key);
}

//clear everything
var clearEverything = function() {
  return window.localStorage.clear();
}

var keyExists = function(key) {
  var currentValue = getItem(key);
  return currentValue !== null;
}


///////////////////////////////////////////
//event handlers for the buttons and ... possibly the inputboxes
  //preventdefault on button clicks
$(document).ready(function() {
  $('#createButton').click(function(event) {
    event.preventDefault();

    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      //current key exists, do something error-handle-y
    } else {
      createItem(currentKey, currentValue);
    }
  });

  $('#updateButton').click(function(event) {
    event.preventDefault();

    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      updateItem(currentKey, currentValue);
    } else {
      //current key doesnt exist, do stuff
    }
  });
});
*/