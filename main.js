// TODO: Add save/load feature
var kitties = 0; // value user is increasing by clicking
var paws = 0; // number of kitties increased per click
var scratches = 0; // number of +1/sec scratching post items
var scratchInterval = setInterval( scratchIncreaseOnePerSec, 1000 ); // sets scratching post interval one kitty per second
var catnips = 0;
var catnipInterval = setInterval( catnipIncreaseOneHundredPerFiveSec, 5000 );
var yarnballs = 0;
var yarnballInterval = setInterval( yarnballIncreaseTenThousandPerTenSec, 10000 );
var lasers = 0;
var laserInterval = setInterval( laserIncreaseOneHundredThousandPerThirtySec, 30000 );
var mice = 0;
var towers = 0;
var nekos = 0;
var clickgen = paws + 1; // this displayes the + number above the main kitty clicked


document.querySelector( "#mainclick" ).addEventListener( "click", // increases kitties per click
    function kittyClick( ){
        document.querySelector( "#numberbox" ).textContent = kitties++;
        if( paws >= 1 ){ // number of kitties clicked increased by number of paws
            kitties = kitties++ + paws;
        }
        if( mice >= 1 ){
            kitties = kitties++ + paws * ( mice * 100 ) - paws; // increases kitties clicked based on mouse multiplier
        }
    } );


document.querySelector( "#buy-paw" ).addEventListener( "click",
    function buyPaw(){
        var pawCost = Math.floor( 15 * Math.pow( 1.1, paws ) ); // updates cost of future paw purchase

        if( kitties >= pawCost ){ // checks if user can afford to buy a paw
            paws++;
            kitties -= pawCost; // subtracts pawcost from kitty total


            var x = paws + 1;

            document.querySelector( "#paw-count" ).textContent = paws; // updates number of paws in grid
            document.querySelector( "#paw-count2" ).textContent =  "+ " +  x + " kitties per click"; // adjusts number of kitties per click per paw count
            document.querySelector( "#paw-cost" ).textContent = "Cost: " + pawCost; // updates pawcost
            document.querySelector( "#numberbox" ).textContent = kitties; // updates kitty count
        }
        var nextPawCost = Math.floor( 15 * Math.pow( 1.1,paws ) );       // updates cost of next paw

        document.getElementById( "paw-cost" ).textContent = "Cost: " + nextPawCost;  // updates pawcost
        if( mice >= 1 ){ // updates paw total based on mice multiplier
            document.querySelector( "#paw-count2" ).textContent =  "+ " + ( paws * ( mice * 100 ) ) + " kitties per click"; // updates paw value by mouse multiplier
        }
    }

);

document.querySelector( "#buy-scratch" ).addEventListener( "click",
    function buyScratch(){
        var scratchCost = Math.floor( 25 * Math.pow( 1.1, scratches ) ); // cost of scratching post

        if( kitties >= scratchCost ){ // checks if user can afford scratching post
            scratches++;
            kitties -= scratchCost; // subtracts scratching post cost from kitty count


            document.querySelector( "#scratch-post-count" ).textContent = "Scratching Posts: " + scratches; // updates total scratching post amount
            document.querySelector( "#scratch-cost" ).textContent = "Cost: " + scratchCost; // displays scratching post count
            document.getElementById( "scratch-count" ).textContent = "+" + scratches; // updates +scratches beneath picture
            document.querySelector( "#numberbox" ).textContent = kitties; // updates kitty count
        }
        var nextScratchCost = Math.floor( 25 * Math.pow( 1.1, scratches ) ); // updates display for next scratching post cost

        document.querySelector( "#scratch-cost" ).textContent = "Cost: " + nextScratchCost; // displays next cost of scratching post
        if( towers >= 1 ){
            document.querySelector( "#scratch-count" ).textContent =  "+ " + ( scratches * ( towers * 100 ) ); // updates scratching post value by tower multiplier
        }

        if( scratches === 1 ){
            moveScratch(); // activates load bar on first purchase
        }
    }

);

document.querySelector( "#buy-catnip" ).addEventListener( "click", // catnip button and buy feature
    function buyCatnip(){
        var catnipCost = Math.floor( 100 * Math.pow( 1.1, catnips ) ); // catnip cost

        if( kitties >= catnipCost ){ // checks if user can addord catnip
            catnips++;
            kitties -= catnipCost; // subtracts catnip cost from kitty count

            document.querySelector( "#catnip-post-count" ).textContent = "Catnips: " + catnips; // updates total catnip amount
            document.querySelector( "#catnip-cost" ).textContent = "Cost: " + catnipCost; // displays catnip cost
            document.getElementById( "catnip-count" ).textContent = "+ " + ( 100 * catnips ); // updates how many kitties gained per five seconds
            document.querySelector( "#numberbox" ).textContent = kitties; // updates kitty count
        }
        var nextCatnipCost = Math.floor( 100 * Math.pow( 1.1, catnips ) ); // updated next kitty cost

        document.querySelector( "#catnip-cost" ).textContent = "Cost: " + nextCatnipCost; // displays next kitty cost
        if( catnips === 1 ){
            moveCatnip(); // activates load bar on first purchase
        }
    }


);

