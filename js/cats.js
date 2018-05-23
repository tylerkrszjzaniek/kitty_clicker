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
var displayClicks = 1;
var clickCount = 0;
var achievementUnlocked = false;

document.getElementById( "mainclick" ).addEventListener( "click",
    function clickCounter(){
        clickCount++;
    }
);

document.getElementById( "mainclick" ).addEventListener( "click",
    function clickKittyDisplayChange(){
        displayClicks++;

        if( displayClicks % 2 === 0 ){
            document.getElementById( "mainclick" ).src = "assets/grizabelaclick.jpg";
            document.getElementById( "mainclick" ).style.marginTop = "-2%";
        }
        else{
            document.getElementById( "mainclick" ).src = "assets/grizabela.jpg";
            document.getElementById( "mainclick" ).style.marginTop = "0%";
        }
    }
);

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
