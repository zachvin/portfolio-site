// Zach Vincent
// Lemon Clicker v1.0

var lemons = 0.0;
var lps = 0;


// all buildings
const buildings = {
    'hands':    {num:0, lps:0.1, price:1},
    'juicers':  {num:0, lps:2, price:1},
    'stands':   {num:0, lps:10, price:1},
    'trucks':   {num:0, lps:100, price:1},
    'farms':    {num:0, lps:500, price:1}
}

// create building html elements
for (const building in buildings) {
    $('.buildings').append('<div class="building" id="' + building + '"><p>' + building.charAt(0).toUpperCase() + building.slice(1) + '</p><p><span class="num-' + building + '">0</span> owned</p></div>');
}

// add to total number of lemons based on lps
// runs every 0.1 seconds
function calcLemons() {
    calcLPS();

    lemons += (lps / 10);
    $('.num-lemons').text(lemons.toFixed(1));
}

var lps_id = setInterval(calcLemons, 100);

// calculates lps based on lps of each building and number of
// buildings owned
function calcLPS() {
    lps = 0;
    for (const building in buildings) {
        lps += (buildings[building].lps * buildings[building].num);
    }
    $('.lps').text(lps.toFixed(1));
}


// +1 lemon per click
$('#lemon').on('click', function() {
    lemons++;
    $('.num-lemons').text(lemons.toFixed(1));
});

// buy a building
$('.building').on('click', function() {
    const building =  buildings[$(this).attr('id')];

    if (lemons < building.price) {
        console.log('Not enough lemons to buy ' + $(this).attr('id') + '!');
        return;
    }

    building.num++;
    lemons -= building.price;
    $('.num-' + $(this).attr('id')).text(building.num);
});

// stop game
$('#stop').click(function() {
    console.log('Finished');
    clearInterval(lps_id);
});