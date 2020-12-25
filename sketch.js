var windowW, windowH;
var enterNameInput, playButton;
var playerName;

var player;
var asteriod;

var score = 0;
var scoreIncrease = 0;

var spawnSpeed = 30;

var gameState = 1;

var asteriodImg;

var p;
var pVel;
var force;
var pos;
var fDirection;
var fireColor;
var playerColor;
var touch;
var forcePush;

var bullet;
var playerX, playerY;

var bulletGroup, asteriodGroup;

function preload(){
    asteriodImg = loadImage("tAsteriod.png");
}

function setup(){
    windowW = windowWidth - 15
    windowH = windowHeight - 21

    createCanvas(windowW, windowH);
    
    p=createVector(width/2,height/2)
    pVel=createVector(0,0);
    force=createVector(0,0);
    pos = 10;
    fDirection = 0;

    if(gameState === 1){
        enterNameInput = createInput("Enter Username");
        enterNameInput.center();

        playButton = createButton("Play");
        playButton.position((windowW / 2) - (playButton.width / 2), (windowH / 2) + 20);    
    }

    player = new rocket();

    bulletGroup = new Group();
    asteriodGroup = new Group();
}

function draw(){
    background(60);
    frameRate(200);
    
    player.x = playerX;
    player.y = playerY;

    if(gameState === 1){
        playButton.mousePressed(()=>{
            gameState = 2;
            playerName = enterNameInput.value();
            console.log("gameState: " + gameState);
        });
    }
    if(gameState === 2){
        enterNameInput.hide();
        playButton.hide();
        player.display();
        player.movePlayer();
        if(frameCount % 15 === 0){
            var randY = Math.round(random(-200, 0));
            var randX = Math.round(random(0, windowW));
            var randDirection = Math.round(random(45, 135));
            asteriod = createSprite(randX, randY, 10, 10);
            asteriod.addImage(asteriodImg);
            asteriodImg.resize(100, 70);
            asteriod.setSpeed(5, randDirection);
            if(randDirection > 90){
            asteriod.rotation = randDirection - 30;
            }
            asteriod.life = 400;
            asteriod.addToGroup(asteriodGroup);
            asteriod.setCollider("circle", 0, 0, 40);
        }
        if(keyWentDown("space")){
            bullet = createSprite(p.x, p.y, 10, 10);
            fill(255);
            bullet.setSpeed(5, fDirection);
            bullet.addToGroup(bulletGroup);
            bullet.setCollider("rectangle", 0, 0, 10, 10);
        }
        if(bulletGroup.overlap(asteriodGroup)){
            //asteriodGroup.removeSprites();
        }
        // if(asteriodGroup.overlap(player)){
        //     gameState = 3;
        // }
        drawSprites();
    }
    if(gameState === 3){

    }
}