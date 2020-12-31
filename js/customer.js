class Customer {
    constructor() {


        this.custIMG1 = loadImage("images/man.png");
        this.custIMG2 = loadImage("images/man2.png");
        this.custIMG3 = loadImage("images/women.png");
        this.custIMG4 = loadImage("images/girl.png");

        this.cust = createSprite(300,height/1.5);
    }


    display() {

        var rand = Math.round(random(1,4));

        switch(rand){
            case 1: this.cust.addImage(this.custIMG1);
            break;
            case 2: this.cust.addImage(this.custIMG2);
            break;
            case 3: this.cust.addImage(this.custIMG3); 
            break;
            case 4: this.cust.addImage(this.custIMG4); 
            break;
        }

        this.cust.scale = 2.5;

    }
}