document.querySelector( "#buy-yarnball" ).addEventListener( "click", // yarnball button and buy feature
    function buyYarnball(){
        var yarnballCost = Math.floor( 1000 * Math.pow( 1.2, yarnballs ) ); // yarnnball cost

        if( kitties >= yarnballCost ){ // checks if user can addord yarnball
            yarnballs++;
            kitties -= yarnballCost; // subtracts yarnball cost from kitty count

            document.querySelector( "#yarnball-count2" ).textContent = "Balls of Yarn: " + yarnballs; // updates total catnip amount
            document.querySelector( "#yarnball-cost" ).textContent = "Cost: " + yarnballCost; // displays catnip cost
            document.getElementById( "yarnball-count" ).textContent = "+ " + ( 5000 * yarnballs ); // updates how many kitties gained per five seconds
            document.querySelector( "#numberbox" ).textContent = kitties; // updates kitty count
        }
        var nextYarnballCost = Math.floor( 1000 * Math.pow( 1.2, yarnballs ) ); // updated next kitty cost

        document.querySelector( "#yarnball-cost" ).textContent = "Cost: " + nextYarnballCost; // displays next kitty cost
        if( yarnballs === 1 ){
            moveYarnball(); // activates load bar on first purchase
        }
    }

);

document.querySelector( "#buy-laser" ).addEventListener( "click", // laser button and buy feature
    function buyLaser(){
        var laserCost = Math.floor( 50000 * Math.pow( 1.4, lasers ) ); // laser cost

        if( kitties >= laserCost ){ // checks if user can addord laser
            lasers++;
            kitties -= laserCost; // subtracts laser cost from kitty count

            document.querySelector( "#laser-count2" ).textContent = "Laser Pointers: " + lasers; // updates total laser amount
            document.querySelector( "#laser-cost" ).textContent = "Cost: " + laserCost; // displays laser cost
            document.getElementById( "laser-count" ).textContent = "+ " + ( 50000 * lasers ); // updates how many kitties gained per five seconds
            document.querySelector( "#numberbox" ).textContent = kitties; // updates kitty count
        }
        var nextLaserCost = Math.floor( 50000 * Math.pow( 1.4, lasers ) ); // updated next kitty cost

        document.querySelector( "#laser-cost" ).textContent = "Cost: " + nextLaserCost; // displays next kitty cost
        if( lasers === 1 ){
            moveLaser(); // activates load bar on first purchase
        }
    }

);

document.querySelector( "#buy-mouse" ).addEventListener( "click", // mouses multiply paw value
    function buyMouse(){
        var mouseCost = Math.floor( 100000 * Math.pow( 1.5, mice ) ); // updates cost of future mouse purchase


        if( kitties >= mouseCost ){ // checks if user can afford to buy a mouse
            mice++;
            kitties -= mouseCost; // subtracts mousecost from kitty total


            document.querySelector( "#mouse-count1" ).textContent = "Rubber Mice: " + mice; // updates number of mice in grid
            document.querySelector( "#mouse-count2" ).textContent =  "x " + ( mice * 100 ) ; // adjusts number of kitties per click per paw count times mouse multiplier
            document.querySelector( "#mouse-cost" ).textContent = "Cost: " + mouseCost; // updates mousecost
            document.querySelector( "#numberbox" ).textContent = kitties; // updates kitty count
        }
        var nextMouseCost = Math.floor( 100000 * Math.pow( 1.5,mice ) );       // updates cost of next mouse

        document.getElementById( "mouse-cost" ).textContent = "Cost: " + nextMouseCost;  // updates mousecast
        if( mice >= 1 ){
            document.querySelector( "#paw-count2" ).textContent =  "+ " + ( paws * ( mice * 100 ) ) + " kitties per click"; // updates paw value by mouse multiplier
        }
    }


);

document.querySelector( "#buy-tower" ).addEventListener( "click", // towers multiply scratching post values by 100
    function buyTower(){
        var towerCost = Math.floor( 500000 * Math.pow( 1.7, towers ) ); // updates cost of future tower purchase


        if( kitties >= towerCost ){ // checks if user can afford to buy a tower
            towers++;
            kitties -= towerCost; // subtracts towercost from kitty total


            document.querySelector( "#tower-count1" ).textContent = "Kitty Towers: " + towers; // updates number of towers in grid
            document.querySelector( "#tower-count2" ).textContent =  "x " + towers * 100; // adjusts number of scratching post value times mouse multiplier
            document.querySelector( "#tower-cost" ).textContent = "Cost: " + towerCost; // updates towercost
            document.querySelector( "#numberbox" ).textContent = kitties; // updates kitty count
        }
        var nextTowerCost = Math.floor( 500000 * Math.pow( 1.7, towers ) );       // updates cost of next tower

        document.getElementById( "tower-cost" ).textContent = "Cost: " + nextTowerCost;  // updates towercost
        if( towers >= 1 ){
            document.querySelector( "#scratch-count" ).textContent =  "+ " + ( scratches * ( towers * 100 ) ); // updates scratching post value by tower multiplier
        }
    }


);

