// TODO: Add save/load feature
var kitties = 0; // value user is increasing by clicking
var paws = 0; // number of kitties increased per click
var pawCost = 15; // price per paw
var scratches = 0; // number of +1/sec scratching post items
var scratchCost = 200; // price per scratching post
var scratchInterval = setInterval( scratchIncreaseOnePerSec, 1000 ); // sets scratching post interval one kitty per second
var catnips = 0;
var catnipCost = 500;
var catnipInterval = setInterval( catnipIncreaseOneHundredPerFiveSec, 5000 );
var clickgen = paws + 1; // this displayes the + number above the main kitty clicked

var canAfford = kitties > pawCost;

document.querySelector( "#mainclick" ).addEventListener( "click", // increases kitties per click
    function kittyClick( ){
        document.querySelector( "#numberbox" ).textContent = kitties++;
        if( paws >= 1 ){ // number of kitties clicked increased by number of paws
            kitties = kitties++ + paws;
        }
    } );


document.querySelector( "#buy-paw" ).addEventListener( "click",
    function buyPaw(){
        paws++;
        var nextPawCost = Math.floor( 15 * Math.pow( 1.1, paws ) ); // updates cost of future paw purchase

        if( paws > 0 ){ // this should update the kitty count based on paw price TODO: something seems wrong here kitties are updated based on next paw cost w/o reflecting the current pawcost
            kitties -= nextPawCost;
        }
        else{
            kitties -= pawCost;
        }

        var x = paws + 1;

        document.querySelector( "#paw-count" ).textContent = paws; // updates paw count display
        document.querySelector( "#paw-count2" ).textContent =  "+ " +  x;
        document.querySelector( "#paw-cost" ).textContent = "Cost: " + pawCost;

        if(  paws  > 0 ){
            document.querySelector( "#paw-cost" ).textContent = "Cost: " + nextPawCost; // updates next paw cost display
        }
    }


);

document.querySelector( "#buy-scratch" ).addEventListener( "click",
    function buyScratch(){
        scratches++;
        var nextScratchCost = Math.floor( 50 * Math.pow( 1.3, scratches ) );

        if( scratches > 0 ){
            kitties -= nextScratchCost;
        }
        else{
            kitties -= scratchCost;
        }


        document.querySelector( "#scratch-post-count" ).textContent = "Scratching Posts: " + scratches; // updates total scratching post amount
        document.querySelector( "#scratch-cost" ).textContent = "Cost: " + scratchCost;
        if( scratches > 0 ){
            document.querySelector( "#scratch-cost" ).textContent = "Cost " + nextScratchCost;
            document.getElementById( "scratch-count" ).textContent = "+" + scratches; // updates +scratches beneath picture
        }
    }

);

document.querySelector( "#buy-catnip" ).addEventListener( "click", // catnip button and buy feature
    function buyCatnip(){
        catnips++;
        var nextCatnipCost = Math.floor( 500 * Math.pow( 1.4, catnips ) ); // TODO: this is bugged

        if( catnips > 1 ){
            kitties -= catnipCost; // TODO: Prices not working right
        }
        else{
            kitties -= nextCatnipCost;
        }


        document.querySelector( "#catnip-post-count" ).textContent = "Catnips: " + catnips; // updates total catnip amount
        document.querySelector( "#catnip-cost" ).textContent = "Cost: " + catnipCost;
        if( catnips > 0 ){
            document.querySelector( "#catnip-cost" ).textContent = "Cost " + nextCatnipCost;
            document.getElementById( "catnip-count" ).textContent = "+" + ( 100 * catnips ); // updates how many kitties gained
        }
    }

);


function scratchIncreaseOnePerSec(){ // function for increasing kitties once per second with scratching post
    if( scratches > 0 ){
        document.getElementById( "numberbox" ).textContent = kitties += scratches ; // TODO: find a way to stack scratchingposts
        moveScratch();
    }
}

function catnipIncreaseOneHundredPerFiveSec(){
    if( catnips > 0 ){
        document.getElementById( "numberbox" ).textContent = kitties += ( catnips * 100 );
        moveCatnip();
    }
}


// loading bars
function moveScratch(){
    var elem = document.getElementById( "scratchBar" );
    var width = 10;
    var id = setInterval( frame, 10 );

    function frame(){
        if( width >= 100 ){
            clearInterval( id );
        }
        else{
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = width * 1 + "%";
        }
    }
}

function moveCatnip(){
    var elem = document.getElementById( "catnipBar" ); // catnip load bar TODO: something seems wrong with timing
    var width = 5;
    var id = setInterval( frame, 50 );

    function frame(){
        if( width >= 100 ){
            clearInterval( id );
        }
        else{
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = width * 1 + "%";
        }
    }
}
