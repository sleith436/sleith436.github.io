var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        var floorShip;
        var deck;
        var portHole;
        
        var ourBoat; //boat with cameo on it :-)
        var moon;
        var boats = [];
        var stars= [];
        // Add any variables that will be used by render AND update here:
        
        // add objects for display in background
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            floorShip= draw.rect(canvasWidth, canvasHeight, 'Sienna', 'Sienna');
            var backgroundFill = draw.rect(canvasWidth,groundY,'#050C30'); 
            background.addChild(floorShip);
            background.addChild(backgroundFill);
            
            
            for(var i=0; i< 5; i++){
                var deckHeight= 15;
                
                deck= draw.rect(canvasWidth, deckHeight, "#491c02", "#491c02");
                deck.y= groundY+ deckHeight+ (i*75);
                background.addChild(deck);
            }
            
            portHole= draw.circle(69, "#7fb5c1", "#776131", 3);
            portHole.x = 800;
            portHole.y = groundY + 200; 
            background.addChild(portHole);
            
            // TODO: 3 - Add a moon and starfield
            for(var i=0; i<10; i++){
                var star = draw.polyStar(5, 5, 5, 72, '#FFF', '#FFF', 'thin', 200, 100);
                star.x = Math.floor(Math.random()*(canvasWidth-10));
                star.y = Math.floor(Math.random()*(groundY-200));
                stars.push(star);
                background.addChild(star);
            }
            moon = draw.bitmap("img/moon.png");
            moon.x = 1000;
            moon.y = 25;
            moon.scaleX = 0.5;
            moon.scaleY = 0.5;
            background.addChild(moon);
            
            ourBoat = draw.bitmap("img/cameo.png");
            ourBoat.x = 1000;
            ourBoat.y = 40;
            ourBoat.scaleX= 0.3;
            ourBoat.scaleY= 0.3;
            background.addChild(ourBoat);
            
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for(var i=0; i<2; i++){
                var boat=draw.bitmap('img/boat.png');
                boat.x= 500 * i;
                boat.y= Math.floor((Math.random()*(groundY- 100))-150);
                background.addChild(boat);
                boats.push(boat);

            }

        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            // -= 0.75 might work better 
            moon.x -= 0.05;
            if(moon.x <= -moon.radius){
                moon.x= canvasWidth;
            }
            portHole.x -= 0.9;
            if(portHole.x <= -portHole.radius){
                portHole.x= canvasWidth;
            }
            
            // TODO 5: Part 2 - Parallax
            ourBoat.x -= 0.2;
            
            if(ourBoat.x <= -300){
                ourBoat.x = canvasWidth;
            }
                
            for(var i=0; i<boats.length; i++){
                boats[i].x -= 0.2;
                
                if(boats[i].x <= -200) {
                    boats[i].x= canvasWidth;
                } 
                
            }
            
            for( var i=0; i< stars.length; i++){
                stars[i].x -= 0.05;
                if( stars[i].x <= -20) {
                    stars[i].x = canvasWidth;
                }
            }
            
            
        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
