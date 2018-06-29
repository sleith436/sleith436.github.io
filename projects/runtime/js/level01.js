var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;
        var swords = [];
        var cannonballs = [];
        
        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sword', x:800, y:groundY- 100},
                {type: 'cannonball',x:1500,y:groundY},
                {type: 'sword', x:2200, y:groundY- 100},
                {type: 'cannonball', x:2800, y:groundY},
                {type: 'cannonball',x:4000,y:groundY},
                {type: 'sword', x:6050, y:groundY- 100},
                {type: 'cannonball',x:6969,y:groundY},
                
                {type: 'sword', x:7800, y:groundY- 100},
                {type: 'cannonball',x:8500,y:groundY},
                {type: 'sword', x:9200, y:groundY- 100},
                {type: 'cannonball', x:9800, y:groundY},
                {type: 'cannonball',x:11000,y:groundY},
                {type: 'sword', x:13050, y:groundY- 100},
                {type: 'cannonball',x:13969,y:groundY},
                
                {type: 'sword', x:14800, y:groundY- 100},
                {type: 'cannonball',x:15500,y:groundY},
                {type: 'sword', x:16200, y:groundY- 100},
                {type: 'cannonball', x:16800, y:groundY},
                {type: 'cannonball',x:18000,y:groundY},
                {type: 'sword', x:20050, y:groundY- 100},
                {type: 'cannonball',x:20969,y:groundY}
                
            ],
            
            enemies: [
                {x:400, y:70},
                {x:1400, y:70},
                {x:2400, y:70},
                
                {x:4800, y:70},
                {x:5800, y:70},
                {x:6800, y:70},
                
                {x:8800, y:70},
                {x:9400, y:70},
                {x:10400, y:70}
            ],
            
            collectables: [
                {type: "booty", x:700, y: 140},
                {type: "booty", x:1400, y: 130},
                {type: "booty", x:2100, y: 150},
                {type: "booty", x:2800, y: 145},
                {type: "booty", x:3500, y: 140},
                
                
                
                {type: "booty", x:4200, y: 140},
                {type: "booty", x:4900, y: 130},
                {type: "booty", x:5600, y: 150},
                {type: "booty", x:6300, y: 145},
                {type: "booty", x:7000, y: 140},
                
                {type: "health", x: 1000, y:130},
                {type: "health", x: 4000, y:130},
                {type: "health", x: 7000, y:130},
                {type: "health", x: 14000, y:130}
            ]
        };
       
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        
        for(var i= 0; i< levelData.gameItems.length; i++ ) {
            var xVal= levelData.gameItems[i].x;
            var yVal= levelData.gameItems[i].y- 20;
            var type = levelData.gameItems[i].type;
            if (type === 'cannonball'){
                createCannonball(xVal, yVal);
           } else {
                createSword(xVal, yVal);   
           }
           
        }
        
        for(var i=0; i<levelData.collectables.length; i++){
             var xVal= levelData.collectables[i].x;
            var yVal= levelData.collectables[i].y;
            var type = levelData.collectables[i].type;
            
            if(type === "booty"){
                createBooty(xVal, yVal);
            } else{
                createHealthPack(xVal, yVal);
            }
        }
        
        for( var i=0; i< levelData.enemies.length; i++) {
            var xVal= levelData.enemies[i].x;
            var yVal= levelData.enemies[i].y;
            
            createEnemy(xVal, yVal);
        }
        
        function createBooty(x, y){
            var booty = game.createGameItem("enemy", 20);
            var coin = draw.bitmap("img/coin.png");
            coin.x = -35;
            coin.y = -25;
            coin.scaleX = 0.3;
            coin.scaleY = 0.3;
            booty.addChild(coin);
            booty.x = x;
            booty.y = groundY-y;
            game.addGameItem(booty);
            booty.velocityX = -1;
            
            booty.onPlayerCollision  = function(){
                game.increaseScore(100);
                booty.flyTo(1200, 20, 1000);
            }
        }
        
        function createHealthPack(x, y){
            var healthPack = game.createGameItem("enemy", 25);
            var battery = draw.bitmap("img/health.png");
            battery.x = -20;
            battery.y = -25;
            battery.scaleX = 0.1;
            battery.scaleY = 0.1;
            healthPack.addChild(battery);
            healthPack.x = x;
            healthPack.y = groundY-y;
            game.addGameItem(healthPack);
            healthPack.velocityX = -1;
            
            healthPack.onPlayerCollision = function(){
                game.changeIntegrity(15);
                healthPack.flyTo(1200, 20, 1000);
            }
        }
       
       function createEnemy(x, y) {
            var enemy = game.createGameItem("enemy", 25);
            var en = draw.bitmap("img/enemy.png");
            en.x = -25;
            en.y = -70;
            en.scaleX = .2;
            en.scaleY = .2;
            enemy.addChild(en);
            enemy.x = x;
            enemy.y = groundY - y;
            game.addGameItem(enemy);
            enemy.velocityX = -1;
            
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-25);
            };
            enemy.onProjectileCollision= function() {
                game.increaseScore(10);
                enemy.shrink();
            };
       }
      
        
        function createCannonball(x,y) {
            var hitZoneSize= 25;
            var damageFromObstacle= 10;
            var myObstacle= game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x= x;
            myObstacle.y= y;
            game.addGameItem(myObstacle);
            var obstacleImage= draw.bitmap("img/cannonball.png");
            obstacleImage.scaleX = .15;
            obstacleImage.scaleY = .15;
            obstacleImage.x= -25;
            obstacleImage.y= -25;
            myObstacle.addChild(obstacleImage);
            cannonballs.push(myObstacle);
        }
        
        function createSword(x,y) {
            var hitZoneSize= 25;
            var damageFromObstacle= 10;
            var myObstacle= game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x= x;
            myObstacle.y= y;
            game.addGameItem(myObstacle);
            var obstacleImage= draw.bitmap("img/sword.png");
            obstacleImage.scaleX = .2;
            obstacleImage.scaleY = .2;
            obstacleImage.x= -35;
            obstacleImage.y= -40;
            myObstacle.addChild(obstacleImage);
            swords.push(myObstacle);
            myObstacle.rotationalVelocity= -10;
        }
        
        
        
    }
    

    };
    
 

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}