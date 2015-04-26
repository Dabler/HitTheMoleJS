/**
 * Created by dabler on 3/27/15.
 */
var seconds = 60;
var countdownTimer = setInterval('secondPassed()', 1000);
var tab;
var lifeTime = 2;
var score = 0;

function init()
{
    tab = [];
    tab[0] = [0,0,0];
    tab[1] = [0,0,0];
    tab[2] = [0,0,0];
}
function game()
{
    init();
    secondPassed();
}

function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    checkTable();
    generateMole();
    increaseTableTime()
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = "Buzz Buzz";
    } else {
        seconds--;
    }
}

function increaseTableTime()
{
    for(x=0;x<3;x++)
        for(y=0;y<3;y++)
        {
            if(tab[x][y] > 0)
                tab[x][y] = tab[x][y] + 1;
            document.getElementById("cell"+x+y).innerHTML = tab[x][y];
        }
}
function checkTable()
{
    for(x=0;x<3;x++)
        for(y=0;y<3;y++)
        {
            if(tab[x][y]>lifeTime)
            {
                hideMole(x,y);
            }
        }
}
function generateMole()
{
    var x = Math.floor((Math.random() * 3));
    var y = Math.floor((Math.random() * 3));
    console.log("Drew numbers are: "+x+" "+y);
    if(tab[x][y]==0) {
        tab[x][y] = tab[x][y] + 1;
        document.getElementById("cell"+x+y).style.backgroundColor = "yellow";
        console.log("Mole added at: "+x+" "+y);
    }
}

function hideMole(x,y)
{
    tab[x][y] = 0;
    document.getElementById("cell"+x+y).style.backgroundColor = "white";
    document.getElementById("cell"+x+y).innerHTML = tab[x][y];
}
function whack(x,y){
    if(tab[x][y]>0)
    {
        hideMole(x,y);
    }
}