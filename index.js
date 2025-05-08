
// the following line of code to get tank ("image") by id
const tank = document.getElementById('tank');

//the following 4 lines about are to get controler bottons by id
//these controler we use them to make the tank gose left right up and down
const rightt = document.getElementById("right");
const leftt = document.getElementById("left");
const topt = document.getElementById("up");
const bottomt = document.getElementById("bottom");
const toggleButton = document.querySelector("#toggleButton");

//the following 4 lines are to make bottoms apply actions
//for example when we click on leftt this will call function "moveleft" and the tank will move to the left
leftt.addEventListener('click', moveleft);
rightt.addEventListener('click', moveright);
topt.addEventListener('click', movetop);
bottomt.addEventListener('click', movebottom);

toggleButton.addEventListener('click', toggle);

//these two variable are to specify the initial position of the tank
//DO NOT change them they should always be (600,300) else when you move the tank it will sudenly appear
//in far way
leftx = 600;
topx = 300;
togglevar = 0;
//the following variable is to specify the initial position of the tank
let checkDirection = 'left';
// the idea of the following function is to let the tank to keep going in specific direction
//and to stop it if needed
let togglefunction;
function toggle() {
    if (togglevar == 0) {
        togglevar = 1;
        if (checkDirection == 'left') {
            togglefunction = setInterval(moveleft, 100);
        } else if (checkDirection == 'right') {
            togglefunction = setInterval(moveright, 100);
        } else if (checkDirection == 'bottom') {
            togglefunction = setInterval(movebottom, 100);
        } else if (checkDirection == 'top'){
            togglefunction = setInterval(movetop, 100);
        }
    } else {
        clearInterval(togglefunction);
        togglevar = 0;
    }
}

//the following function will be called when you click to move the tank to the left 
//also this function rotate the tank to the right position if needed
function moveleft() {
    tank.style.left = leftx + 'px';
    leftx -= 10;
    if (checkDirection != 'left') {
        clearInterval(togglefunction);
        togglevar = 0;
        rotateImageleft();
    }
    if (togglevar != 1){
        toggle();
    }
}

//the following function will be called when you click to move the tank to the right 
//also this function rotate the tank to the right position if needed
function moveright() {
    leftx += 10;
    tank.style.left = leftx + 'px';
    if (checkDirection != 'right') {
        clearInterval(togglefunction);
        togglevar = 0;
        rotateImageright();
    }
    if (togglevar != 1){
        toggle();
    }
}

//the following function will be called when you click to move the tank to the top 
//also this function rotate the tank to the right position if needed
function movetop() {
    topx -= 10;
    tank.style.top = topx + 'px';
    if (checkDirection != 'top') {
        clearInterval(togglefunction);
        togglevar = 0;
        rotateImagetop();
        checkDirection = 'top';
    }
    if (togglevar != 1){
        toggle();
    }
}

//the following function will be called when you click to move the tank to the bottom 
//also this function rotate the tank to the right position if needed
function movebottom() {
    topx += 10;
    tank.style.top = topx + 'px';
    if (checkDirection != 'bottom') {
        clearInterval(togglefunction);
        togglevar = 0;
        rotateImagebottom();
        checkDirection = 'bottom';
    }
    if (togglevar != 1){
        toggle();
    }
}

//this variable is very important it will be used in all of the following rotation methods
//we use it to specify the degree of rotation 
let rotation = 0;


//the following four functions will be called to rotate the tank according to previous direction
function rotateImageleft() {
    const img = document.getElementById('tank.jpg');
    let steps;
    if (checkDirection == 'left') {
        steps = 0; // Number of degrees to rotate
    } else if (checkDirection == 'right') {
        steps = 180; // Number of degrees to rotate
    } else if (checkDirection == 'top') {
        steps = 270; // Number of degrees to rotate
    } else {
        steps = 90; // N   umber of degrees to rotate
    }
    checkDirection = 'left';
    rotation += steps;
    tank.style.transform = `rotate(${rotation}deg)`;
}

function rotateImageright() {
    const img = document.getElementById('tank.jpg');
    let steps;
    if (checkDirection == 'left') {
        steps = 180; // Number of degrees to rotate
    } else if (checkDirection == 'right') {
        steps = 0; // Number of degrees to rotate
    } else if (checkDirection == 'top') {
        steps = 90; // Number of degrees to rotate
    } else {
        steps = 270; // Number of degrees to rotate
    }
    checkDirection = 'right';
    rotation += steps;
    tank.style.transform = `rotate(${rotation}deg)`;
}

function rotateImagetop() {
    const img = document.getElementById('tank.jpg');
    let steps;
    if (checkDirection == 'left') {
        steps = 90; // Number of degrees to rotate
    } else if (checkDirection == 'right') {
        steps = 270; // Number of degrees to rotate
    } else if (checkDirection == 'top') {
        steps = 0; // Number of degrees to rotate
    } else {
        steps = 180; // Number of degrees to rotate
    }
    checkDirection = 'right';
    rotation += steps;
    tank.style.transform = `rotate(${rotation}deg)`;
}

