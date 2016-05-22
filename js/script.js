var x = "Muhammad";
status = 0;
$(document).ready(function(){
    $("#welcome").html("Welcome, " + x + "!");
    $("#profile").hide();
    $("#meals").hide();
    $("#carbon").hide();
    $("#new").hide();

});

function profile(){
    $("#home").fadeOut();
    $("#profile").fadeIn();
    $("#add-img").attr("src", "css/img/arrow.png");
    status = 1;
}
function meals(){
    $("#home").fadeOut();
    $("#meals").fadeIn();
    $("#add-img").attr("src", "css/img/arrow.png");
    status = 1;
}
function carbon(){
    $("#home").fadeOut();
    $("#carbon").fadeIn();
    $("#add-img").attr("src", "css/img/arrow.png");
    status = 1;
}
function add(){
    if (status == 0){
        $("#home").fadeOut();
        $("#new").fadeIn();
        $("#list").fadeIn();
        $("#add-img").attr("src", "css/img/arrow.png");
        status = 1;
    }
    else if (status == 2){
        $("#list").html("");
        $("#home").fadeIn();
        $("#new").fadeOut();
        total += lastMeal;
        $("#total").html(total + " grams");
        $("#lastM").html(lastMeal + " grams");
        $("#add-img").attr("src", "css/img/plus.png");

        lastMeal = 0;
        status = 0;
    }
    else{
        $("#home").fadeIn();
        $("#profile").fadeOut();
        $("#meals").fadeOut();
        $("#carbon").fadeOut();
        $("#new").fadeOut();
        $("#add-img").attr("src", "css/img/plus.png");
        status = 0;
    }
}
counter = 0;
total = 0;
lastMeal = 0;
function addToList(){
    //.hide().fadeIn();
    food = $("#food").val();
    console.log(food);
    $("#food").val("");
    var imageId = "img" + counter;
    console.log(imageId);
    var code = '<div class="col-sm-4"><img id="'+imageId+'" class="img-responsive" src="css/img/' + food + '.jpg" /></div>';
    console.log(code);
    $("#list").append(code);
    $("#"+imageId).hide().fadeIn();
    lastMeal += checkFood();
    console.log(lastMeal);
    counter++;
    status = 2;
}

function checkFood(){
    var cal;
    switch(food){
    	case "Milk":
    	     cal = 18500;
    	     break;
    	case "Orange":
    	     cal = 190;
    	     break;
    	case "Apple":
    	     cal = 190;
    	     break;
    	case "Soy":
    	     cal = 990;
    	     break;
    	case "Grape":
    	     cal = 500;
    	     break;
    	case "Beef":
    	     cal = 27000;
    	     break;
    	case "Sausage":
    	     cal = 8000;
    	     break;
    	case "Pork":
    	     cal = 12100;
    	     break;
    	case "Ham":
    	     cal = 4800;
    	     break;
    	case "Poultry":
    	     cal = 3500;
    	     break;
    	case "Butter":
    	     cal = 23800;
    	     break;
    	case "Cheese":
    	     cal = 13500;
    	     break;
    	case "Cream":
    	     cal = 7600;
    	     break;
    	case "Egg":
    	     cal = 1950;
    	     break;
    	case "Quard":
    	     cal = 1950;
    	     break;
    	case "Curd":
    	     cal = 1950;
    	     break;
    	case "Margarine":
    	     cal = 1350;
    	     break;
    	case "Yogurt":
    	     cal = 1250;
    	     break;
    	case "Strawberry":
    	     cal = 300;
    	     break;
    	case "Bread":
    	     cal = 750;
    	     break;
    	case "Lamb":
    	     cal = 39200;
    	     break;
    	case "Turkey":
    	     cal = 10900;
    	     break;
    	case "Chicken":
    	     cal = 6900;
    	     break;
    	case "Tuna":
    	     cal = 6100;
    	     break;
    	case "Potato":
    	     cal = 2900;
    	     break;
    	case "Rice":
    	     cal = 2700;
    	     break;
    	case "Nut":
    	     cal = 2300;
    	     break;
    	case "Tofu":
    	     cal = 2000;
    	     break;
    	case "Lettuce":
    	     cal = 2000;
    	     break;
    	case "Lentil":
    	     cal = 900;
    	     break;
    	case "Banana":
    	     cal = 480;
    	     break;
    	case "Latte":
    	     cal = 340;
    	     break;
    	case "Tea":
    	     cal = 60;
    	     break;
    	case "Coffee":
    	     cal = 60;
    	     break;
    	case "Beer":
    	     cal = 900;
    	     break;
    	case "Salmon":
    	     cal = 11900;
    	     break;
    	case "Yogurt":
    	     cal = 2200;
    	     break;
    	case "Broccoli":
    	     cal = 2000;
    	     break;
    	case "Beans":
    	     cal = 2000;
    	     break;
    	case "Tomatoes":
    	     cal = 1100;
    	     break;
    	case "Cereal":
    	     cal = 3000;
    	     break;
    	case "Oil":
    	     cal = 2000;
    	     break;
    	case "Sugar":
    	     cal = 2000;
    	     break;
    	case "Ketchup":
    	     cal = 2000;
    	     break;
    	case "Chips":
    	     cal = 2200;
    	     break;
    	 default:
    	 	cal = 0
    }
    console.log(cal);
    return cal/5;
}
