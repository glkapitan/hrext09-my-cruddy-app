/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

*/
$(document).ready(function() {

  $(".nav-link").click(function(event) {
    event.preventDefault();
    $('#about').show();
   
    $('#about').css("width","300px");
    $('#about').css("padding","10px 20px");
    $('#about').css("border","solid #2E8B57 0.3em");
    $('#okabout').css("width","200px");


  });

  $("#okabout").click(function(event) {
    event.preventDefault();
    $('#about').hide();
  });

  if ( keyExists('Category')!==true){
    var categoryOBject = {
    '1': 'Orchids', 
    '2': 'Ferns',
    '3': 'Aroids',
    '4': 'Violets',
    '5': 'Tropicals',
    '6': 'Begonias',
    '7': 'Cactus',
    '8': 'Succulents',
    '9': 'Hoyas',
    '10': 'Fuchsias'
  };
    localStorage.setItem('Category', JSON.stringify(categoryOBject));
  };



var categoryArray = [];
var categoryObj = {}


    
  /*for ( var i = 0, len = localStorage.length; i < len; ++i ) {
   
     
  var newMyObjectJSON = localStorage.getItem(localStorage.key( i ));
  categoryObj = JSON.parse(newMyObjectJSON);
    categoryArray.push(categoryObj.category );
  }*/
populateDropDown('#myList','Category');



$("#category").keypress(function(event){
  if (event.which===13) {
    var newCategory = $(this).val();
    $("ul").append("<li>" +newCategory+ "</li>")
        }
        event.stopPropagation();
});

$('#container').click(function(event) {
    event.preventDefault();

    if ((event.target.tagName.toLowerCase()) == 'a') {
          var plantInfo = getItem(event.target.text);
         

          populateForm(plantInfo)
     }
  });

$('#addNew').click(function(event) {
    event.preventDefault();
    

 emptyForm();
$(this).prop('disabled', true);

  });


$('#saveChanges').click(function(event) {
    event.preventDefault();


var category = parseInt($('#myList').val()) + 1; 
var categoryObj = JSON.parse(localStorage.getItem('Category'))
category = categoryObj[category]
//console.log(categoryObj)

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
  
    $('#myList').empty();

     populateDropDown('#myList','Category',1);
     $("#myList option:contains(" + category + ")").attr('selected', 'selected');
  

$('#addNew').prop('disabled', false);


  });


$('#delete').click(function(event) {
    event.preventDefault();
    

    var key = $('#name').val();
   if ( keyExists(key)){

    window.localStorage.removeItem (key)
    } else {
     emptyForm();
    }


$('#addNew').prop('disabled', false);
$('#myList').empty();
 populateDropDown('#myList','Category',1);

   
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
  
});


});

var populateDropDown = function(dropDown,localStorageKey,option){


var categoryArray = [];
var categoryObj = {}

 categoryObj = JSON.parse(localStorage.getItem(localStorageKey));


for (var key in categoryObj){
  categoryArray.push(categoryObj[key])
}  
if (option ===1){
  $.each(categoryArray, function(val, text) {
            $(dropDown).append( $('<option></option>').val(val).html(text) )
       });
  }
  else {
 
 $.each(categoryArray, function(val, text) {
            $(dropDown).append( $('<option></option>').val(val).html(text) )
            var $plantName =  $('#category-list').append($('<li class="plant-name">').val(val).html(text));
            $plantName.css("font-weight","Bold");
            $plantName.css("font-size", "14px");
          });
}

};


var getItem = function(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

var keyExists = function(key) {
  var currentValue = getItem(key);
  return currentValue !== null;
}

var emptyForm = function(){
  $('#name').val(""); 
$('#water').val(""); 
$('#light').val(""); 
$('#temperature').val(""); 
$('#fertilizer').val(""); 
$('#notes').val(""); 
}

var populateForm = function(obj) {


//$("#myList").find( obj.category).attr("selected", "selected");
$("#myList option:contains(" + obj.category + ")").attr('selected', 'selected');
          $('#name').val(obj.name); 
          $('#water').val(obj.water); 
          $('#light').val(obj.light); 
          $('#temperature').val(obj.temperature); 
          $('#fertilizer').val(obj.fertilizer); 
          $('#notes').val(obj.notes); 
  }





//localStorage interaction function
//get 
/*

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