function rotateImagebottom() {
    const img = document.getElementById('tank.jpg');
    let steps;
    if (checkDirection == 'left') {
        steps = 270; // Number of degrees to rotate
    } else if (checkDirection == 'right') {
        steps = 90; // Number of degrees to rotate
    } else if (checkDirection == 'top') {
        steps = 180; // Number of degrees to rotate
    } else {
        steps = 0; // Number of degrees to rotate
    }
    checkDirection = 'right';
    rotation += steps;
    tank.style.transform = `rotate(${rotation}deg)`;
}
//the following variable for the button that let the tank to shoot
const button = document.getElementById('button');
//the following variable is related to the bomb or bulit
const bomb = document.getElementById('bomb');
// when i click on the button to shoot the following line help me to call function bombing
button.addEventListener('click', bombing);
// bombing function let the bulit appear and start moving
function bombing() {
    // i change the id of the bomb to appear
    bomb.id = 'bo'
    //the following two variables let the bomb to appear near the tank (taks the location of the tank) 
    bomb.style.left = leftx + 70 + 'px';
    bomb.style.top = topx + 20 + 'px';
    //the following variables are to save the location of the bomb
    bombx = leftx + 70;
    bomby = topx + 20;
    //the following variable is very important it let us know in which direction the bomb needs to move
    // according to last direction i clicked on
    direction = checkDirection;
    moeving = setInterval(bombIsMoving, 1);
}

//the following line is very important and it will let the bomb to move 
//since it call the function (bombIsMoving) every millisecond and change the position of the bomb
//const moeving = setInterval(bombIsMoving, 1);
//the following function is very important since it decids in which direction will be moved
// also after a specific distance it will remove the bomb
function bombIsMoving() {
    if (direction == 'right') {
        if (bombx >= leftx + 70 + 1000) {
            const bomb = document.getElementById('bo');
            bombx = leftx + 70;
            bomby = topx + 20;
            bomb.id = 'bomb'
            clearInterval(moeving);
        } else {
            bomb.style.left = bombx + 'px';
            bombx += 2;
        }
    } else if (direction == 'left') {
        if (bombx <= leftx - 70 - 1000) {
            const bomb = document.getElementById('bo');
            bombx = leftx + 70;
            bomby = topx + 20;
            bomb.id = 'bomb'
            clearInterval(moeving);
        } else {
            bomb.style.left = bombx + 'px';
            bombx -= 2;
        }
    } else if (direction == 'top') {
        if (bomby >= topx + 1000) {
            const bomb = document.getElementById('bo');
            bombx = leftx + 70;
            bomby = topx + 20;
            bomb.id = 'bomb'
            clearInterval(moeving);
        } else {
            bomb.style.top = bomby + 'px';
            bomby -= 2;
        }
    } else {
        if (bomby >= topx + 1000) {
            const bomb = document.getElementById('bo');
            bombx = leftx + 70;
            bomby = topx + 20;
            bomb.id = 'bomb'
            clearInterval(moeving);
        } else {
            bomb.style.top = bomby + 'px';
            bomby += 2;
        }
    }
    const goal = document.getElementById('goal');
    if (bombx >= 1500 && bombx <= 1550 && bomby >= 500 && bomby <= 550) {
        goal.id = 'goa'
        bomb.id = 'bomb'
    }
}





button.addEventListener('click', createNewBomb);

let myArray = [0];
let j = 1;
 
function getvar(c){
    if (c == 1){
    const NewBomb = document.createElement("div");
    NewBomb.style.width = '10px';
    NewBomb.style.height = '10px';
   
   NewBomb.id = 'c'+myArray.indexOf(myArray.length-1);

   NewBomb.style.backgroundColor = 'red';
   
   NewBomb.style.position = 'absolute';
   NewBomb.style.top = topx + 20 + 'px';
   NewBomb.style.left = leftx + 70 + 'px';

        myArray.push(j);
        j++;
        return NewBomb;
    }else{
        return document.getElementById('c'+myArray[0]);
    }
}

function createNewBomb(){
   const NewBomb = getvar(1);

   document.body.appendChild(NewBomb);
   bombx1 = leftx + 70;
   bomby1 = topx + 20;
   inter = setInterval(bombIsMoving2, 2);
   direction = checkDirection;
}



function bombIsMoving2() {
    if (direction == 'right') {
        if (bombx1 >= leftx + 70 + 1000) {
            alert('done');
            const x = myArray[0];
            myArray.splice(0,1);
            document.body.removeChild(document.getElementById('c'+x));
            clearInterval(inter);
        } else {
            const bulit = getvar(2);
            //alert(bulit.id);
            bulit.style.left = bombx1 + 'px';
            bombx1 += 2;
            //alert(bulit.style.left);
        }
    } else if (direction == 'left') {
        if (bombx <= leftx - 70 - 1000) {
            const bomb = document.getElementById('bo');
            bombx = leftx + 70;
            bomby = topx + 20;
            bomb.id = 'bomb'
            clearInterval(moeving);
        } else {
            bomb.style.left = bombx + 'px';
            bombx -= 2;
        }
    } else if (direction == 'top') {
        if (bomby >= topx + 1000) {
            const bomb = document.getElementById('bo');
            bombx = leftx + 70;
            bomby = topx + 20;
            bomb.id = 'bomb'
            clearInterval(moeving);
        } else {
            bomb.style.top = bomby + 'px';
            bomby -= 2;
        }
    } else {
        if (bomby >= topx + 1000) {
            const bomb = document.getElementById('bo');
            bombx = leftx + 70;
            bomby = topx + 20;
            bomb.id = 'bomb'
            clearInterval(moeving);
        } else {
            bomb.style.top = bomby + 'px';
            bomby += 2;
        }
    }
    const goal = document.getElementById('goal');
    if (bombx >= 1500 && bombx <= 1550 && bomby >= 500 && bomby <= 550) {
        goal.id = 'goa'
        bomb.id = 'bomb'
    }
}
