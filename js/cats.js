// different cat style options
var menuDisplayed = false;
var meows = [
    "scooter",
    "olLonesome",
    "mrbimbers" ];

var cats = [
    "grizabela",
    "misterbimbers",
    "wasabi",
    "jeff",
    "scooter"
];

document.getElementById( "mainmenubutton" ).addEventListener( "click",
    function displayMenu(){
        if( document.getElementById( "menudisplay" ).style.display === "none" ){
            document.getElementById( "menudisplay" ).style.display = "block";
            menuDisplayed = true;
        }
        else{
            ( document.getElementById( "menudisplay" ).style.display = "none" );
            menuDisplayed = false;
        }
        if( document.getElementById( "menudisplay" ).style.display === "block" ){
            document.getElementById( "mainmenubutton" ).style.backgroundColor = "green";
        }
        else{
            ( document.getElementById( "mainmenubutton" ).style.backgroundColor = "lightgreen" );
        }
    }

);