document.querySelector( "#buy-neko" ).addEventListener( "click", // multiplies total values of each button
    function buyNeko(){
        var nekoCost = Math.floor( 10000000 * Math.pow( 3, nekos ) ); // updates cost of future neko purchase


        if( kitties >= nekoCost ){ // checks if user can afford to buy a neko
            nekos++;
            kitties -= nekoCost; // subtracts nekocost from kitty total


            document.querySelector( "#neko-count1" ).textContent = "Lucky Nekos: " + nekos; // updates number of nekos in grid
            document.querySelector( "#neko-count2" ).textContent =  "x " + ( nekos + 1 ); // adjusts number of neko multiplier
            document.querySelector( "#neko-cost" ).textContent = "Cost: " + nekoCost; // updates nekocost
            document.querySelector( "#numberbox" ).textContent = kitties; // updates kitty count
        }
        var nextNekoCost = Math.floor( 10000000 * Math.pow( 3, nekos ) );       // updates cost of next neko

        document.getElementById( "neko-cost" ).textContent = "Cost: " + nextNekoCost;  // updates nekocost


        if( nekos >= 1 ){ // multiplied values based on nekos starting with x2
            paws *= 2 + ( nekos - 1 );
            document.querySelector( "#paw-count" ).textContent = paws;
            document.querySelector( "#paw-count2" ).textContent =  "+ " +  paws + " kitties per click";

            scratches *= 2 + ( nekos - 1 );
            document.querySelector( "#scratch-post-count" ).textContent = "Scratching Posts: " + scratches;
            document.getElementById( "scratch-count" ).textContent = "+" + scratches;

            catnips *= 2 + ( nekos - 1 );
            document.querySelector( "#catnip-post-count" ).textContent = "Catnips: " + catnips;
            document.getElementById( "catnip-count" ).textContent = "+ " + ( 100 * catnips );

            yarnballs *= 2 + ( nekos - 1 );
            document.querySelector( "#yarnball-count2" ).textContent = "Balls of Yarn: " + yarnballs;
            document.getElementById( "yarnball-count" ).textContent = "+ " + ( 5000 * yarnballs );

            lasers *= 2 + ( nekos - 1 );
            document.querySelector( "#laser-count2" ).textContent = "Laser Pointers: " + lasers;
            document.getElementById( "laser-count" ).textContent = "+ " + ( 50000 * lasers );

            mice *= 2 + ( nekos - 1 );
            document.querySelector( "#mouse-count1" ).textContent = "Rubber Mice: " + mice;
            document.querySelector( "#paw-count2" ).textContent =  "+ " + ( paws * ( mice * 10 ) ) + " kitties per click";

            towers *= 2 + ( nekos - 1 );
            document.querySelector( "#tower-count1" ).textContent = "Kitty Towers: " + towers;
            document.querySelector( "#tower-count2" ).textContent =  "x " + towers * 100;
        }
    }
);

function scratchIncreaseOnePerSec(){ // function for increasing kitties once per second with scratching post - interval is displayed at top
    if( scratches > 0 ){
        document.getElementById( "numberbox" ).textContent = kitties += scratches ; // 1 kitty per sec
        moveScratch(); // loading bar
    }
    if( towers > 0 ){
        document.getElementById( "numberbox" ).textContent = kitties += scratches * ( 100 * towers ) - scratches;
    }
}

function catnipIncreaseOneHundredPerFiveSec(){ // function for increasing kitties every five seconds - interval is displayed at top
    if( catnips > 0 ){
        document.getElementById( "numberbox" ).textContent = kitties += ( catnips * 100 ); // 100 kitties * catnips per 5 seconds
        moveCatnip(); // loading bar
    }
}

function yarnballIncreaseTenThousandPerTenSec(){ // function for increasing kitties every 10 seconds - interval is displayed at yop
    if( yarnballs > 0 ){
        document.getElementById( "numberbox" ).textContent = kitties += ( yarnballs * 5000 ); // 5000 kitties * yarnballs every 10 seconds
        moveYarnball(); // loading bar
    }
}

function laserIncreaseOneHundredThousandPerThirtySec(){
    if( lasers > 0 ){
        document.getElementById( "numberbox" ).textContent = kitties += ( lasers * 50000 ); // 50000 kitties * lasers per 30 seconds
        moveLaser(); // loading bar
    }
}


// loading bars
function moveScratch(){ // scratching post loading bar
    var elem = document.getElementById( "scratchBar" );
    var width = 1;
    var id = setInterval( frame, 10 ); // one second timer

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

function moveCatnip(){ // catnip loading bar
    var elem = document.getElementById( "catnipBar" ); // catnip load bar
    var width = 1; // set to five seconds
    var id = setInterval( frame, 50 ); // five second timer

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

function moveYarnball(){
    var elem = document.getElementById( "yarnballBar" ); // yarnball move bar
    var width = 1; // set to ten seconds
    var id = setInterval( frame, 100 ); // ten second timer

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

function moveLaser(){
    var elem = document.getElementById( "laserBar" ); // laser move bar
    var width = 1; // set to thirty seconds
    var id = setInterval( frame, 300 ); // thirty second timer

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
