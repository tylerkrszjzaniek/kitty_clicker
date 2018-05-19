// TODO: Add save/load feature
var kitties = 0; // value user is increasing by clicking
var paws = 0; // number of kitties increased per click
var pawCost = 50; // price per paw
var scratches = 0; // number of +1/sec scratching post items
var scratchCost = 200; // price per scratching post
var scratchInterval = setInterval( scratchIncreaseOnePerSec, 1000 ); // sets scratching post interval one kitty per second
var clickgen = paws + 1; // this displayes the + number above the main kitty clicked

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
        var nextPawCost = Math.floor( 50 * Math.pow( 1.1, paws ) ); // updates cost of future paw purchase

        if( paws > 0 ){ // this should update the kitty count based on paw price TODO: something seems wrong here kitties are updated based on next paw cost w/o reflecting the current pawcost
            kitties -= nextPawCost;
        }
        else{
            kitties -= pawCost;
        }
        document.querySelector( "#paw-count" ).textContent = "Paws: " + paws; // updates paw count display
        document.querySelector( "#paw-cost" ).textContent = "Cost: " + pawCost;
        if(  paws  > 0 ){
            document.querySelector( "#paw-cost" ).textContent = "Cost: " + nextPawCost; // updates next paw cost display
        }
    }

);

document.querySelector( "#buy-scratch" ).addEventListener( "click",
    function buyScratch(){
        scratches++;
        var nextScratchCost = Math.floor( 200 * Math.pow( 1.3, scratches ) );

        if( scratches > 0 ){
            kitties -= nextScratchCost;
        }
        else{
            kitties -= scratchCost;
        }


        document.querySelector( "#scratch-count" ).textContent = "Scratching Posts: " + scratches; // updates scratch count display
        document.querySelector( "#scratch-cost" ).textContent = "Cost: " + scratchCost;
        if( scratches > 0 ){
            document.querySelector( "#scratch-cost" ).textContent = "Cost " + nextScratchCost;
        }
    }
);


function scratchIncreaseOnePerSec(){ // function for increasing kitties once per second with scratching post
    if( scratches > 0 ){
        document.getElementById( "numberbox" ).textContent = kitties += scratches ; // TODO: find a way to stack scratchingposts
    }
}


// loading bars
function move(){
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
