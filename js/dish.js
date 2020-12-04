class Dish {
    constructor(data) {

        this.burgerIMG = loadImage("images/burger.png");
        this.hotdogIMG = loadImage("images/hotdog.png");
        this.noodlesIMG = loadImage("images/noodles.png");
        this.friesIMG = loadImage("images/fries.png");

        this.choice = data;
        this.dish = createSprite(width/2,height/2);

    }

    
    
    display() {
        

        switch(this.choice){
            case 1 : this.dish.addImage(this.noodlesIMG);
            break;
            case 2 : this.dish.addImage(this.hotdogIMG);
            break;
            case 3 : this.dish.addImage(this.friesIMG);
            break;
            case 4 : this.dish.addImage(this.burgerIMG);
            break;

        }
    }
}