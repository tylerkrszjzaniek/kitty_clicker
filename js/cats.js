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
var previewImageValue = 0;
var previewBgValue = 0;
var wasabiUnlock = false;
var kittyNeutralValue = [
    "assets/grizabela.png",
    "assets/misterbimbers.png",
    "assets/wasabi.png"
];

var kittyClickValue = [
    "assets/grizabelaclick.png",
    "assets/misterbimbersclick.png",
    "assets/wasabiclick.png"
];

var kittyPreviewImages = [
    "assets/grizabelapreview.jpg",
    "assets/misterbimberspreview.jpg",
    "assets/wasabipreview.jpg"
];

var backgroundPreviewImages = [
    "assets/bgpreview.jpg",
    "assets/spacepreview.jpg",
    "assets/grammpreview.jpg",
    "assets/cuttingboardpreview.jpg"
];

var backgroundImages = [
    "assets/spacebg.jpg",
    "assets/grammaslap.jpg",
    "assets/cuttingboard.jpg"
];

var achievementText = [
    "Costumes and backgrounds available in menu!"
];

document.getElementById( "mainclick" ).addEventListener( "click",
    function clickCounter(){
        clickCount++;
        if( clickCount >= 1 ){
            achievementUnlocked = true;
        }
        else{
            achievementUnlocked = false;
        }
        if( clickCount === 1 ){
            document.getElementById( "achievement-get" ).style.display = "block";
            document.getElementById( "achievement-subtext" ).textContent = achievementText[0];
            setTimeout( function achievementTimeout(){
                document.getElementById( "achievement-get" ).style.display = "none";
                document.getElementById( "achievement-subtext" ).textContent = achievementText[0];
                document.getElementById( "achievement-subtext" ).style.display = "none";
            }, 5000 );
        }
    }
);

document.getElementById( "mainclick" ).addEventListener( "click",
    function clickKittyDisplayChange(){
        displayClicks++;

        if( displayClicks % 2 === 0 ){
            document.getElementById( "mainclick" ).src = kittyClickValue[previewImageValue];
            document.getElementById( "mainclick" ).style.marginTop = "-2%";
        }
        else{
            document.getElementById( "mainclick" ).src = kittyNeutralValue[previewImageValue];
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


document.getElementById( "exitbutton" ).addEventListener( "click",
    function closeMenu(){
        document.getElementById( "menudisplay" ).style.display = "none";
        document.getElementById( "mainmenubutton" ).style.backgroundColor = "lightgreen";
    }
);
document.getElementById( "rightarrow" ).addEventListener( "click",
    function changeCatPreviewRight(){
        previewImageValue++;
        if( achievementUnlocked === true && previewImageValue < 3 ){
            document.getElementById( "catpreview" ).src = kittyPreviewImages[previewImageValue];
        }
        else{
            ( previewImageValue-- );
        }
    }
);

document.getElementById( "leftarrow" ).addEventListener( "click",
    function changeCatPreviewLeft(){
        if( achievementUnlocked === true && previewImageValue > 0 ){
            previewImageValue--;
            document.getElementById( "catpreview" ).src = kittyPreviewImages[previewImageValue];
        }
        else{
            ( previewImageValue++ );
        }
    }
);


// background selectors
document.getElementById( "rightarrowbg" ).addEventListener( "click",
    function changeBgRight(){
        previewBgValue++;
        if( achievementUnlocked === true && previewBgValue < 4 ){
            document.getElementById( "bgpreview" ).src = backgroundPreviewImages[previewBgValue];
            document.querySelector( "body" ).style.backgroundImage = "url(" + backgroundImages[previewBgValue - 1] + ")";
        }
        else{
            ( previewBgValue-- );
        }
        if( previewBgValue === 1 ){
            document.getElementById( "titlebox" ).style.color = "white";
        }
        else{
            document.getElementById( "titlebox" ).style.color = "black";
        }
    }
);

document.getElementById( "leftarrowbg" ).addEventListener( "click",
    function changeBgLeft(){
        if( achievementUnlocked === true && previewBgValue > 0 ){
            previewBgValue--;
            document.getElementById( "bgpreview" ).src = backgroundPreviewImages[previewBgValue];
            document.querySelector( "body" ).style.backgroundImage = "url(" + backgroundImages[previewBgValue - 1] + ")";
        }
        else{
            ( previewBgValue++ );
        }
        if( previewBgValue === 1 ){
            document.getElementById( "titlebox" ).style.color = "white";
        }
        else{
            document.getElementById( "titlebox" ).style.color = "black";
        }
    }

);


// hover functions
document.getElementById( "rightarrow" ).addEventListener( "mouseenter",
    function arrowHover(){
        document.getElementById( "rightarrow" ).src = "/assets/rightarrowhover.png";


        setTimeout( function arrowReturn(){
            document.getElementById( "rightarrow" ).src = "/assets/rightarrow.png";
        }, 600 );
    }
);

document.getElementById( "leftarrow" ).addEventListener( "mouseenter",
    function arrowHover(){
        document.getElementById( "leftarrow" ).src = "/assets/rightarrowhover.png";


        setTimeout( function arrowReturn(){
            document.getElementById( "leftarrow" ).src = "/assets/rightarrow.png";
        }, 600 );
    }
);

document.getElementById( "rightarrowbg" ).addEventListener( "mouseenter",
    function arrowHover(){
        document.getElementById( "rightarrowbg" ).src = "/assets/rightarrowhover.png";


        setTimeout( function arrowReturn(){
            document.getElementById( "rightarrowbg" ).src = "/assets/rightarrow.png";
        }, 600 );
    }
);

document.getElementById( "leftarrowbg" ).addEventListener( "mouseenter",
    function arrowHover(){
        document.getElementById( "leftarrowbg" ).src = "/assets/rightarrowhover.png";


        setTimeout( function arrowReturn(){
            document.getElementById( "leftarrowbg" ).src = "/assets/rightarrow.png";
        }, 600 );
    }
);
