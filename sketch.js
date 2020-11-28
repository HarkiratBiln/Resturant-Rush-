//Creating the Variables and Game States
var burgerIMG, hotdogIMG, noodlesIMG, friesIMG;
var burger, hotdog, noodles, fries;
var bowlIMG, hotdogBunsIMG, burgerBunsIMG, sausagesIMG, meatpattieIMG, tomatoIMG, lettuceIMG, cheeseImg, plainNoodlesIMG;
var bowl, hotdogBuns, burgerBuns, sausages, meatpattie, tomato, lettuce, cheese, plainNoodles;
var ingredientsIMG, foodIMG, ingredients, food;
var customer1, customer2, customer3, customer4;
var custIMG1,custIMG2,custIMG3,custIMG4;
var backgroundImg;
var coin, coinIMG;

var ingredientsGroup, custGroup, foodGroup;

var toggleSceneButton;
gameState = "kitchen";


function preload(){
  //getScene();
  backgroundImg = loadImage("images/kitchen.jpg");

  //Coin Image
  coinIMG = loadImage("images/coin.png");

  //Customer Images
  custIMG1 = loadImage("images/man.png");
  custIMG2 = loadImage("images/man2.png");
  custIMG3 = loadImage("images/women.png");
  custIMG4 = loadImage("images/girl.png");

  //The Items on Menu
  burgerIMG = loadImage("images/burger.png");
  hotdogIMG = loadImage("images/hotdog.png");
  noodlesIMG = loadImage("images/noodles.png");
  friesIMG = loadImage("images/fries.png");

  //Ingredient Images
  bowlIMG = loadImage("images/bowl.png");
  hotdogBunsIMG = loadImage("images/hotdog_buns.png");
  burgerBunsIMG = loadImage("images/burger_buns.png");
  sausagesIMG = loadImage("images/sausages.png");
  meatpattieIMG = loadImage("images/meatpattie.png");
  tomatoIMG = loadImage("images/tomato.png");
  lettuceIMG = loadImage("images/lettuce.png");
  cheeseImg = loadImage("images/cheese.png");
  plainNoodlesIMG = loadImage("images/plain_noodles.png");

  ingredientsIMG = loadImage("images/ingredients.png");
  
}



function setup() {
  createCanvas(windowWidth, windowHeight);

  foodGroup = new Group();
  ingredientsGroup = new Group();
  custGroup = new Group();

  //Creating the Sprites for Dishes
  burger = createSprite();
  burger.addImage(burgerIMG);
  hotdog = createSprite();
  hotdog.addImage(hotdogIMG);
  fries = createSprite();
  fries.addImage(friesIMG)
  noodles = createSprite();
  noodles.addImage(noodlesIMG);


  //Creating the Sprites for Ingredients
  bowl = createSprite(width/2-700,height/2+90);
  bowl.addImage(bowlIMG);
  bowl.scale = 1.7;
  tomato = createSprite(width/2+700,height/2+100);
  tomato.scale = 0.3;
  tomato.addImage(tomatoIMG);
  sausages = createSprite(width/2+500,height/2+125);
  sausages.addImage(sausagesIMG);
  cheese = createSprite(width/2+300,height/2+75);
  cheese.addImage(cheeseImg);
  lettuce = createSprite(width/2+450,height/2+80);
  lettuce.addImage(lettuceIMG);
  meatpattie = createSprite(width/2+300,height/2+20);
  meatpattie.addImage(meatpattieIMG);
  burgerBuns = createSprite(width/2-500,height/2+100);
  burgerBuns.addImage(burgerBunsIMG);
  hotdogBuns = createSprite(width/2+10,height/2-10);
  hotdogBuns.addImage(hotdogBunsIMG);
  /*plainNoodles = createSprite(width/2,height/2);
  plainNoodles.addImage(plainNoodlesIMG);

  //Creating Sprites to Misc. Objects
  ingredients = createSprite(width/2,height/2);
  ingredients.addImage(ingredientsIMG);

  coin = createSprite();
  coin.addImage(coinIMG);
*/


  //Adding the Ingredients into a Group
  ingredientsGroup.add(tomato);
  ingredientsGroup.add(sausages);
  ingredientsGroup.add(cheese);
  ingredientsGroup.add(lettuce);
  ingredientsGroup.add(meatpattie);
  ingredientsGroup.add(burgerBuns);
  ingredientsGroup.add(hotdogBuns);
  ingredientsGroup.add(bowl);
  ingredientsGroup.add(plainNoodles);
  

  //Creating the Sprites for Customers
  customer1 = createSprite(width/2,height/2);
  customer1.addImage(custIMG1);
  customer2 = createSprite(width/2,height/2);
  customer2.addImage(custIMG2);
  customer3 = createSprite(width/2,height/2);
  customer3.addImage(custIMG3);
  customer4 = createSprite(width/2,height/2);
  customer4.addImage(custIMG4);


  //Adding the Customers into a Group
  custGroup.add(customer1);
  custGroup.add(customer2);
  custGroup.add(customer3);
  custGroup.add(customer4);
  

  //Creating a Stock
  var stock = {
    hotdogBunsCount : 10,
    burgerBunsCount : 10,
    sausagesCount : 10,
    lettuceCount : 10,
    cheeseCount : 10,
    meatpattieCount : 10,
    tomatoCount : 10,
    noodlesCount : 10,
    friesCount : 10,
  };


  toggleSceneButton = createSprite(width-100,height-100,50,50);

}


function draw() {
  background(backgroundImg);
  drawSprites();
  if(gameState === "kitchen") {
    ingredientsGroup.setVisibleEach(true);
    custGroup.setVisibleEach(false);


    if(mousePressedOver(tomato)){
      stock.tomatoCount -=1;
    }

    if(mousePressedOver(sausages)){
      stock.tomatoCount -=1;
    }

    if(mousePressedOver(cheese)){
      stock.tomatoCount -=1;
    }

    if(mousePressedOver(lettuce)){
      stock.tomatoCount -=1;
    }

    if(mousePressedOver(meatpattie)){
      stock.tomatoCount -=1;
    }

    if(mousePressedOver(burgerBuns)){
      stock.tomatoCount -=1;
    }

    if(mousePressedOver(hotdogBuns)){
      stock.tomatoCount -=1;
    }

    if(mousePressedOver(bowl)){
      stock.tomatoCount -=1;
    }

    if(mousePressedOver(plainNoodles)){
      stock.tomatoCount -=1;
    }





    
  }else if(gameState === "shop"){
    ingredientsGroup.setVisibleEach(false);
    custGroup.setVisibleEach(true);


  }


  if(mousePressedOver(toggleSceneButton)) {
    if(gameState === "kitchen"){
      gameState = "shop";
    }
    if(gameState === "shop"){
      gameState = "kitchen";
    }

    getScene();
  }
  

}

function getScene(){
  if(gameState === "kitchen") {
    backgroundImg = loadImage("images/kitchen.jpg");
   
  }
  else if(gameState === "shop") {
    backgroundImg = loadImage("images/shop.jpg");
    
  }
}